import React, {useState,useEffect} from 'react';
import {VscThreeBars} from "react-icons/vsc"
import logo from "../styles/logo.png"
import "../styles/animations.css"


const NavBar = () => {
  const [sticky,setSticky]=useState(false)
  const [open,setOpen]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
  
    },[])


  return (
    <div className={`fixed top-0 w-screen z-30 bg-yellow-400`}>

      {/* HONEY */}
      <svg viewBox="0 0 1440 320" className={`fill-yellow-450 absolute scale-y-40 z-0 ${sticky ? "-mt-96" : "lg:-mt-2 md:mt-0 mt-0 "} ease-in-out duration-300`}>
        <path fill-opacity="1" d="M0,192L7.3,176C14.5,160,29,128,44,117.3C58.2,107,73,117,87,133.3C101.8,149,116,171,131,202.7C145.5,235,160,277,175,298.7C189.1,320,204,320,218,288C232.7,256,247,192,262,181.3C276.4,171,291,213,305,229.3C320,245,335,235,349,197.3C363.6,160,378,96,393,101.3C407.3,107,422,181,436,186.7C450.9,192,465,128,480,96C494.5,64,509,64,524,85.3C538.2,107,553,149,567,170.7C581.8,192,596,192,611,165.3C625.5,139,640,85,655,96C669.1,107,684,181,698,224C712.7,267,727,277,742,245.3C756.4,213,771,139,785,117.3C800,96,815,128,829,133.3C843.6,139,858,117,873,106.7C887.3,96,902,96,916,122.7C930.9,149,945,203,960,224C974.5,245,989,235,1004,208C1018.2,181,1033,139,1047,138.7C1061.8,139,1076,181,1091,192C1105.5,203,1120,181,1135,186.7C1149.1,192,1164,224,1178,245.3C1192.7,267,1207,277,1222,240C1236.4,203,1251,117,1265,90.7C1280,64,1295,96,1309,112C1323.6,128,1338,128,1353,128C1367.3,128,1382,128,1396,117.3C1410.9,107,1425,85,1433,74.7L1440,64L1440,0L1432.7,0C1425.5,0,1411,0,1396,0C1381.8,0,1367,0,1353,0C1338.2,0,1324,0,1309,0C1294.5,0,1280,0,1265,0C1250.9,0,1236,0,1222,0C1207.3,0,1193,0,1178,0C1163.6,0,1149,0,1135,0C1120,0,1105,0,1091,0C1076.4,0,1062,0,1047,0C1032.7,0,1018,0,1004,0C989.1,0,975,0,960,0C945.5,0,931,0,916,0C901.8,0,887,0,873,0C858.2,0,844,0,829,0C814.5,0,800,0,785,0C770.9,0,756,0,742,0C727.3,0,713,0,698,0C683.6,0,669,0,655,0C640,0,625,0,611,0C596.4,0,582,0,567,0C552.7,0,538,0,524,0C509.1,0,495,0,480,0C465.5,0,451,0,436,0C421.8,0,407,0,393,0C378.2,0,364,0,349,0C334.5,0,320,0,305,0C290.9,0,276,0,262,0C247.3,0,233,0,218,0C203.6,0,189,0,175,0C160,0,145,0,131,0C116.4,0,102,0,87,0C72.7,0,58,0,44,0C29.1,0,15,0,7,0L0,0Z"></path>
      </svg>
      <svg viewBox="0 0 1440 320" className={`fill-yellow-400 absolute scale-y-40 z-0 ${sticky ? "-mt-96" : "lg:-mt-8 md:-mt-4 -mt-2 "} ease-in-out duration-300`}>
        <path fill-opacity="1" d="M0,192L7.3,176C14.5,160,29,128,44,117.3C58.2,107,73,117,87,133.3C101.8,149,116,171,131,202.7C145.5,235,160,277,175,298.7C189.1,320,204,320,218,288C232.7,256,247,192,262,181.3C276.4,171,291,213,305,229.3C320,245,335,235,349,197.3C363.6,160,378,96,393,101.3C407.3,107,422,181,436,186.7C450.9,192,465,128,480,96C494.5,64,509,64,524,85.3C538.2,107,553,149,567,170.7C581.8,192,596,192,611,165.3C625.5,139,640,85,655,96C669.1,107,684,181,698,224C712.7,267,727,277,742,245.3C756.4,213,771,139,785,117.3C800,96,815,128,829,133.3C843.6,139,858,117,873,106.7C887.3,96,902,96,916,122.7C930.9,149,945,203,960,224C974.5,245,989,235,1004,208C1018.2,181,1033,139,1047,138.7C1061.8,139,1076,181,1091,192C1105.5,203,1120,181,1135,186.7C1149.1,192,1164,224,1178,245.3C1192.7,267,1207,277,1222,240C1236.4,203,1251,117,1265,90.7C1280,64,1295,96,1309,112C1323.6,128,1338,128,1353,128C1367.3,128,1382,128,1396,117.3C1410.9,107,1425,85,1433,74.7L1440,64L1440,0L1432.7,0C1425.5,0,1411,0,1396,0C1381.8,0,1367,0,1353,0C1338.2,0,1324,0,1309,0C1294.5,0,1280,0,1265,0C1250.9,0,1236,0,1222,0C1207.3,0,1193,0,1178,0C1163.6,0,1149,0,1135,0C1120,0,1105,0,1091,0C1076.4,0,1062,0,1047,0C1032.7,0,1018,0,1004,0C989.1,0,975,0,960,0C945.5,0,931,0,916,0C901.8,0,887,0,873,0C858.2,0,844,0,829,0C814.5,0,800,0,785,0C770.9,0,756,0,742,0C727.3,0,713,0,698,0C683.6,0,669,0,655,0C640,0,625,0,611,0C596.4,0,582,0,567,0C552.7,0,538,0,524,0C509.1,0,495,0,480,0C465.5,0,451,0,436,0C421.8,0,407,0,393,0C378.2,0,364,0,349,0C334.5,0,320,0,305,0C290.9,0,276,0,262,0C247.3,0,233,0,218,0C203.6,0,189,0,175,0C160,0,145,0,131,0C116.4,0,102,0,87,0C72.7,0,58,0,44,0C29.1,0,15,0,7,0L0,0Z"></path>
      </svg>




      {/* DESKTOP NAVBAR */}
      <div className="xl:grid hidden relative w-5/12 lg:ml-12 ml-4 grid-flow-row grid-cols-4 text-center justify-center items-center">
        <img src={logo} className={`cursor-pointer w-8/12 bg-yellow-800 rounded-full my-4 p-2 mx-auto`} onClick={()=>{window.location.reload()}}></img>
        <div className={`flex px-4 items-center w-full justify-between flex-auto text-center text-yellow-800 font-sans 
                        whitespace-nowrap lg:text-2xl md:text-xl duration-300 font-extrabold scale-y-110 col-span-3`} style={{"font-family": "'Nunito', sans-serif"}}>
          <a href="/#top" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Home
          </a>
          <a href="/#about" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            About
          </a>
          <a href="/#schedule" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Schedule
          </a>
          <a href="/#judges" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Judges
          </a>
          <a href="/#sponsors" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            Sponsors
          </a>
          <a href="/#faq" className="px-4 hover:text-yellow-900 hover:scale-110 duration-200">
            FAQ
          </a>
          <a href="https://google.com" target="_blank" className="mx-4 bg-yellow-800 text-yellow-200 rounded-3xl px-4 py-2 hover:bg-yellow-900 cursor-pointer">
            Register
          </a>
        </div>
      </div>
      {/* MOBILE NAVBAR */}
      <div className="xl:hidden grid relative z-10 ml-12 my-2">
        <VscThreeBars className={`${open ? "rotate-90" : ""} scale-x-150 duration-300 cursor-pointer text-yellow-800 md:w-12 md:h-12 h-8 w-8`} onClick={()=>{setOpen(!open)}}/>
        <div className={`${open ? "2xl:hidden flex": "hidden"} absolute top-12 -left-6 z-20 bg-yellow-400 flex-col rounded-xl border-6 border-yellow-800` }>
            <a href="#home" className="px-9 py-2 pt-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Home</a>
            <a href="#about" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">About</a>
            <a href="#schedule" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Schedule</a>
            <a href="#judges" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Judges</a>
            <a href="#sponsors" className="px-9 py-2 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Sponsors</a>
            <a href="#faq" className="px-9 py-2 pb-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">FAQ</a>
            <a href="https://google.com" target="_blank" className="px-9 py-2 pb-4 text-yellow-800 font-bold cursor-pointer font-light-bubble text-xl">Register</a>

        </div>
      </div>



    </div>
  );
}

export default NavBar;
