import React from 'react';
import {FaFacebookF} from "react-icons/fa"
import {AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
const Footer = () => {
    return (

    <footer className="h-full">
        <svg viewBox="0 0 1440 320">
            <path fill="#b7791f" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="pb-12" style={{"background-color":"#b7791f"}}>
            <div className="grid grid-flow-row grid-cols-5 w-4/12 mx-auto pb-6">

                <FaFacebookF className="w-16 h-16 text-yellow-800 border-2 border-yellow-100 rounded-full p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 hover:border-yellow-50"/>
                <AiOutlineInstagram className="w-16 h-16 text-yellow-800 border-2 border-yellow-100 rounded-full p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 hover:border-yellow-50"/>
                <BsTwitter className="w-16 h-16 text-yellow-800 border-2 border-yellow-100 rounded-full p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 hover:border-yellow-50"/>
                <AiFillGithub className="w-16 h-16 text-yellow-800 border-2 border-yellow-100 rounded-full p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 hover:border-yellow-50"/>
                <AiOutlineMail className="w-16 h-16 text-yellow-800 border-2 border-yellow-100 rounded-full p-2 bg-yellow-100 cursor-pointer hover:bg-yellow-50 hover:border-yellow-50"/>

            </div>
            <h2 className="text-center text-2xl font-bold text-yellow-100 py-2">
                Made with <span className="">❤️</span> by the BeeLikeCoders Team
            </h2>
            <h4 className="text-center text-lg font-normal text-yellow-100">
                    Copyright © 2023 BeeLikeCoders
            </h4>
        </div>
    </footer>

    );
}

export default Footer;
