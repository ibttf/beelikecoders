import React, {useState} from 'react';
import TutorProfile from '../components/TutorProfile';
import person1 from "../styles/person1.jpeg"
import { PiStudent, PiChalkboardTeacherLight } from 'react-icons/pi';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCheck, AiOutlineMail, AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';
import {GrDocumentText} from "react-icons/gr"
import {BsFillPencilFill, BsPencilFill, BsGraphUp, BsBook} from 'react-icons/bs'
const Tutoring = () => {
    const [individualOpen,setIndividualOpen]=useState(false)
    const[groupOpen,setGroupOpen]=useState(false)
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
    const [open4,setOpen4]=useState(false)
    const [open5,setOpen5]=useState(false)
    const [open6,setOpen6]=useState(false)
    return (
        <div className="bg-gray-200">
            <div className="h-8/12 w-full bg-gray-700">
                <h1 className="text-gray-200 text-center font-semibold text-3xl py-4">
                    GET A FREE CALL TODAY - (470)-919-2464
                </h1>
            </div>


            <h1 className="text-5xl text-gray-900 font-extrabold py-8 text-center">Private Tutoring</h1>
            

                <h1 className="text-4xl text-gray-900 font-bold pb-2 text-center">The PrepWhiz Advantage</h1>
                {/* THREE GRID HERO */}
                <div>
                    <div className="grid md:grid-cols-3 grid-flow-row w-10/12  gap-4 mx-auto text-center border-black py-12">
                        <div className="w-full text-center">
                            <PiStudent size="100" className="mx-auto text-gray-800"/>
                            <h1 className="text-2xl font-semibold text-gray-800 py-2">
                                Testing Pros
                            </h1>
                            <p className="text-gray-700 md:w-full w-8/12 mx-auto">
                                Our tutors are all 99th percentile test takers in their fields who have completely mastered these standardized tests when they were students. Leave the rest. Learn from the best.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <BsGraphUp size="100" className="mx-auto text-gray-800"/>
                            <h1 className="text-2xl font-semibold text-gray-800 py-2">
                                Proven Track Record
                            </h1>
                            <p className="text-gray-700 md:w-full w-8/12 mx-auto">
                                Students working with the tutors at PrepWhiz experience an average score increase of <span className="font-semibold">110</span> points after 10 sessions.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <PiChalkboardTeacherLight size="100" className="mx-auto text-gray-800"/>
                            <h1 className="text-2xl font-semibold text-gray-800 py-2">
                                Cost Effective
                            </h1>
                            <p className="text-gray-700 md:w-full w-8/12 mx-auto">
                                Our business is designed to reach as many people as possible. Get the same quality of personalized education for less than <span>half</span> the cost of the industry titans. 
                            </p>
                        </div>
                    </div>
             
                </div>
            
                <div className="bg-gray-700 py-12">
                    <h1 className="text-4xl text-gray-200 font-bold py-2 text-center">Our Process</h1>
                    <div className="grid grid-flow-row grid-cols-1 grid-rows-3 my-8">
                        <div className="grid grid-flow-cols grid-cols-3 w-10/12 mx-auto">
                            <div className=" h-96 flex flex-col justify-center items-center">
                                <span className="text-4xl font-extrabold text-left text-gray-200 mb-4 flex items-center">
                                    <BsPencilFill size="36" className="text-gray-200 -ml-12 mr-4"/>
                                    Diagnostic Test
                                </span>
                                <div className="text-semibold text-gray-300 text-lg">
                                    We believe that every standardized test is just a collection of rules. Learn the rules, learn the test.
                
                                    The purpose of the diagnostic assesment is to let us know which rules the student already knows so that we can only prepare them for the ones they don't.
                
                                    Our free two hour diagnostic assesment pinpoints exactly what our students are struggling with.
                                </div>
                            </div>
                            <div className="col-span-2 h-96 text-left ">

                            </div>    
                        </div>
                        <div className="grid grid-flow-cols grid-cols-3 w-10/12 mx-auto">
                            <div className="col-span-2 h-96 text-left ">

                            </div> 
                            <div className=" h-96 flex flex-col justify-center items-center">
                                <span className="text-4xl font-extrabold text-left text-gray-200 mb-4 flex items-center">
                                    <PiChalkboardTeacherLight size="48" className="text-gray-200 -ml-12 mr-4"/>
                                    Tutor Match
                                </span>
                                <div className="text-semibold text-gray-300 text-lg">
                                    Every student has their strengths and weaknesses. And while our tutors are all text experts, they have their own specialties too. 
                                    <br></br>
                                    After taking our free diagnostic exam and questionnaire, get connected with the best teacher for you.
                                </div>
                            </div>
        
                        </div>
                        <div className="grid grid-flow-cols grid-cols-3 w-10/12 mx-auto">
                            <div className=" h-96 flex flex-col justify-center items-center">
                                <span className="text-4xl font-extrabold text-left text-gray-200 mb-4 flex items-center">
                                    <BsBook size="36" className="text-gray-200 -ml-12 mr-4"/>
                                    Practice
                                </span>
                                <div className="text-semibold text-gray-300 text-lg">
                                    At the end of the day, no matter how many tricks and formulas you learn, they won't be of any help unless you know them. Learn skills in class and out of class with our practice-focused approach and 1-2 hours of weekly homework.
                                </div>
                            </div>
                            <div className="col-span-2 h-96 text-left ">

                            </div>    
                        </div>
                    </div>
                </div>




            {/* PRICING */}
            <div className="mt-16">
            <h1 className="text-4xl text-gray-900 font-bold pb-2 text-center">Pricing</h1>
            <div className="py-12 lg:w-9/12 w-11/12 mx-auto md:flex pb-12">
                <div className="w-full h-full mx-2 border-2 p-3 border-blue-950 rounded-lg shadow-lg text-left px-6 py-12 md:mb-0 mb-4">
                    <div onClick={()=>setIndividualOpen(!individualOpen)}  className="cursor-pointer flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-blue-900">
                            Individual Tutoring <br></br><span className="text-xl font-bold">SAT/ACT/DSAT</span>
                        </h2>
                        <div 
                            className={`md:text-2xl text-lg text-gray-900 font-semibold flex justify-between transition-all duration-300`}>

                            {individualOpen?
                            <AiOutlineMinus size="32" className="text-blue-900"/>
                                :
                            
                            <AiOutlinePlus size="32" className="text-blue-900"/>
                            }
                            
                        </div>
                    </div>

                    <div className={`${individualOpen? "h-12/12": "h-0"} overflow-hidden`}>
                        <h3 className="py-6 font-bold text-lg text-gray-900">Prepaid 10 hour package</h3>
                        <h1 className="font-extrabold text-3xl">from $600</h1>
                        <h3 className="pt-6 pb-12">Or <span className="font-bold">Pay As You Go $70 per hour,</span> billed monthly</h3>
                        <ul className="grid grid-flow-row grid-cols-1 gap-8">
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Free Diagnostic Test
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Weekly hour-long sessions
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Monthly report cards
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    1 - 2 hours of weekly homework
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    24/7 Helpline to ask any test-related questions
                                </h4>
                            </li>
                        </ul>
                        <div className="w-full flex justify-center">
                            <button className=" px-4 py-3 mt-8 hover:bg-blue-950 bg-blue-900 text-white text-xl font-semibold rounded-xl cursor-pointer">Get Individual Tutoring</button>
                        </div>
                    </div>

                </div>
                <div className="w-full h-full mx-2 border-2 p-3 border-blue-950 rounded-lg shadow-lg text-left px-6 py-12">
                    <div onClick={()=>setGroupOpen(!groupOpen)}  className="cursor-pointer flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-blue-900">
                            Group Tutoring (2-3) <br></br><span className="text-xl font-bold">SAT/ACT/DSAT</span>
                        </h2>
                        <div 
                            className={`md:text-2xl text-lg text-gray-900 font-semibold flex justify-between transition-all duration-300`}>

                            {groupOpen?
                            <AiOutlineMinus size="32" className="text-blue-900"/>
                                :
                            
                            <AiOutlinePlus size="32" className="text-blue-900"/>
                            }
                            
                        </div>
                    </div>

                    <div className={`${groupOpen? "h-12/12": "h-0"} overflow-hidden`}>
                        <h3 className="py-6 font-bold text-lg text-gray-900">Prepaid 10 hour package</h3>
                        <h1 className="font-extrabold text-3xl">from $400 per student</h1>
                        <h3 className="pt-6 pb-12">Or <span className="font-bold">Pay As You Go $50 per hour per student,</span> billed monthly</h3>
                        <ul className="grid grid-flow-row grid-cols-1 gap-8">
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Free Diagnostic Test
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Weekly two-hour-long sessions
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    Monthly report cards
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    1 - 2 hours of weekly homework
                                </h4>
                            </li>
                            <li className="flex items-center justify-left">
                                <AiOutlineCheck className="text-blue-900 w-1/12 border-2 rounded-full border-blue-900 p-1" size="36"/>
                                <h4 className="ml-2 w-full">
                                    24/7 Helpline to ask any test-related questions
                                </h4>
                            </li>
                        </ul>
                        <div className="w-full flex justify-center">
                            <button className=" px-4 py-3 mt-8 bg-blue-900 hover:bg-blue-950 text-white text-xl font-semibold rounded-xl cursor-pointer">Get Group Tutoring</button>
                        </div>
                    </div>

                </div>

            </div>
            <p className="text-center w-6/12 mx-auto pb-16 text-lg text-gray-800">
                Group lessons are available to students from the same school and studying the same tests. 
                <br></br>
                Groups are self-formed, meaning you and your friends can sign up together. 
                <br></br>
                Booking as a group unlocks great value pricing. 
            </p>
            </div>

            

                {/* CONTACT */}
                <div className="py-12">
                    <h1 className="text-4xl text-center font-extrabold text-gray-900 md:pb-12 pb-8">Need Some Help?</h1>
                    <div className="grid grid-cols-3 grid-flow-cols gap-8 w-8/12 mx-auto py-8 px-24 rounded-xl ">
                        <div className="w-full border-4 border-gray-700 p-4 rounded-3xl">
                            <AiOutlineMail size="96" className="mx-auto p-4 rounded-full bg-gray-900 text-gray-200 "/>
                            <h1 className="text-center font-extrabold mt-4 text-lg text-gray-800">
                                Email Us
                            </h1>
                            <h3 className="text-center py-4 font-semibold text-gray-700">
                                help@prepwhiz.com
                            </h3>
                        </div>
                        <div className="w-full border-4 border-gray-700 p-4 rounded-3xl">
                            <AiOutlinePhone size="96" className="mx-auto p-4 rounded-full bg-gray-900 text-gray-200 "/>
                            <h1 className="text-center font-extrabold mt-4 text-lg text-gray-800">
                                Call Us
                            </h1>
                            <h3 className="text-center pt-4 font-semibold text-gray-700">
                                (470) 919 - 2464
                            </h3>
                            <h6 className="text-center font-light text-gray-600 text-sm">
                                Available 9-5 pm EST
                            </h6>
                        </div>
                        <div className="w-full border-4 border-gray-700 p-4 rounded-3xl">
                            <AiOutlineMessage size="96" className="mx-auto p-4 rounded-full bg-gray-900 text-gray-200 "/>
                            <h1 className="text-center font-extrabold mt-4 text-lg text-gray-800">
                                Text Us
                            </h1>
                            <h3 className="text-center pt-4 font-semibold text-gray-700">
                                (470) 919 - 2464
                            </h3>
                            <h6 className="text-center font-light text-gray-600 text-sm">
                                After-hours emergencies
                            </h6>
                        </div>
                    </div>
                    
                </div>    

                {/* FREQUENTLY ASKED QUESTIONS */}
                <div className="w-full bg-gray-700">
                    <div className="grid grid-cols-1 grid-flow-row gap-2 py-12 md:w-7/12 w-11/12 mx-auto text-left">
                        <h1 className="font-semibold md:text-3xl text-2xl text-gray-200 font-mono text-center md:pb-12 pb-6">FREQUENTLY ASKED QUESTIONS</h1>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>
                        
                        
                        
                        <div onClick={()=>setOpen1(!open1)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            How much does it cost to work with an individual tutor?
                            {open1?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open1? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>




                        <div onClick={()=>setOpen2(!open2)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            What do I get in each membership level?
                            {open2?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open2? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>
                        
                        
                        
                        <div onClick={()=>setOpen3(!open3)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            Do you offer payment plans?
                            {open3?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open3? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>


                        
                        <div onClick={()=>setOpen4(!open4)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            Do you require a subscription to work with your tutors?
                            {open4?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open4? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>

                        
                        <div onClick={()=>setOpen5(!open5)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            Can I work with more than one tutor?
                            {open5?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open5? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>

                        
                        
                        <div onClick={()=>setOpen6(!open6)}
                            className={`md:text-2xl text-lg text-gray-300 font-semibold py-2 flex justify-between transition-all duration-300`}>
                            Do you have a cancellation policy?
                            {open6?
                            <AiOutlineMinus size="24" className=""/>
                                :
                            
                            <AiOutlinePlus size="24" className=""/>
                            }
                            
                        </div>
                        <div className={`${open6? "h-full": "h-0"} overflow-hidden pl-2 text-gray-400`}>
                            explanation about the level blah blah blah
                        </div>
                        <hr className="h-0.5 bg-gray-400 w-full mx-auto"></hr>


                    </div>
                </div>


            {/* <h1 className="text-4xl text-gray-700 font-bold pb-2 text-center">Meet the Team</h1>
            <div className="py-12 lg:w-9/12 w-11/12 mx-auto grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 grid-rows-2">
      
                <TutorProfile person={person1} 
                            name="Andra Colsen" 
                            title="SAT Reading/Writing Tutor"
                            scores={[1550,800,750,0,0,0]}
                            bio="The SAT will make sense when you start focusing on one question at a time -- do the question, review it, learn it. You got this."
                    />
                
                <TutorProfile person={person1} 
                            name="Andra Colsen" 
                            title="SAT Reading/Writing Tutor"
                            scores={[1550,800,750,0,0,0]}
                            bio="The SAT will make sense when you start focusing on one question at a time -- do the question, review it, learn it. You got this."
                    />
                
                <TutorProfile person={person1} 
                            name="Andra Colsen" 
                            title="SAT Reading/Writing Tutor"
                            scores={[1550,800,750,0,0,0]}
                            bio="The SAT will make sense when you start focusing on one question at a time -- do the question, review it, learn it. You got this."
                    />
                
                <TutorProfile person={person1} 
                            name="Andra Colsen" 
                            title="SAT Reading/Writing Tutor"
                            scores={[1550,800,750,0,0,0]}
                            bio="The SAT will make sense when you start focusing on one question at a time -- do the question, review it, learn it. You got this."
                    />
                
                </div> */}

                
        </div>
    );
}

export default Tutoring;
