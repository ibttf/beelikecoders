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
                    <AiOutlinePlus size="32" className="border-2 border-white rounded-xl p-1 mx-2 bg-red-400 text-white"/>
                    <h2>{lesson}</h2>
                </div>
                <h2 onClick={()=>{navigate("/testprep/sat")}}
                    className="font-bold text-3xl cursor-pointer hover:text-blue-700">PrepWhiz</h2>
                <h1 onClick={()=>navigate("/testprep/sat/learn/math")}
                    className={`font-semibold hover:underline`}>
                    Exit this Practice</h1>
            </div>
            <hr className="my-8"></hr>
        </>
    )
}

export default LearnPracticeTopBar;