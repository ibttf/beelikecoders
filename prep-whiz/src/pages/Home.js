import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai"
import hero from "../styles/hero.png";
import hero2 from "../styles/hero2.png"
import squiggle from "../styles/red-squiggle.png";

const Home = (props) => {
    return (
      <div>
        {/* HERO SECTION */}
        <div className="flex bg-gray-200 h-screen">
          <div className="flex px-32 py-48">
            <div className="flex flex-col w-full">
              <h1 className="text-7xl font-extrabold">
                Don't Pay Thousands for Personalized Test Prep
              </h1>
              <h2 className="font-semibold text-xl text-gray-600 py-12">
                Get access to the best resources and tutors on the market for less than everyone else
              </h2>
              <div className="grid grid-cols-4 grid-flow-col ">
                <Link to ={props.user ? "/testprep/sat" :"/login"}>
                  <button className="w-10/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl">Test Prep</button>
                </Link>
                <Link to="/tutoring">
                  <button className="w-10/12 border-2 border-gray-900 p-2 text-gray-200 bg-gray-900 font-semibold text-lg rounded-3xl">Tutoring</button>
                </Link>

              </div>
            </div>
            <h1 className="w-full"></h1>
          </div>
          <div className="py-48">
            <img src={hero} className="absolute rounded-3xl shadow-lg h-96 top-96 right-12 z-2"></img>
            <img src={hero2} className="absolute rounded-3xl shadow-lg h-96 top-72 right-24 z-2"></img>
          </div>
        </div>

        {/* COMPARE PLANS SECTION */}
        <div className="flex bg-gray-400 h-full">
          <div className="flex px-48 py-24 w-full">
            <div className="flex flex-col w-full">
              <h1 className="text-6xl font-extrabold">
                Paid plans start at 10$ a month
              </h1>
              <h2 className="font-semibold text-xl text-gray-600 py-12">
                Start studying today. Cancel anytime.
              </h2>
              <Link to={props.user ? "/testprep/sat" :"/login"}>
                <button className="w-8/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl">Compare Plans</button>
              </Link>

            </div>
          </div>
          <div className="w-full py-12">
              <ul className="flex flex-col">
                <li className='flex items-center w-full py-4'>
                  <AiOutlineCheckCircle size="48" className="text-green-700 w-24"/>
                  <h1 className="font-semibold text-black text-xl px-4 w-full">Take every official practice test in a real environment - paper and digital</h1>
                  
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle size="48" className="text-green-700 w-24"/>
                  <h1 className="font-semibold text-black text-xl px-4 w-full">Learn from the most advanced testing AI on the planet</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle size="48" className="text-green-700 w-24"/>
                  <h1 className="font-semibold text-black text-xl px-4 w-full">Get personalized topic recommendation</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle size="48" className="text-green-700 w-24"/>
                  <h1 className="font-semibold text-black text-xl px-4 w-full">Access over 100 hours of education from field experts</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle size="48" className="text-green-700 w-24"/>
                  <h1 className="font-semibold text-black text-xl px-4 w-full">Get answers to your questions within 48 hours from our team of 99th percentile scorers</h1>
                </li>
              </ul>
          </div>
        </div>
        

        {/* TUTORING SECTION */}
        <div className="flex flex-col bg-gray-200 h-full py-24 px-48">
          <h1 className="text-center w-full text-5xl font-extrabold ">Want Personalized Help?</h1>
          <div className="flex items-center pb-4 pt-12">
            <h2 className="font-bold text-4xl w-8/12 py-24 mx-12">
              Get 1 on 1 tutoring from one of our 99th percentile tutors
            </h2>
            <div className="w-full bg-gray-100 h-96 text-center mx-12 flex items-center justify-center">
              <h1 className="font-bold">
                TUTOR CAROUSEL
              </h1>
            </div>
          </div>
        </div>



        {/* TESTIMONIALS SECTION */}
        <div className="flex bg-gray-400 h-full">
          <div className="flex px-48 py-24 w-full">
            <div className="flex flex-col w-full">
              <h1 className="text-6xl font-extrabold">
                You'll love PrepWhiz — they do.
              </h1>
              <h2 className="font-semibold text-xl text-gray-600 py-12">
                Not happy? Tell us within 30 days and get a full refund on your purchase.
              </h2>
              <Link to={props.user ? "/testprep/sat" :"/login"}>
                <button className="w-8/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl">Compare Plans</button>
              </Link>

            </div>
          </div>
          <div className="w-full bg-gray-100 text-center m-12 flex items-center justify-center rounded-3xl">
              <h1 className="font-bold">
                TESTIMONIALS CAROUSEL
              </h1>
            </div>
        </div>
      </div>
    );

};

export default Home;
