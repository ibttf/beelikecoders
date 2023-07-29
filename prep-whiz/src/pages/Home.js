import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineCheckCircle} from "react-icons/ai"
import hero from "../styles/hero.png";

const Home = (props) => {
    return (
      <div className={`${props.open ? "overscroll-none" : ""} overflow-x-hidden`}>
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 min-h-screen bg-gray-200 md:px-0 min-w-screen gap-8 px-10 py-16 text-center md:text-left">
          <div className="flex lg:w-10/12 md:h-108 my-auto pl-2 mx-auto">
            <div className="flex flex-col">
              <h1 className="md:text-7xl  text-5xl font-extrabold">
                Don't Pay Thousands for Personalized Test Prep
              </h1>
              <h2 className="font-semibold md:text-xl text-lg text-gray-600 py-12">
                Get access to the best resources and tutors on the market for less than everyone else
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-col whitespace-nowrap">
                <Link to ={props.user ? "/testprep/sat" :"/login"}>
                  <button className="w-10/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl">Test Prep</button>
                </Link>
                <Link to="/tutoring">
                  <button className="w-10/12 border-2 border-gray-900 p-2 text-gray-200 bg-gray-900 font-semibold text-lg rounded-3xl">Tutoring</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:h-108 md:my-auto md:pr-8">
            <img src={hero} className="relative rounded-3xl shadow-lg z-2"></img>
          </div>
        </div>

        {/* COMPARE PLANS SECTION */}
        <div className="grid md:grid-cols-2 bg-gray-400 h-full  mx-auto">
          <div className="lg:w-108 md:w-96 mx-auto my-auto md:pt-0 pt-12 md:text-left text-center">
            <h1 className="md:text-6xl font-extrabold text-4xl">
              Paid plans start at 10$ a month
            </h1>
            <h2 className="font-semibold text-xl text-gray-600 md:py-12 py-6">
              Start studying today. Cancel anytime.
            </h2>
            <Link to={props.user ? "/testprep/sat" :"/login"}>
              <button className="w-8/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl">Compare Plans</button>
            </Link>

          </div>
          <div className="py-12 mx-auto md:mx-0">
              <ul className="flex flex-col lg:w-full md:w-96 mx-auto">
                <li className='flex items-center w-full py-4'>
                  <AiOutlineCheckCircle className="text-green-700 w-24 md:text-5xl text-4xl"/>
                  <h1 className="font-semibold text-black lg:text-xl text-lg px-4 w-full">Take every official practice test in a real environment - paper and digital</h1>
                  
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle className="text-green-700 w-24 md:text-5xl text-4xl"/>
                  <h1 className="font-semibold text-black lg:text-xl text-lg px-4 w-full">Learn from the most advanced testing AI on the planet</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle className="text-green-700 w-24 md:text-5xl text-4xl"/>
                  <h1 className="font-semibold text-black lg:text-xl text-lg px-4 w-full">Get personalized topic recommendation</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle className="text-green-700 w-24 md:text-5xl text-4xl"/>
                  <h1 className="font-semibold text-black lg:text-xl text-lg px-4 w-full">Access over 100 hours of education from field experts</h1>
                </li>
                <li className='flex items-center w-full  py-4'>
                  <AiOutlineCheckCircle className="text-green-700 w-24 md:text-5xl text-4xl"/>
                  <h1 className="font-semibold text-black md:text-xl text-lg px-4 w-full">Get answers to your questions within 48 hours from our team of 99th percentile scorers</h1>
                </li>
              </ul>
          </div>
        </div>
        

        {/* TUTORING SECTION */}
        <div className="bg-gray-200 h-full py-12">
          <h1 className="text-center w-full md:text-5xl text-4xl font-extrabold md:pb-12">Want Personalized Help?</h1>
          <div className="grid md:grid-cols-2 items-center w-full mx-auto">
            <h2 className="font-bold lg:text-4xl md:text-3xl text-xl md:w-72 md:mx-auto md:text-left text-center py-12">
              Get 1 on 1 tutoring from one of our 99th percentile tutors
            </h2>
            <div className="w-11/12 mx-auto bg-gray-100 h-96 text-center flex items-center justify-center">
              <h1 className="font-bold">
                TUTOR CAROUSEL
              </h1>
            </div>
          </div>
        </div>


        {/* TESTIMONIALS SECTION */}
        <div className="grid md:grid-cols-2 bg-gray-400 h-full mx-auto py-12">
          <div className="lg:w-108 md:w-96 mx-auto my-auto md:pt-0 pt-12 md:text-left text-center">
            <h1 className="md:text-6xl font-extrabold text-4xl">
              You'll love PrepWhiz — they do.
            </h1>
            <h2 className="font-semibold text-xl text-gray-600 md:py-12 py-6">
                Not happy? Tell us within 30 days and get a full refund on your purchase.
            </h2>
            <Link to={props.user ? "/testprep/sat" :"/login"}>
              <button className="w-8/12 border-2 border-gray-900 p-2 text-gray-900 font-semibold text-lg rounded-3xl mb-6 md:mb-0">Compare Plans</button>
            </Link>

          </div>
          <div className="w-11/12 mx-auto bg-gray-100 h-96 text-center flex items-center justify-center">
              <h1 className="font-bold">
                TESITMONIALS CAROUSEL
              </h1>
            </div>
        </div>
      </div>
    );

};

export default Home;
