import React, {useState,useEffect, useRef} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiFillExclamationCircle} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"
import {TbCalculator, TbCalculatorOff} from 'react-icons/tb'
import Loading from '../../../../pages/Loading';
import config from '../../../../baseUrl';
const LearnMathPractice = (props) => {
    const {lesson}=useParams();
    const [lessonDetails,setLessonDetails]=useState(null)
    const [questionDetails,setQuestionDetails]=useState(null)
    const [toggle,setToggle]=useState(false);
    const [isCorrect, setIsCorrect]=useState(0);
    const [isASelected,setIsASelected]=useState(false);
    const [isBSelected,setIsBSelected]=useState(false);
    const [isCSelected,setIsCSelected]=useState(false);
    const [isDSelected,setIsDSelected]=useState(false);

    const qid=useRef(null);
    const questionCounter=useRef(1);
    const isShowingSolution=useRef(false);
    const answerChoice=useRef(null);
    const solution=useRef(null);

    const navigate=useNavigate();
    
    
    function changeQuestionChoice(choice){
        
        setIsASelected(false);
        setIsBSelected(false);
        setIsCSelected(false);
        setIsDSelected(false);
        answerChoice.current=choice;
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
        setIsASelected(false);
        setIsBSelected(false);
        setIsCSelected(false);
        setIsDSelected(false);
        try{
            //SUBMIT 
            const response=await fetch(`${config.baseUrl}/questions/submit/`,{
                method: "POST",
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                body: JSON.stringify({
                    qid: questionDetails._id,
                    choice: answerChoice.current
                })
              },
              )
              const jsonResponse=await response.json()
              
              solution.current=(jsonResponse.solution)
              if(!jsonResponse.questionInteraction.isCorrect){
                setIsCorrect(1);
                setToggle(!toggle)
                isShowingSolution.current=true;
                //IS CORRECT = 0 MEANS UNANSWERED
                //IS CORRECT = 1 MEANS ANWERED, INCORRECT
                //IS CORRECT = 2 MEANS ANSWERED, CORRECT
              }else{
                //IF CORRECT, THEN YOU UPDATE THE COUNTER
                qid.current=null
                setIsCorrect(2);
                questionCounter.current=questionCounter.current+1
                setToggle(!toggle)
                handleNextQuestionClick();
              }
        }catch(err){
        }
    }

    const handleNextQuestionClick=async()=>{
            try{
              const response = await fetch(`${config.baseUrl}/questions/next-question`,{
                method: "POST",
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                body: JSON.stringify({
                    qid: questionDetails._id
                })
              });
              const jsonResponse=await response.json()
            }catch(err){
            }

    }
    
    function getCorrectChoices(){

        let arr=["A",'B','C','D']
        return(
        <div className="flex flex-col justify-evenly w-full font-serif mb-8"> 
            {arr.map((choice,i)=>{
                if (choice === solution.current){
                    return(
                        <h1
                            className={`py-3 rounded border-2  border-green-700 my-2`}>
                            <span className={`text-green-700 font-sans border-2 border-green-700  p-2 rounded-full m-2`}>
                                {choice}
                            </span> 
                            <span>
                                {questionDetails?.choices[i]}
                            </span>
                        </h1>
                    )
                }else if (choice === answerChoice.current){
                    return(
                        <h1
                            className={`py-3 rounded border-2  border-red-700 my-2`}>
                            <span className={`text-red-700 font-sans border-2 border-red-700  p-2 rounded-full m-2`}>
                                {choice}
                            </span> 
                            <span>
                                {questionDetails?.choices[i]}
                            </span>
                        </h1>
                    )
                }else{
                    return(
                        <h1
                            className={`py-3 rounded border-2  border-white my-2`}>
                            <span className={`text-gray-700 font-sans border-2 border-gray-700  p-2 rounded-full m-2`}>
                                {choice}
                            </span> 
                            <span>
                                {questionDetails?.choices[i]}
                            </span>
                        </h1>
                    )
                }
            })}
        </div>
        )
    }

    useEffect(()=>{
        const getQuestionQILessonLIWithName=async()=>{
            try{
              const response = await fetch(`${config.baseUrl}/lessons/question-interactions/${lesson}`,{
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
              
              const jsonResponse=await response.json()
              
              if (jsonResponse.message){
                setQuestionDetails(jsonResponse)
              } else{
                setQuestionDetails(jsonResponse.question)  
                setLessonDetails(jsonResponse.lesson)
                qid.current=jsonResponse.questionId
              }

            }catch(err){
                setQuestionDetails({message: "All out of questions."})
            }
          }

        getQuestionQILessonLIWithName();

        

    },[toggle])

    if (!questionDetails){
        return <Loading />
    } 
    
    if (questionDetails.message){
        //IF YOU HAVE NO MORE QUESTIONS LEFT
        return(
            <div className="px-96 h-full">
                NO MORE QUESTIONS LEFT
            </div>
        )
    }

    if (isShowingSolution.current){
        return(
            <div>
            {/*  INNER TOP BAR AND QUESTION */}
            <div className="px-96 h-full">
                {/* INNER TOP BAR */}
                <div className="">
                    <div className="px-32 flex items-center">
                        {questionDetails.isCalc ? <TbCalculator size="32" className="text-gray-500"/>: <TbCalculatorOff size="32" className="text-gray-500"/>}

                        {/* CHANGE THIS RIGHT HERE TO HAVE QUESTION BE DYNAMICALLY LOADED IDK HOW YET THO */}
                        <h2 className="mx-4 font-normal text-md text-gray-500 w-11/12">Question {questionCounter.current} of 5 <span className="text-red-700 font-bold">{isShowingSolution.current ? `INCORRECT`:`` }</span></h2>
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
                <div className="px-32 h-screen">
                    <div className="text-black my-12 text-xl font-serif">
                        {questionDetails.content}
                    </div>
                    <div className="my-12 text-black text-xl font-normal font-serif">
                        {questionDetails.question}
                    </div>
                    <div>
                        {questionDetails.choices.length==4?
                        
                        <>{getCorrectChoices()}</>


                        :
                        <div className="w-4/12">
                        <div className="sm:col-span-3">
                            <input
                            type="text"
                            className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    }

                    </div>
                </div>




            </div>
            {/* FOOTER */}
            <div className="bottom-0 w-screen mt-4 fixed bg-white z-20">
                <hr className="bg-gray-900"></hr>
                <div className="px-96 flex justify-between items-center">

                    <h2 className={`mx-4 font-extrabold text-xl  w-11/12`}>
                        <span className={`mr-4`}>
                            Mastery: 
                        </span>
                        <span className={`border-2 rounded-full border-green-${lessonDetails.mastery}00 p-2 text-green-${5}00`}>
                            {lessonDetails.mastery}
                        </span>

                    </h2>

                    <button onClick={()=>handleNextQuestionClick()}
                    className="border-2 px-4 my-2 py-3 rounded-xl bg-blue-700 text-gray-300 font-bold whitespace-nowrap hover:bg-blue-900 ">Next Question</button>
                    
                </div>

            </div>
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
                        <h2 className="mx-4 font-normal text-md text-gray-500 w-11/12">Question {questionCounter.current} of 5</h2>
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
                <div className="px-32 h-screen">
                    <div className="text-black my-12 text-xl font-serif">
                        {questionDetails.content}
                    </div>
                    <div className="my-12 text-black text-xl font-normal font-serif">
                        {questionDetails.question}
                    </div>
                    <div>
                        {questionDetails.choices.length==4?
                        <div className="flex flex-col justify-evenly w-full font-serif mb-8">
                            <h1 onClick={()=>{changeQuestionChoice("A");}}
                                className={`my-2 py-3 rounded border-2  ${isASelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isASelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    A
                                </span> 
                                <span>
                                    {questionDetails?.choices[0]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("B");}}
                                className={`my-2 py-3 rounded border-2 ${isBSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isBSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    B
                                </span> 
                                <span>
                                {questionDetails?.choices[1]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("C");}}
                                className={`my-2 py-3 rounded border-2 ${isCSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
                                <span className={`${isCSelected ? "bg-blue-600 text-white" :"text-blue-700"} font-sans border-2 border-blue-700  p-2 rounded-full m-2`}>
                                    C
                                </span> 
                                <span>
                                {questionDetails?.choices[2]}
                                </span>
                            </h1>
                            <h1 onClick={()=>{changeQuestionChoice("D");}}
                                className={`my-2 py-3 rounded border-2 ${isDSelected ? "bg-blue-200 border-blue-700" : "border-white  hover:bg-gray-200" }`}>
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
                            className="w-full block w-12/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    }

                    </div>
                </div>




            </div>
            {/* FOOTER */}
            <div className="bottom-0 w-screen mt-4 fixed bg-white z-20">
                <hr className="bg-gray-900"></hr>
                <div className="px-96 flex justify-between items-center">

                    <h2 className={`mx-4 font-extrabold text-xl  w-11/12`}>
                        <span className={`mr-4`}>
                            Mastery: 
                        </span>
                        <span className={`border-2 rounded-full border-green-${lessonDetails.mastery}00 p-2 text-green-${5}00`}>
                            {lessonDetails.mastery}
                        </span>

                    </h2>

                    {answerChoice.current? 
                     <button onClick={()=>handleQuestionSubmit()}
                     className="border-2 px-4 py-3 my-2 rounded-xl bg-blue-700 text-gray-300 font-bold whitespace-nowrap hover:bg-blue-900 ">Check Answer</button>
                    :
                    <button
                    className="border-2 px-4 py-3 my-2 rounded-xl bg-blue-500 text-gray-300 font-bold whitespace-nowrap ">Check Answer</button>}
                    

                    

                    
                    
                </div>

            </div>
        </div>
    );
}
}
    


export default LearnMathPractice;
