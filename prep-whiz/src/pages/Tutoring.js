import React from 'react';
import TutorProfile from '../components/TutorProfile';
import person1 from "../styles/person1.jpeg"
import { PiStudent, PiChalkboardTeacherLight } from 'react-icons/pi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import {BsGraphUp} from 'react-icons/bs'
const Tutoring = () => {
    return (
        <div className="bg-gray-200">
            <div className="h-8/12 w-full bg-gray-700">
                <h1 className="text-gray-200 text-center font-semibold text-3xl">
                    GET A FREE CALL TODAY - (470)-919-2464
                </h1>
            </div>
            <h1 className="text-4xl text-gray-900 font-extrabold py-8 text-center">Private Tutoring</h1>
            <div>
                <h1 className="text-2xl text-gray-700 font-bold pb-2 text-center">The PrepWhiz Advantage</h1>
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
            </div>
            {/* <div className="py-12 lg:w-9/12 w-11/12 mx-auto grid grid-flow-row lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 grid-rows-2">

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
