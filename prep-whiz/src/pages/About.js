import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import {PiStudent, PiChalkboardTeacherLight} from "react-icons/pi"
import {HiOutlineDocumentSearch} from "react-icons/hi"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import TutorProfile from '../components/TutorProfile';
import person1 from '../styles/person1.jpeg'


const About = (props) => {
    const navigate=useNavigate();
    const [open1,setOpen1]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
    const [open4,setOpen4]=useState(false)
    const [open5,setOpen5]=useState(false)
    const [open6,setOpen6]=useState(false)
    const [open7,setOpen7]=useState(false)
    return (
            <div className="bg-gray-200 text-center h-full">
                {/* INTRO HEADER */}
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-700 md:py-12 py-8">Who We Are</h1>
                    <p className="lg:w-7/12 w-10/12 mx-auto font-semibold text-gray-700">Learn how we can help you ace your standardized tests. </p>
                </div>
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
                            <HiOutlineDocumentSearch size="100" className="mx-auto text-gray-800"/>
                            <h1 className="text-2xl font-semibold text-gray-800 py-2">
                                Pro Educators
                            </h1>
                            <p className="text-gray-700 md:w-full w-8/12 mx-auto">
                                Our questions and curriculum were designed by educators who have years of professional experience in education and test writing. Study with the knowledge that there is no quicker route to your target score.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <PiChalkboardTeacherLight size="100" className="mx-auto text-gray-800"/>
                            <h1 className="text-2xl font-semibold text-gray-800 py-2">
                                Cost Effective
                            </h1>
                            <p className="text-gray-700 md:w-full w-8/12 mx-auto">
                                Our business is designed to reach as many people as possible. Get the same quality of personalized education for a fraction of the cost of the industry titans. 
                            </p>
                        </div>
                    </div>
                </div>


                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:py-12 py-8">Our Services</h1>
                    <div className="w-9/12 mx-auto grid grid-cols-2 gap-8 py-8">
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            
                            <h1 className="text-center font-semibold text-gray-200 text-3xl">
                                AI-Powered SAT Practice Tool
                            </h1>
                            <p className="w-9/12 mx-auto py-2 text-gray-300">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        </div>
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            <h1 className="text-center font-semibold text-gray-200 text-3xl">
                                One on One Tutoring
                            </h1>
                            <p className="w-9/12 mx-auto py-auto">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            
                            </p>
                        </div>
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            <h1 className="text-center font-semibold text-gray-200 text-3xl">
                                Group Tutoring
                            </h1>
                        </div>http://localhost:3000/static/media/hero.07fd6fbcaa29e89de971.png
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            <h1 className="text-center font-semibold text-gray-200 text-3xl">
                                Bootcamps
                            </h1>
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

            </div>
    );
}

export default About;
