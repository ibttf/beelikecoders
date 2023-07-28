import React, {useState,useEffect} from 'react';
import {AiOutlineArrowDown, AiOutlinePlus} from "react-icons/ai"
import {BsFillPlayCircleFill ,BsPencilFill,BsBook} from "react-icons/bs"
import {TbWriting} from "react-icons/tb"
import { Link, useNavigate, useParams } from 'react-router-dom';
import config from '../../../baseUrl';

import Loading from '../../../pages/Loading';
const LearnSubject = (props) => {
    const navigate=useNavigate();
    const {subject}=useParams()
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
              const response = await fetch(`${config.baseUrl}/subjects/${subject}/topics`);
              const topics=await response.json()
              console.log(topics)
              setTopics([...topics])
            }catch(err){
            }
          }

        const getLessonInteractionsBySubject=async()=>{
            try{
            const response = await fetch(`${config.baseUrl}/users/${subject}/lesson-interactions`, {
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
        <div className={`${props.isExpanded ? "ml-72" : ""} duration-300 mx-60 my-24`}>
            {getCorrectHeader(subject)}
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
                        <div className={`${checkExpandedTopic(i)?"h-12/12":"h-0"} overflow-hidden flex items-center`} onClick={()=>expandTopic(i)}>
                            <h1 onClick={()=>{navigate("/testprep/sat/learn/"+subject+"/practice/"+lessonName)}}
                                className="ml-4 text-lg w-9/12 text-gray-800 overflow-hidden">{j+1 + ". " +lessonName}</h1>
                                 <BsPencilFill onClick={()=>{navigate("/testprep/sat/learn/"+subject+"/practice/"+lessonName)}}
                                               className="mx- cursor-pointer border-2 border-white bg-gray-900 rounded-3xl text-white p-2 hover:bg-gray-200 hover:text-gray-900 hover:border-gray-900" size="36"/>
                                 <BsFillPlayCircleFill onClick={(e)=>{
                                     e.stopPropagation()
                                     navigate("/testprep/sat/learn/"+subject+"/video/"+lessonName)
                            
                                 }} className="ml-8 cursor-pointer border-2 border-white rounded-3xl text-gray-900" size="36"/>
                                 
                                 {lessonInteractions.length ? 
                                 lessonInteractions.map((lessonInteraction)=>{
                                     if (lessonInteraction.lessonName===lessonName){
                                         return (
                                             <h1 className={`text-center text-lg font-bold ml-8 border py-1 px-4 bg-green-${lessonInteraction.mastery}00 border-gray-900 text-gray-900 rounded-3xl`}>
                                                 {lessonInteraction.mastery}
                                             </h1>
                                             )
                                         }return (
                                             <h1 className={`text-center font-bold ml-8 border py-1 px-4 border-gray-900 text-gray-900 rounded-3xl`}>
                                                 0
                                             </h1>
                                             )
                                     })
                                     :
                                    (<h1 className={`text-center font-bold ml-8 border py-1 px-4 border-gray-900 text-gray-900 rounded-3xl`}>
                                            0
                                    </h1>)
                                    }

                                 
                                 
                            <div
                            className={`text-gray-800 hover:text-gray-900
                                        transition-all duration-100 ease-linear
                                        cursor-pointer group ml-2 p-3 h-12 w-12 mt-2 mb-2 ${checkExpandedTopic(i) ? "rotate-180" : ""}`}>
                            </div>

                        </div>


                    ))
                    }
                </div>
                ))}
            </div>
        </div>
    );

    function getCorrectHeader(subject){
        if (subject=="math"){
            return(
                <h1 className="text-left font-extrabold text-5xl text-red-800 flex items-center">
                <AiOutlinePlus size="48" className="border-2 border-white rounded-xl p-1 mx-2 bg-red-800 text-white"/>
                    Math
                </h1>
            )
        }else if (subject=="reading"){
            return(
                <h1 className="text-left font-extrabold text-5xl text-blue-800 flex items-center">
                <BsBook size="48" className="border-2 border-white rounded-xl p-2 mx-2 bg-blue-800 text-white"/>
                    Reading
                </h1>
            )
        }else{
            return(
                <h1 className="text-left font-extrabold text-5xl text-green-800 flex items-center">
                <TbWriting size="48" className="border-2 border-white rounded-xl p-1 mx-2 bg-green-800 text-white"/>
                    Writing
                </h1>
            )
        }
    }
}

export default LearnSubject;
