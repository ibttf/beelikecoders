import React, {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiFillExclamationCircle} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"
import {TbCalculator, TbCalculatorOff} from 'react-icons/tb'
const LearnMathPractice = (props) => {
    const {lesson}=useParams();
    const [answerChoice,setAnswerChoice]=useState(null);
    const [isASelected,setIsASelected]=useState(false);
    const [isBSelected,setIsBSelected]=useState(false);
    const [isCSelected,setIsCSelected]=useState(false);
    const [isDSelected,setIsDSelected]=useState(false);

    // TO RENDER DYNAMICALLY ON USE EFFECT
    const isCalculator=false
    const question={
        question_content: "x + 2 = 14",
        question: "What is x?",
        solution: "",
        id: "",
        choices: [
            "12",
            "14",
            "16",
            "18"
        ]
    }
    const navigate=useNavigate();
    
    // AVAILABLE IS lesson NAME AND THAT'S IT
    // on use effect, get random question with lessonName
    // on submission of question answer, do calculations to figure out if it's correct AND generate new
    //  user/question interaction in backend, updating everything
    // whne we figure this out, change entire display depending on whether it's correct or not

    function changeQuestionChoice(choice){
        setIsASelected(false);
        setIsBSelected(false);
        setIsCSelected(false);
        setIsDSelected(false);
        setAnswerChoice(choice);
        switch(choice){
            case "A":
                setIsASelected(true);
                break;
            case "B":
                setIsBSelected(true);
                break;
            case "C":
                setIsCSelected(true);
                break;
            case "D":
                setIsDSelected(true);
                break;
            default:
                break;
        }
    }
    
    return (
        <>
        {/*  INNER TOP BAR AND QUESTION */}
        <div className="px-96 h-full">
            {/* INNER TOP BAR */}
            <div className="">
                <div className="px-32 flex items-center">
                    {isCalculator ? <TbCalculator size="32" className="text-gray-500"/>: <TbCalculatorOff size="32" className="text-gray-500"/>}

                    {/* CHANGE THIS RIGHT HERE TO HAVE QUESTION BE DYNAMICALLY LOADED IDK HOW YET THO */}
                    <h2 className="mx-4 font-normal text-md text-gray-500 w-11/12">Question {1} of 5</h2>
                    <div className="flex items-center">
                        <div onClick={()=>{navigate("/testprep/sat/learn/math/video/"+lesson)}}
                            className="flex items-center mx-2">
                            <BsFillPlayCircleFill size="24" className="text-gray-500 hover:text-gray-900"/>
                            <h1 className="mx-1 font-light text-xs ">Video</h1>
                        </div>
                        <div className="flex items-center mx-2">
                            <AiFillExclamationCircle size="24" className="text-gray-500 hover:text-gray-900"/>
                            <h1 className="mx-1 font-light text-xs ">Report</h1>
                        </div>
                    </div>
                </div>

                <hr className="my-8">
                </hr>
            </div>


            {/* ACTUAL QUESTION */}
            <div className="px-32">
                <div className="text-black my-12 text-xl font-serif">
                    {question.question_content}
                </div>
                <div className="my-12 text-black text-xl font-normal font-serif">
                    {question.question}
                </div>
                <div>
                    {question.choices.length===4?
                    <div className="flex flex-col justify-evenly w-full font-serif">
                        <h1 onClick={()=>{changeQuestionChoice("A");}}
                            className={`py-3 rounded border-2 ${isASelected ? "bg-blue-200 border-blue-700" : "border-white"}`}>
                            <span className={`${isASelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                A
                            </span> 
                            <span>
                                {question?.choices[0]}
                            </span>
                        </h1>
                        <h1 onClick={()=>{changeQuestionChoice("B");}}
                            className={`py-3 rounded border-2 ${isBSelected ? "bg-blue-200 border-blue-700" : "border-white"}`}>
                            <span className={`${isBSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                B
                            </span> 
                            <span>
                                {question?.choices[1]}
                            </span>
                        </h1>
                        <h1 onClick={()=>{changeQuestionChoice("C");}}
                            className={`py-3 rounded border-2 ${isCSelected ? "bg-blue-200 border-blue-700" : "border-white"}`}>
                            <span className={`${isCSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                C
                            </span> 
                            <span>
                                {question?.choices[2]}
                            </span>
                        </h1>
                        <h1 onClick={()=>{changeQuestionChoice("D");}}
                            className={`py-3 rounded border-2 ${isDSelected ? "bg-blue-200 border-blue-700" : "border-white"}`}>
                            <span className={`${isDSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                D
                            </span> 
                            <span>
                                {question?.choices[3]}
                            </span>
                        </h1>

                    </div>
                    :
                    <div className="w-4/12">
                    <div className="sm:col-span-3">
                        <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder={props.user?.username}
                        autoComplete="username"
                        className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                }

                </div>
            </div>




        </div>
        {/* FOOTER */}
        <div className="absolute bottom-0 w-screen">
            <hr></hr>
            <div className="px-96 flex justify-between py-6 items-center">

                <h2 className={`mx-4 font-extrabold text-xl  w-11/12`}>
                    <span className={`mr-4`}>
                        Mastery: 
                    </span>
                    <span className={`border-2 rounded-full border-green-${5}00 p-2 text-green-${5}00`}>
                        {1}
                    </span>

                </h2>

                
                <button className="border-2 px-4 py-3 rounded-xl bg-blue-700 text-gray-300 font-bold whitespace-nowrap first-letter:hover:bg-blue-900 ">Next Question</button>
                
            </div>

        </div>
        </>
    );
}

export default LearnMathPractice;
