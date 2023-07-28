import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlinePlus} from "react-icons/ai"
const LearnPracticeTopBar = (props) => {
    const {lesson}=useParams();
    const navigate=useNavigate();
    return (
        <>
            <div className="grid grid-cols-3 grid-flow-col items-center text-center gap-16 mt-8">
                <div className="font-semibold text-gray-500 flex items-center justify-center">
                    {getCorrectIcon(props.subject)}
                    <h2>{lesson}</h2>
                </div>
                <h2 onClick={()=>{navigate("/testprep/sat")}}
                    className="font-bold text-3xl cursor-pointer hover:text-blue-700">PrepWhiz</h2>
                <h1 onClick={()=>navigate("/testprep/sat/learn/math")}
                    className={`font-semibold text-gray-500 cursor-pointer hover:text-gray-900 hover:underline`}>
                    Exit this Practice</h1>
            </div>
            <hr className="my-8"></hr>
        </>
    )
    function getCorrectIcon(subject){
        if (subject=="math"){
            return (<AiOutlinePlus size="32" className="border-2 border-white rounded-xl p-1 mx-2 bg-red-800 text-white"/>)
        }else if (subject=="writing"){

        }else{
            
        }
    }
}

export default LearnPracticeTopBar;
