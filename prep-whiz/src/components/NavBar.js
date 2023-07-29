import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiFillLock, AiOutlineUser} from 'react-icons/ai'

const NavBar = (props) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate=useNavigate();
  const links=[
    {name: "About"},
    {name:'Test Prep',
      submenu: true, 
      sublinks: 
      [
        {Head:"SAT",
        exists: true
        },
        {
          Head: "ACT -- Coming Soon",
          exists: false
        },
        {
          Head: "DSAT -- Coming Soon",
          exists:false
        }
      ]
    },
    {name:'Tutoring'}
  ]

  function getIcon(link,heading){
    if (link.submenu){
      if (heading===link.name){
        return ("chevron-up")
      }else{
        return("chevron-down")
      }
    }
    return ("")
  }
  return (
  <>
    <nav className={` bg-gray-200`}>
      <div className="flex items-center font-medium justify-around">
        <div className='md:w-auto w-full flex justify-between z-50 p-6'>
          <Link to ="/">
            <div className="md:cursor-pointer h-9 flex items-center">
              <h2 className="font-bold text-3xl ">
                PrepWhiz
              </h2>
            </div>
          </Link>
          <div className="text-3xl md:hidden" onClick={()=>props.setOpen(!props.open)}>
            <ion-icon name={`${props.open ? 'close': "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          
        {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group hover:bg-gray-100">
            <h1
              className="py-7 flex text-center justify-center items-center md:pr-0 pr-5 group "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              
              
              <Link to={`/${link.name.replace(" ","").toLowerCase()}`}>
                {link.name}
              </Link>
              
              


              {
                link.submenu &&
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 duration-300">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              }

            </h1>
            {link.submenu && (
              <div className="z-20 absolute border-2 bg-white border-gray-700  top-20 py-16 px-20 left-0 mx-10 hidden group-hover:md:block hover:md:block">
                <h1 className="text-4xl capitalize font-semibold pb-8 whitespace-nowrap">
                  Test Prep
                </h1>
                <h3 className="normal-case text-xl font-light font-sans pb-8">
                  PrepWhiz's AI-powered online prep course is designed to calculate your strengths and weaknesses and customize your practice for your abilities.
                  Make faster progress with less time and less money than all the other prep courses. If you would like private tutoring
                  as a supplement to your AI education, make a request for guided instruction with one of our 99th percentile tutors.
                </h3>
                <div className= "grid grid-cols-3 gap-3 py-2 text-xl">
                  {link.sublinks.map((mysublinks) => (
                    mysublinks.exists ? 
                    <Link to={`/${mysublinks.Head}/options`} className={` text-white text-center p-2 px-6 rounded font-thin duration-300 bg-gray-600 hover:bg-gray-800`}>
                    <h1 className="text-md font-medium">
                      {mysublinks.Head}
                    </h1>
                  </Link> :
                  <div className="text-white text-center p-2 px-6 rounded font-thin duration-300 bg-gray-400 cursor-default">
                    <h1 className="text-md font-medium">
                      {mysublinks.Head}
                    </h1>
                  </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.submenu && link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold flex justify-between items-center md:pr-0 pr-5"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          link.submenu && link.subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
        </ul>
        <div className="md:block hidden">
          {props.user?
          <div>
            <div className="group ">
              <div className="flex items-center cursor-pointer bg-gray-900  px-4 rounded-xl text-gray-200">
                <h1 className="my-2">
                <AiOutlineUser size="24"/>
                </h1>
                <span className="text-lg md:mt-1  md:block hidden group-hover:rotate-180 group-hover:-mt-2 duration-300 text-gray-200">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </div>
              <ul className="absolute text-right right-28  bg-gray-200 rounded-lg top-16 z-20">
                <li onClick={()=>navigate("/testprep/sat")}className="hover:bg-gray-400 text-right group-hover:flex items-center justify-end border-2 px-5 border-b-gray-500 rounded-t-lg border-gray-900 hover:block hidden cursor-pointer text-gray-700 font-semibold py-2">
                  {

                  }
                  SAT Dashboard
                  </li>
                
                <li className="border-x-2 border-gray-900 group-hover:flex items-center justify-between hover:block hidden px-5 text-gray-500 font-semibold py-2">
                  <AiFillLock />
                  ACT Dashboard
                </li>
                
                <li className="border-2 border-t-gray-500 rounded-b-lg border-gray-900 group-hover:flex items-center justify-between hover:block hidden px-5 text-gray-500 font-semibold py-2 pb-4">
                <AiFillLock />
                  DSAT Dashboard
                </li>
              </ul>
            </div>
          </div>
          : 
          <>

          <Link to="/login" className=" bg-gray-200 border-2 border-gray-700 hover:border-gray-900 text-gray-700 hover:text-gray-900 px-6 py-2 rounded-full">
            Login
          </Link>
          </>
          }

        </div>
        {/* MOBILE NAV */}
        <ul className={`md:hidden bg-gray-200 bg-opacity-90 absolute w-full h-screen bottom-0 py-24 pl-4 z-10 md:overscroll-contain
        duration-500 ${props.open ? 'left-0' : 'left-[-100%]'}
        `}
        >
    
        {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center mdl:pr-0 pr-5 group cursor-pointer whitespace-nowrap"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              
              <Link to={`/${link.name.toLowerCase().replace(" ","")}`}>
                {link.name}
              </Link>
                

              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    getIcon(link,heading)
                  }`}
                ></ion-icon>
              </span>
            </h1>
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.submenu && link.sublinks.map((slinks) => (
              <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >     
                  {
                    slinks.exists ? 
                        <Link to="/options" className="text-md font-semibold ">
                          {slinks.Head}
                        </Link>  :
                        <div className="text-md font-semibold text-gray-500">
                          {slinks.Head}
                        </div>
                  }
                        

                  </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
        <div className="py-5 mt-5 text-center">
        {props.user?
          <Link to="/testprep" className="bg-cyan-950 text-white px-6 py-2 rounded-full">
            Go to Dashboard
          </Link>       
          : 
          <div className="grid grid-flow-row grid-cols-1 w-3/12 mx-auto gap-4">
            <Link to="/login" className="bg-gray-200 border-2 border-gray-700 hover:border-gray-900 text-gray-700 hover:text-gray-900 px-6 py-2 rounded-full">
              Login
            </Link>
          </div>
        }
        </div>
        </ul>
      </div>
      <hr className="relative z-10 bg-gray-500 h-1"></hr>
    </nav>

  </>
  );
}

export default NavBar;
