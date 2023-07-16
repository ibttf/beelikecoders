import React, {useState,useEffect} from 'react';
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsFillPlayCircleFill ,BsPencilFill} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom';

import Loading from '../../../../pages/Loading';
const LearnMath = () => {
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(true);
    const [isTopicZeroExpanded,setIsTopicZeroExpanded]=useState(false);
    const [isTopicOneExpanded,setIsTopicOneExpanded]=useState(false);
    const [isTopicTwoExpanded,setIsTopicTwoExpanded]=useState(false);
    const [isTopicThreeExpanded,setIsTopicThreeExpanded]=useState(false);
    const [isTopicFourExpanded,setIsTopicFourExpanded]=useState(false);
    const [isTopicFiveExpanded,setIsTopicFiveExpanded]=useState(false);
    const [isTopicSixExpanded,setIsTopicSixExpanded]=useState(false);
    const topics=[{name: "Linear Equations",
                   lessons: [
                    {name: "Solving 1-Variable Linear Equations"},
                    {name: "Solving 4-Variable Linear Equations"},
                   ]},
                   {name: "Linear Equations 2",
                   lessons: [
                    {name: "Solving 2-Variable Linear Equations"}
                   ]},
                   {name: "Linear Equations 3",
                   lessons: [
                    {name: "Solving 3-Variable Linear Equations"}
                   ]},
                ]
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
        setIsLoading(false);
    },[])

    if (isLoading) return <Loading />
    return (
        <div className="mx-60 mt-24">
            <h1 className="text-left font-extrabold text-5xl text-gray-700">Math</h1>
            <div className="flex flex-col">
                {topics.map((topic,i)=>(
                <div className="border border-gray-400 rounded p-4 mt-12">
                    <div className="flex items-center" onClick={()=>expandTopic(i)}>
                        <h1 className="text-2xl font-bold w-9/12">{i+1 + ". " +topic.name}</h1>
                        <button className="mx-2 text-gray-600 font-light">Practice</button>
                        <button className="mx-2 text-gray-600 font-light">Video</button>
                        <h1 className="mx-2 text-gray-600 font-light">Mastery</h1>
                        <AiOutlineArrowDown size="12" onClick={()=>expandTopic(i)}
                        className={`text-gray-600 hover:text-black
                                    transition-all duration-100 ease-linear
                                    cursor-pointer group ml-2 p-3 h-12 w-12 mt-2 mb-2 ${checkExpandedTopic(i) ? "rotate-180" : ""}`}>
                        </AiOutlineArrowDown>

                    </div>
                    {topic.lessons.map((lesson, j)=>(
                        <div className={`${checkExpandedTopic(i)?"h-full overflow-auto":"h-0 overflow-hidden hidden"}`}>
                            <div className="m-3 flex items-center hover:bg-gray-200 rounded-xl group">
                                <h1 onClick={()=>{navigate("/testprep/sat/learn/math/practice/"+lesson.name)}}
                                    className={`text-lg font-normal w-9/12 p-3 group-hover:underline`} >{j+1 + ". " + lesson.name}</h1>
                                <BsPencilFill onClick={()=>{navigate("/testprep/sat/learn/math/practice/"+lesson.name)}}
                                              className="ml-8 cursor-pointer border-2 border-white bg-gray-900 rounded-3xl text-white p-2 hover:bg-gray-200 hover:text-gray-900 hover:border-gray-900" size="36"/>
                                <BsFillPlayCircleFill onClick={(e)=>{
                                    e.stopPropagation()
                                    navigate("/testprep/sat/learn/math/video/"+lesson.name)
                            
                                }} className="ml-8 cursor-pointer border-2 border-white rounded-3xl" size="36"/>
                                <h1 className={`text-center text-lg font-bold ml-8 border py-1 px-4 bg-green-${5+"00"} text-gray-300 rounded-3xl`}>5</h1>
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
