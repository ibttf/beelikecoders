import React, {useState,useEffect} from 'react';
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter } from "react-icons/bs"
import {AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import bee from "../styles/supersaiyanbee.png"
import "../styles/animations.css"

const Footer = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date(`2024-04-12T08:30:00`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
        }
        return timeLeft;
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        timerComponents.push(
        <span>
            {timeLeft[interval]} {interval}{" "}
        </span>
        );
    });

    useEffect(() => {
        const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    },);

  
    return (
    <div className="overflow-x-hidden relative bg-blue-300 bg-[url('../styles/fp-bg-15.png')]" style={{backgroundSize:"100%"}}>
        <div className="w-1/12 absolute h-full z-0 left-0 right-0 mx-auto bg-gray-400 rounded-b-xl py-24" >
        </div>
        {/* SPEECH BUBBLE */}
        <div className="relative lg:w-10/12 w-11/12 md:border-8 border-6 py-16 border-black mx-auto bg-white rounded-3xl text-gray-800" id="schedule">
            <h1 className="xl:text-9xl md:text-7xl text-4xl font-bubble font-extrabold text-center pb-12">
            GET HYPE!!!
            <br></br>
            </h1>
            <div className="text-center py-4 lg:text-8xl md:text-7xl text-6xl font-bubble font-extrabold pb-12">
                {timerComponents.length ? 

                <div className="grid grid-cols-4 2xl:w-7/12 w-11/12 mx-auto grid-flow-col grid-rows-2">
                
                {timerComponents.map((component,i)=>{
                return(
                    <>
                    <div className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-4xl">
                        {component.props.children[0]}
                    </div>
                    <div className="md:text-4xl text-lg">
                        {component.props.children[2]}
                    </div>
                    </>
                )
                }) }
                </div>
                
                : 
                <h1 className="lg:text-9xl md:text-7xl text-xl font-bubble font-extrabold text-center pb-12">
                TIME'S UP!!!
                <br></br>
                </h1>}
            </div>

        </div>

        <div className=" relative w-0 border-t-black lg:border-t-80 lg:border-x-40 border-t-40 border-x-40 border-x-transparent left-2/3">
        </div>

        {/* SUPER SAIYAN BEE */}
        <img src={bee} className="hover:animate-wiggle absolute xl:bottom-24 left-3/4 lg:w-72 md:w-32 w-24 z-20" />

        {/* FOOTER */}
        <div className=" max-w-screen relative z-10 overflow-hidden">
            {/* WAVE */}
            <svg viewBox="0 0 1440 320">
                <path className="fill-amber-200" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>


            <div className=" pb-12 -mt-1 md:pt-0 pt-16 bg-amber-200">


                <div className="grid grid-flow-row grid-cols-3 text-center lg:w-3/12 md:w-4/12 w-8/12 mx-auto pb-6">
                    <a className="flex justify-center w-full">
                        <AiOutlineInstagram className="lg:w-16 lg:h-16 h-12 w-12 text-yellow-200 border-2 border-amber-800 rounded-full lg:p-2 p-1 bg-amber-800 cursor-pointer hover:bg-amber-900 hover:border-amber-900"/>
                    </a> 
                    <a className="flex justify-center w-full">
                        <AiFillGithub className="lg:w-16 lg:h-16 h-12 w-12 text-yellow-200 border-2 border-amber-800 rounded-full lg:p-2 p-1 bg-amber-800 cursor-pointer hover:bg-amber-900 hover:border-amber-900"/>
                    </a> 
                    <a href="mailto:beelikecoders@gmail.com?subject=Sponsoring BeeLikeCoders 2024" className="flex justify-center w-full">
                        <AiOutlineMail className="lg:w-16 lg:h-16 h-12 w-12 text-yellow-200 border-2 border-amber-800 rounded-full lg:p-2 p-1 bg-amber-800 cursor-pointer hover:bg-amber-900 hover:border-amber-900"/>
                    </a>
                    </div>
                <div className="mx-auto w-10/12">
                <h2 className="text-center lg:text-2xl text-lg font-bold text-amber-800 py-2">
                    Made with <span className="">❤️</span> by the BeeLikeCoders Team
                </h2>
                <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" className=" hover:underline cursor-pointer text-center lg:text-lg text-sm font-semibold text-amber-800">
                    <h4 className="text-center pb-2">
                    MLH Code of Conduct
                    </h4>
                </a>
                <h4 className="text-center lg:text-lg text-sm font-normal text-amber-800">
                    Copyright © 2023 BeeLikeCoders
                </h4>
                </div>
            </div>
        </div>

    </div>
    );

}





export default Footer;
