import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import {PiStudent, PiChalkboardTeacherLight} from "react-icons/pi"
import {HiOutlineDocumentSearch} from "react-icons/hi"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineRobot } from 'react-icons/ai';
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
                    <p className="lg:w-7/12 w-10/12 mx-auto font-semibold text-xl text-gray-700">Learn how we can help you ace your standardized tests. </p>
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

                {/*  */}





                {/* OUR SERVICES */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">Our Services</h1>
                    <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-8 py-8">
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            <AiOutlineRobot size="72" className="relative bottom-12 bg-gray-900 mx-auto text-center p-3 text-gray-200 border-2 rounded-full"/>
                            <h1 className="text-center font-semibold text-gray-200 text-3xl pb-12 h-16">
                                AI-Powered Courses
                            </h1>
                            <div className="w-9/12 mx-auto md:h-80 h-72 text-gray-300 text-left font-semibold">
                                <p className="text-lg font-normal">
                                    Study for standardized tests with the most advanced AI on the planet for <span className="font-bold underline">90% off</span> from our competitors.
                                </p>
                                <br></br>
                                <ul className="text-md h-60">
                                    <h3 className="text-lg pb-4">
                                        Features
                                    </h3>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> 2,000+ Practice Questions
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> 12 Full-Length New Practice Tests
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> AI-Powered Score Prediction 
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> Personalized Study Roadmap
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> 24/7 Helpline
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="w-full text-center pb-12">
                                    <button onClick={()=>navigate("/testprep")} className="cursor-pointer py-2 px-12 font-extrabold text-xl border-1 bg-gray-200 rounded-3xl text-gray-700 ">Try it Now</button>
                            </div>
                        </div>
                        <div className=" border-2 border-gray-700 rounded-3xl py-4 bg-gray-700">
                            <PiChalkboardTeacherLight size="72" className="relative bottom-12 bg-gray-900 mx-auto text-center p-3 text-gray-200 border-2 rounded-full"/>
                            <h1 className="text-center font-semibold text-gray-200 text-3xl pb-12 h-16">
                                SAT/ACT Tutoring
                            </h1>
                            <div className="w-9/12 mx-auto md:h-80 h-72 text-gray-300 text-left font-semibold">
                                <p className="text-lg font-normal">
                                    Get one-on-one or group tutoring with one of our 99th percentile tutors for <span className="font-bold underline">50% off</span> from our competitors.
                                </p>
                                <br></br>
                                <ul className="text-md h-60">
                                    <h3 className="text-lg pb-4">
                                        What We Offer
                                    </h3>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> Free Diagnostic Test
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> 1 on 1 Lessons
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> Group lessons of 2-3
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> Standardized Test Bootcamps
                                    </li>
                                    <li className=''>
                                        <span className="text-xl">&#8226;</span> 24/7 Helpline
                                    </li>
                                </ul>
                                

                            </div>
                            <div className="w-full text-center pb-12">
                                    <button onClick={()=>navigate("/tutoring")} className="cursor-pointer py-2 px-12 font-extrabold text-xl border-1 bg-gray-200 rounded-3xl text-gray-700 ">Get Tutoring</button>
                                </div>
                        </div>
                        
                        
                    </div>
                </div>    


            </div>
    );
}

export default About;
