import React, {useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiFillExclamationCircle} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"
import {TbCalculator, TbCalculatorOff} from 'react-icons/tb'
import Loading from '../../../../pages/Loading';
import config from '../../../../baseUrl';
const LearnMathPractice = (props) => {
    const {lesson}=useParams();
    const [noQuestions,setNoQuestions]=useState(false);
    const [lessonDetails,setLessonDetails]=useState({})
    const [questionDetails,setQuestionDetails]=useState({})
    const [answerChoice,setAnswerChoice]=useState(null);
    const [isASelected,setIsASelected]=useState(false);
    const [isBSelected,setIsBSelected]=useState(false);
    const [isCSelected,setIsCSelected]=useState(false);
    const [isDSelected,setIsDSelected]=useState(false);



    // TO RENDER DYNAMICALLY ON USE EFFECT
    const isCalculator=false
    const isInteractionExists=false
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
    
    const handleQuestionSubmit=async()=>{
        try{
            //SUBMIT 
            console.log(questionDetails);
            const response=await fetch(`${config.baseUrl}/questions/submit/`,{
                method: "POST",
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                body: JSON.stringify({
                    qid: questionDetails._id,
                    choice: answerChoice
                })
              },
              )
              const jsonResponse=await response.json()
              console.log(jsonResponse);
        }catch(err){
            console.log(err)
        }
    }

    function getButtonBasedOnInteractions(){

        if (isInteractionExists){
            //user has already submitted the answer
            return(
                <button onClick={()=>console.log("next question")}
                className="border-2 px-4 py-3 rounded-xl bg-blue-700 text-gray-300 font-bold whitespace-nowrap hover:bg-blue-900 ">Next Question</button>
            )

        }else{
            if (!answerChoice){
                //user hasn't selected an answer choice
                return(
                    <button
                    className="border-2 px-4 py-3 rounded-xl cursor-default bg-blue-400 text-gray-300 font-bold whitespace-nowrap ">Check Answer</button>
                )
            }else{
                //user has selected an answer choice and is still in the process of answering
                return(
                    <button onClick={()=>handleQuestionSubmit()}
                    className="border-2 px-4 py-3 rounded-xl bg-blue-700 text-gray-300 font-bold whitespace-nowrap hover:bg-blue-900 ">Check Answer</button>
                )
            }
        }

    }
    


    useEffect(()=>{
        const getQuestionDetailsByLessonName=async()=>{
            try{
              const response = await fetch(`${config.baseUrl}/lessons/question-interactions/${lesson}`,{
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
              
              const jsonResponse=await response.json()
              
              setQuestionDetails(jsonResponse)  
            }catch(err){
            }
          }

        getQuestionDetailsByLessonName();

        

    },[])


    if (!questionDetails._id && !questionDetails.message) return <Loading />
    
    if (questionDetails.message){
        //IF YOU HAVE NO MORE QUESTIONS LEFT
        return(
            <div className="px-96 h-full">
                NO MORE QUESTIONS LEFT
            </div>
        )

    }else{
    return (
        <div>
            {/*  INNER TOP BAR AND QUESTION */}
            <div className="px-96 h-full">
                {/* INNER TOP BAR */}
                <div className="">
                    <div className="px-32 flex items-center">
                        {questionDetails.isCalc ? <TbCalculator size="32" className="text-gray-500"/>: <TbCalculatorOff size="32" className="text-gray-500"/>}

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
                        {questionDetails.content}
                    </div>
                    <div className="my-12 text-black text-xl font-normal font-serif">
                        {questionDetails.question}
                    </div>
                    <div>
                        {questionDetails.choices.length==4?
                        <div className="flex flex-col justify-evenly w-full font-serif">
                            <h1 onClick={()=>{changeQuestionChoice("A");}}
                                className={`py-3 rounded border-2  ${isASelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isASelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    A
                                </span> 
                                <span>
                                    {questionDetails?.choices[0]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("B");}}
                                className={`py-3 rounded border-2 ${isBSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isBSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    B
                                </span> 
                                <span>
                                {questionDetails?.choices[1]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("C");}}
                                className={`py-3 rounded border-2 ${isCSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isCSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    C
                                </span> 
                                <span>
                                {questionDetails?.choices[2]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("D");}}
                                className={`py-3 rounded border-2 ${isDSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isDSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    D
                                </span> 
                                <span>
                                {questionDetails?.choices[3]}
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

                    {getButtonBasedOnInteractions()}
                    

                    
                    
                </div>

            </div>
        </div>
    );
    
    }
}

export default LearnMathPractice;
