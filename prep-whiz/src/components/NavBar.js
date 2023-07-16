import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from "../styles/logo-no-background.png"
const NavBar = (props) => {
  const[open,setOpen]=useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const links=[
    {name:'Test Prep',
      submenu: true, 
      sublinks: 
      [
        {Head:"SAT",
        },
        {
          Head: "ACT"
        },
        {
          Head: "DSAT"
        }
      ]
    },
    {name:'Tutoring'},
    {name:"Contact"},
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
  
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className='z-50 md:w-auto w-full flex justify-between'>
          <div className="md:cursor-pointer h-9 flex items-center">
            <h2 className="font-bold text-3xl">
              PrepWhiz
            </h2>
          </div>
          <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close': "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8">
          <li className="hover:bg-gray-100">
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
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
              {link.name}
              {
                link.submenu &&
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2 duration-300">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
              }

            </h1>
            {link.submenu && (
              <div>
                <div className="absolute bg-white top-20 py-4 px-20 left-0 mx-40 hidden group-hover:md:block hover:md:block">
                  <h1 className="text-3xl capitalize font-normal py-5">
                    Test Prep
                  </h1>
                  <h3 className="normal-case font-normal font-sans py-2">
                    PrepWhiz's AI-powered online prep course is designed to calculate your strengths and weaknesses and customize your practice for your abilities.
                    Make faster progress with less time and less money than all the other prep courses. If you would like private tutoring
                    as a supplement to your AI education, make a request for guided instruction with one of our 99th percentile tutors.
                  </h3>
                  <div className= "grid grid-cols-3 gap-3 py-2">
                    {link.sublinks.map((mysublinks) => (
                      <Link to={`/testprep/${mysublinks.Head}`} className="bg-blue-600 text-white text-center p-2 px-6 rounded font-thin hover:bg-blue-800 duration-300">
                        <h1 className="text-md font-medium">
                          {mysublinks.Head}
                        </h1>
                      </Link>
                    ))}
                  </div>
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
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
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
          {props.userId?
          <Link to="/testprep/sat" className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-2 rounded-full">
            Go to Dashboard
          </Link>       
          : 
          <Link to="/login" className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-2 rounded-full">
            Get Started
          </Link>
          }

        </div>
        {/* MOBILE NAV */}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block ">
              Home
            </Link>
          </li>
                {links.map((link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group cursor-pointer"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name!=="Test Prep"? 
                <Link to={`${link.name.toLowerCase().replace(" ","")}`}>
                  {link.name}
                </Link>
                : "Test Prep"}

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
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                        <Link to={`/testprep/${slinks.Head}`} className="text-lg font-semibold ">
                          {slinks.Head}
                        </Link>

                  </h1>
              </div>
            ))}
          </div>
        </div>
      ))}
        <div className="py-5 mt-5 text-center">
        {props.userId?
          <Link to="/testprep/sat" className="bg-cyan-950 text-white px-6 py-2 rounded-full">
            Go to Dashboard
          </Link>       
          : 
          <Link to="/login" className="bg-cyan-950 text-white px-6 py-2 rounded-full">
            Get Started
          </Link>
        }
        </div>
        </ul>
      </div>

    </nav>
  );
}

export default NavBar;
