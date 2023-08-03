import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai"
import beehive from "../styles/beehive.png";
import bee from "../styles/hero-bee-nobg.png"
const Home = () => {
    return (
      <div className="flex justify-between w-12/12 mx-auto">

        
        <div className="grid grid-cols-2 w-10/12 mx-auto text-center">
        {/* <svg id="color-fill-anchor" version="1.1" height="300" className="w-full">
          <a>
            <polygon class="hex" points="300,150 225,280 75,280 0,150 75,20 225,20" className="fill-yellow-500"></polygon>
          </a>
        </svg> */}
        
        <div className="flex flex-col">
            <h1 className=" font-bubble text-yellow-800 text-center text-9xl hover:animate-wiggle">
              BeeLikeCoders 2.0
            </h1>
            <h2 className="text-center font-bubble text-yellow-700 text-6xl pt-4">
              April 15-16
            </h2>
        </div>
        </div>

        
      </div>
    );

};

export default Home;
