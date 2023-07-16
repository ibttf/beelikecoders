import {useState} from "react"
import { Link } from "react-router-dom";
import { BsFillClockFill, BsFillLightningFill, BsGearFill, BsSpeedometer2 } from 'react-icons/bs';
import {AiOutlineArrowRight} from "react-icons/ai"
const SideBar = () => {
  const [isExpanded,setIsExpanded]=useState(false);
  return (
    <div className={`fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-900 shadow-lg
                  dark ${isExpanded ? "w-48" : "w-16"} transition-all duration-100`}>
        <div className="flex justify-center align-center pr-2">
            {isExpanded ? <h1 className="relative flex items-center 
                    h-16 w-32 my-2 ml-2
                    text-3xl
                    font-mono
                    bg-gray-200 
                    textgray-800
                     justify-center " style={{"border-radius":"100%"}}>PW</h1> : <></>}
            <AiOutlineArrowRight size={`${isExpanded ? "36" : "12"}`} onClick={()=>setIsExpanded(!isExpanded)}
            className={`relative flex items-center justify-center 
                        text-gray-500 hover:text-white
                    
                        transition-all duration-100 ease-linear
                        cursor-pointer shadow-lg group ${isExpanded ? "rotate-180 ml-20 my-auto": "ml-2 p-3 h-12 w-12 mt-2 mb-2 "}`}>
            </AiOutlineArrowRight>
        </div>
        {isExpanded ?<></>: <Divider />}
        <div className={`w-full ${isExpanded? "hover:bg-gray-700": ""}`}>
            <Link to="/testprep/sat">
                
                <div className={`relative flex items-center 
                            h-12 w-12 mt-2 mb-2  
                            ml-2
                            bg-gray-800 hover:bg-gray-500
                            text-gray-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center  ${isExpanded ? "p-3" : "p-2"}`}>
                    <BsSpeedometer2 size="32" />
                    <span class={`absolute w-auto p-2 m-2 min-w-max  rounded-md shadow-md
                                scale-0 origin-left; 
                                ${isExpanded ? "scale-100 left-12 text-md font-medium capitalize font-sans tracking-wide text-gray-400 group hover:bold": "text-gray-800  transition-all font-bold text-xs group-hover:scale-100 left-14 duration-100"}` 
                                }>
                    Dashboard
                    </span>
                </div>
            </Link>
        </div>
        <div className={`w-full ${isExpanded? "hover:bg-gray-700": ""}`}>
            <Link to="/testprep/sat/learn">
                
                <div className={`relative flex items-center 
                            h-12 w-12 mt-2 mb-2  
                            ml-2
                            bg-gray-800 hover:bg-gray-500
                            text-gray-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center  ${isExpanded ? "p-3" : "p-2"}`}>
                    <BsFillLightningFill size="32" />
                    <span class={`absolute w-auto p-2 m-2 min-w-max  rounded-md shadow-md
                                scale-0 origin-left; 
                                ${isExpanded ? "scale-100 left-12 text-md font-medium capitalize font-sans tracking-wide text-gray-400 group hover:bold": "text-gray-800  transition-all font-bold text-xs group-hover:scale-100 left-14 duration-100"}` 
                                }>
                    Learn
                    </span>
                </div>
            </Link>
        </div>
        <div className={`w-full ${isExpanded? "hover:bg-gray-700": ""}`}>
            <Link to="/testprep/sat/practice">
                
                <div className={`relative flex items-center 
                            h-12 w-12 mt-2 mb-2  
                            ml-2
                            bg-gray-800 hover:bg-gray-500
                            text-gray-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center  ${isExpanded ? "p-3" : "p-2"}`}>
                    <BsFillClockFill size="32" />
                    <span class={`absolute w-auto p-2 m-2 min-w-max  rounded-md shadow-md
                                scale-0 origin-left; 
                                ${isExpanded ? "scale-100 left-12 text-md font-medium capitalize font-sans tracking-wide text-gray-400 group hover:bold": "text-gray-800  transition-all font-bold text-xs group-hover:scale-100 left-14 duration-100"}` 
                                }>
                    Practice
                    </span>
                </div>
            </Link>
        </div>
        <Divider />
        <div className={`w-full ${isExpanded? "hover:bg-gray-700": ""}`}>
            <Link to="/edit-profile">
                
                <div className={`relative flex items-center 
                            h-12 w-12 mt-2 mb-2  
                            ml-2
                            bg-gray-800 hover:bg-gray-500
                            text-gray-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center  ${isExpanded ? "p-3" : "p-2"}`}>
                    <BsGearFill size="32" />
                    <span class={`absolute w-auto p-2 m-2 min-w-max  rounded-md shadow-md
                                scale-0 origin-left; 
                                ${isExpanded ? "scale-100 left-12 text-md font-medium capitalize font-sans tracking-wide text-gray-400 group hover:bold": "text-gray-800  transition-all font-bold text-xs group-hover:scale-100 left-14 duration-100"}` 
                                }>
                    Settings
                    </span>
                </div>
            </Link>
        </div>
    </div>
  );
};



const Divider = () => <hr className="bg-gray-800 
                                        border border-gray-800 rounded-full
                                        mx-2;" />;

export default SideBar;