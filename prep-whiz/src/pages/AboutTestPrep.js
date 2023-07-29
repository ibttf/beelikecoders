import React, {useState,useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus, AiOutlineRobot } from 'react-icons/ai';


const AboutTestPrep = () => {
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
            <h1 className="text-5xl font-extrabold text-gray-900 pt-8">Test Prep</h1>

                {/* WHAT IS TEST PREP */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">How Our Process Works</h1>
                    
                    
                </div>    

                {/* PRICES */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">Our Prices</h1>
                    
                    
                </div>    


                {/* FEATURES */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">Features</h1>
                    
                    
                </div>    




                {/* COST COMPARISON */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">Most Affordable Option in the Market</h1>
                    <div className="w-11/12 mx-auto border-2 border-gray-900 h-96 grid grid-cols-5 grid-rows-4">
                        <div className="border-r-2 border-b-2 border-black">

                        </div>
                        
                        <div className="border-r-2 border-b-2 border-black">

                        </div>
                        
                        <div className="border-r-2 border-b-2 border-black">

                        </div>
                        
                        <div className="border-r-2 border-b-2 border-black">

                        </div>

                        <div className="border-b-2 border-black">

                        </div>
                        
                    </div>
                    
                </div>    



                {/* CONTACT */}
                <div className="py-12">
                    <h1 className="text-4xl font-extrabold text-gray-700 md:pb-12 pb-8">Need Some Help?</h1>
                    
                    
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

export default AboutTestPrep;
