import React, {useState,useEffect} from 'react';
import {AiOutlineArrowDown, AiOutlinePlus} from "react-icons/ai"
import {BsFillPlayCircleFill ,BsPencilFill} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';
import config from '../../../../baseUrl';

import Loading from '../../../../pages/Loading';
const LearnMath = () => {
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(true);

    const[topics,setTopics]=useState([])
    const [lessonInteractions,setLessonInteractions]=useState([])
    const [lessonCount,setLessonCount]=useState(0);



    const [isTopicZeroExpanded,setIsTopicZeroExpanded]=useState(false);
    const [isTopicOneExpanded,setIsTopicOneExpanded]=useState(false);
    const [isTopicTwoExpanded,setIsTopicTwoExpanded]=useState(false);
    const [isTopicThreeExpanded,setIsTopicThreeExpanded]=useState(false);
    const [isTopicFourExpanded,setIsTopicFourExpanded]=useState(false);
    const [isTopicFiveExpanded,setIsTopicFiveExpanded]=useState(false);
    const [isTopicSixExpanded,setIsTopicSixExpanded]=useState(false);

    const expandTopic=async(id)=>{
        switch(id){
            case 0:
                setIsTopicZeroExpanded(!isTopicZeroExpanded);
                break;
            case  1:
                setIsTopicOneExpanded(!isTopicOneExpanded);
                break;
            case  2:
                setIsTopicTwoExpanded(!isTopicTwoExpanded);
                break;
            default:
                console.log("default case")
        }
    }

    function checkExpandedTopic(id){
        switch(id){
            case 0:
                return isTopicZeroExpanded

            case  1:
                return isTopicOneExpanded

            case  2:
                return isTopicTwoExpanded

            default:
                console.log("default case")
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        setIsLoading(true);
        
        const getSubjectTopics=async()=>{
            try{
              const response = await fetch(`${config.baseUrl}/subjects/math/topics`);
              const topics=await response.json()
              setTopics([...topics])
            }catch(err){
              console.log(err)
            }
          }

        const getLessonInteractionsBySubject=async()=>{
            try{
            const response = await fetch(`${config.baseUrl}/users/math/lesson-interactions`, {
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            });
            const data=await response.json()
            setLessonInteractions([...data]);

            }catch(err){
            }
        }
        getSubjectTopics();
        getLessonInteractionsBySubject();

        setIsLoading(false);
        
    },[])





    if (isLoading) return <Loading />
    return (
        <div className="mx-60 my-24">
            <h1 className="text-left font-extrabold text-5xl text-red-800 flex items-center">
            <AiOutlinePlus size="48" className="border-2 border-white rounded-xl p-1 mx-2 bg-red-800 text-white"/>
                Math
            </h1>
            <div className="flex flex-col">
                {topics.map((topic,i)=>(
                <div className="border border-gray-800 rounded p-4 mt-12">
                    <div className="flex items-center" onClick={()=>expandTopic(i)}>
                        <h1 className="text-2xl font-bold w-9/12 text-gray-800">{i+1 + ". " +topic.name}</h1>
                        <button className="mx-2 text-gray-800 font-semibold">Practice</button>
                        <button className="mx-2 text-gray-800 font-semibold">Video</button>
                        <h1 className="mx-2 text-gray-800 font-semibold">Mastery</h1>
                        <AiOutlineArrowDown size="12" onClick={()=>expandTopic(i)}
                        className={`text-gray-800 hover:text-gray-900
                                    transition-all duration-100 ease-linear
                                    cursor-pointer group ml-2 p-3 h-12 w-12 mt-2 mb-2 ${checkExpandedTopic(i) ? "rotate-180" : ""}`}>
                        </AiOutlineArrowDown>

                    </div>
                    {topic.lessonNames.map((lessonName, j)=>(
                        <div className={`${checkExpandedTopic(i)?"h-full overflow-auto":"h-0 overflow-hidden hidden"}`}>
                            <div className={`m-3 flex items-center rounded-xl group ${lessonInteractions.includes(lessonName) ? "bg-green-100 " : "hover:bg-gray-200 "}`}>
                                <h1 onClick={()=>{navigate("/testprep/sat/learn/math/practice/"+lessonName)}}
                                    className={`text-lg text-gray-800 font-normal w-9/12 p-3  ${lessonInteractions.includes(lessonName) ? "" : "group-hover:underline"}`} >{j+1 + ". " + lessonName}</h1>
                                <BsPencilFill onClick={()=>{navigate("/testprep/sat/learn/math/practice/"+topic.name+"/"+lessonName)}}
                                              className="ml-8 cursor-pointer border-2 border-white bg-gray-900 rounded-3xl text-white p-2 hover:bg-gray-200 hover:text-gray-900 hover:border-gray-900" size="36"/>
                                <BsFillPlayCircleFill onClick={(e)=>{
                                    e.stopPropagation()
                                    navigate("/testprep/sat/learn/math/video/"+lessonName)
                            
                                }} className="ml-8 cursor-pointer border-2 border-white rounded-3xl text-gray-900" size="36"/>
                                {lessonInteractions.map((lessonInteraction)=>{
                                    if (lessonInteraction.lessonName===lessonName){
                                        return (
                                            <h1 className={`text-center text-lg font-bold ml-8 border py-1 px-4 bg-green-${lessonInteraction.mastery}00 border-gray-900 text-gray-900 rounded-3xl`}>
                                                {lessonInteraction.mastery}
                                            </h1>
                                            )
                                        }return (
                                            <h1 className={`text-center text-lg font-bold ml-8 border py-1 px-4 border-gray-900 text-gray-900 rounded-3xl`}>
                                                0
                                            </h1>
                                            )
                                    })

                                }

                            </div>
                            <hr className={`border border-gray-200 rounded-full mx-2`} />
                        </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    );
}

export default LearnMath;
