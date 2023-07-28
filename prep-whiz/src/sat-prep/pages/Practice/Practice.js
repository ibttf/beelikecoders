import React, {useState,useEffect} from 'react';
import {AiOutlineCheck} from "react-icons/ai"
import {SlDoc, SlDocs} from "react-icons/sl"
import { Link } from 'react-router-dom';

const Practice = (props) => {
     const[isIndividualClicked,setIsIndividualClicked]=useState(false);
     const [isFullClicked,setIsFullClicked]=useState(false);
     const [selectedSection, setSelectedSection]=useState("")
     const [isTimed,setIsTimed]=useState(false);
     
    return (
        <div className={`${props.isExpanded ? "ml-72": ""} mx-48 mt-24 duration-300`}>
        <h1 className="text-center font-extrabold text-5xl text-gray-700">Practice</h1>
        <div className="grid grid-col-2 grid-flow-col text-center mt-24 gap-16 auto-cols-fr">
        
            
            <div onClick={()=>{setIsFullClicked(false); setIsIndividualClicked(true)}}
            className={`relative flex items-center 
                            h-full w-11/12 mt-2 
                            border-2 hover:border-gray-900 
                            bg-gray-200
                            text-gray-700
                            rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center p-2
                            py-12 flex-col group`}>
                    <SlDoc size="48" className="mb-8 h-16"/>
                    <div className="flex items-center">
                        <div className={`relative items-center bottom-28 left-4 opacity-0 
                        bg-gray-800 text-white 
                        rounded-3xl shadow-lg  group justify-center p-2 group-hover:opacity-100`}>
                            <AiOutlineCheck size="24" />
                        </div>
                        <h1 className="text-3xl font-bold w-88">Individual Section</h1>
                    </div>


                    <p className="py-4 px-4 text-left"> Review a single section on the test
                    </p>
                </div>


                <div onClick={()=>{setIsIndividualClicked(false); setIsFullClicked(true)}}
                    className={`relative flex items-center 
                            h-full w-11/12 mt-2 
                            border-2 hover:border-gray-900 
                            bg-gray-200
                            text-gray-700
                            rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center p-2
                            py-12 flex-col group`}>
                    <SlDocs size="48" className="mb-8 h-16"/>
                    <div className="flex items-center">
                        <div className={`relative items-center bottom-28 left-4 opacity-0 
                        bg-gray-800 text-white 
                        rounded-3xl shadow-lg  group justify-center p-2 group-hover:opacity-100`}>
                            <AiOutlineCheck size="24" />
                        </div>
                        <h1 className="text-3xl font-bold w-88">Full Test</h1>
                    </div>
                    <p className="py-4 px-4 text-left whitespace-nowrap"> Emulate the real testing environment with a full test
                    </p>
                </div>


            </div>


            {/* INDIVIDUAL SECTION SELECTION MENU */}
            <div className={`text-center ${isIndividualClicked ? "h-full" : "h-0 overflow-hidden"}`}>
                <div className="grid grid-cols-3 grid-flow-col gap-8 my-16 px-48">
                    <div className="flex flex-col justify-center">
                        <label for="countries" className="text-center block mb-2 text-sm font-medium text-gray-900">Section</label>
                        <select  onChange={e=>setSelectedSection(e.target.value)} 
                            id="section" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Choose a section</option>
                            <option value="reading">Reading</option>
                            <option value="writing">Writing</option>
                            <option value="mathnc">Math - No Calculator</option>
                            <option value="mathc">Math - Calculator</option>
                        </select>
                    </div>
                    {returnQuestionsOptionsBasedOnSelectedSection()}
                    <div className="flex flex-col justify-center">
                        <label for="countries" className="text-center block mb-2 text-sm font-medium text-gray-900">Timed</label>
                        <select  onChange={e=>setIsTimed(Boolean(e.target.value))} 
                            id="timed" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Select</option>
                            <option value="true">Timed</option>
                            <option value="false">Not Timed</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col items-center">

                    <button className="w-min bg-gray-700 text-gray-200 py-3 px-6 rounded-3xl text-md font-bold cursor-pointer border-2 border-white hover:bg-gray-900">
                        Continue
                    </button>
                </div>
            </div>

            {/* FULL TEST SELECTION MENU */}
            <div className={`text-center ${isFullClicked ? "h-full" : "h-0 overflow-hidden"}`}>
                <div className="my-16 px-48">
                    <div className="flex flex-col justify-center">
                        <label for="countries" className="text-center block mb-2 text-sm font-medium text-gray-900">Test</label>
                        <select
                            id="countries" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Choose a test</option>
                            <option value="1">Practice Test 1</option>
                            <option value="2">Practice Test 2</option>
                            <option value="3">Practice Test 3</option>
                            <option value="4">Practice Test 4</option>
                        </select>
                    </div>
                </div>
                <div>

                    <button className="bg-gray-700 text-gray-200 py-3 px-6 rounded-3xl text-md font-bold cursor-pointer border-2 border-white hover:bg-gray-900">
                        Continue
                    </button>
                </div>
            </div>

        </div>
    );


    // FUNCTION TO RETURN VARIED DROPDOWNS BASED ON THE SECTION YOU SELECTED IN INDIVIDUAL SECTION
    function returnQuestionsOptionsBasedOnSelectedSection(){
        switch (selectedSection){
            case "reading":
                return (
                    <>
                    <div className="flex flex-col justify-center">
                        <label for="reading-articles" className="text-center block mb-2 text-sm font-medium text-gray-900">Number of Articles</label>
                        <select id="reading-articles" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    </>
                )
            
            case "writing":
                return (
                    <>
                    <div className="flex flex-col justify-center">
                        <label for="writing-articles" className="text-center block mb-2 text-sm font-medium text-gray-900">Number of Articles</label>
                        <select id="writing-articles" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    </>
                )

            
            case "mathnc":
                return (
                    <>
                    <div className="flex flex-col justify-center">
                        <label for="mathnc-questions" className="text-center block mb-2 text-sm font-medium text-gray-900">Number of Questions</label>
                        <select id="mathnc-questions" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Select</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    </>
                )

            
            case "mathc":
                return(
                    <>
                    <div className="flex flex-col justify-center">
                        <label for="mathc-questions" className="text-center block mb-2 text-sm font-medium text-gray-900">Number of Questions</label>
                        <select id="mathc-questions" className=" border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Select</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="38">38</option>
                        </select>
                    </div>
                    </>
                )

            default:
                return(
                <>
                    <div className="flex flex-col justify-center">
                        <label for="reading-questions" className="text-center block mb-2 text-sm font-medium text-gray-900">Number of Articles</label>
                        <select disabled id="reading-questions" className="bg-gray-200 border border-black text-gray-900 text-md rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-6">
                            <option selected>Locked</option>
                        </select>
                    </div>
                    </>
                )

        }
    }

}







export default Practice;
