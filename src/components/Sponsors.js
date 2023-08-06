import React from 'react';
import aslc from "../styles/ASLC.png"
const Sponsors = () => {
    return (
    <div className="relative text-center mt-48 flex flex-col w-10/12  mx-auto justify-between" id="sponsors">
        <div className="m-0">
            <h1 className="text-blue-900 font-bubble text-7xl">
                SPONSORS
            </h1>
            <h2 className="font-light-bubble text-blue-950 lg:text-3xl text-xl py-8">
            Interested in sponsoring BeeLikeCoders? Email us at <span className="hover:underline cursor-pointer">beelikecoders@gmail.com</span>
            </h2>
        </div>
        <div className="flex justify-center ">
            <img src={aslc} className="w-5/12"/>
        </div>
    </div>
    );
}

export default Sponsors;
