import React, {useState} from 'react';

const FAQ = () => {
    // STATES FOR FREQUENTLY ASKED QUESTIONS SECTION
  const [genOpen1,setGenOpen1]=useState(false)
  const [genOpen2,setGenOpen2]=useState(false)
  const [genOpen3,setGenOpen3]=useState(false)
  const [genOpen4,setGenOpen4]=useState(false)
  const [genOpen5,setGenOpen5]=useState(false)
  const [genOpen6,setGenOpen6]=useState(false)
  const [genOpen7,setGenOpen7]=useState(false)
  


  const [logOpen1,setLogOpen1]=useState(false)
  const [logOpen2,setLogOpen2]=useState(false)
  const [logOpen3,setLogOpen3]=useState(false)
  const [logOpen4,setLogOpen4]=useState(false)
    return (
        <div className="w-full my-36 relative" id="faq">
        <div className="md:w-9/12 w-10/12 mx-auto  pt-24 pb-96 rounded-2xl text-left rounded-r-xl px-12" style={{"background-color":"#778c38"}}>
            <h1 className="font-bubble text-center text-7xl text-green-800 py-12 drop-shadow-xl">
              FAQ</h1>
            <div className="lg:flex lg:items-start xl:w-9/12 mx-auto">
              {/* GENERAL QUESTIONS */}
              <div className="flex flex-col w-full mr-4">
                <h1 className="font-bubble text-4xl text-green-800 py-4 drop-shadow-xl">GENERAL</h1>
                {/* WHAT IS A HACKATHON? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen1(!genOpen1)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> What is a hackathon?
                      
                  </div>
                  <div className={`${genOpen1? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                  A hackathon is where you transform your crazy ideas into real projects. 
                  <br></br>Hundreds of students from across California form teams around an idea and collaboratively create technical solutions to various problems and challenges. 
                  <br></br>These ideas turn into websites, mobile apps, hardware, and more!
                  </div>
                </div>
                {/* CAN I ATTEND? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen2(!genOpen2)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> Can I attend?
                      
                  </div>
                  <div className={`${genOpen2? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                  BeeLikeCoders is open to all two-year, four-year, and high-school students over the age of 18 from any majors and any schools, as well as graduates who have completed their degrees within the past year. 

                  </div>
                </div>
                {/* Is it ok if I don't know how to code? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen3(!genOpen3)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> Is it ok if I don't know how to code?
                      
                  </div>
                  <div className={`${genOpen3? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    Absolutely! BeeLikeCoders is proud to be a beginner-friendly hackathon.
                    <br></br>
                    You don't need to know any code, but you should be willing to learn.
                    <br></br>
                    Our mentors host beginner-friendly workshops for everyone to be able to build a project they can be proud of.
                  </div>
                </div>

                {/* What am I even supposed to make? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen4(!genOpen4)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> What am I even supposed to make?
                      
                  </div>
                  <div className={`${genOpen4? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    Every year we have a general problem for our applicants to try and tackle any way they see fit.
                    <br></br>
                    For example, last year, we asked participants to 
                    <br></br><span className="text-green-500">build something to help students' mental health at Laney College</span>
                    <br></br>
                    Lots of room to explore, right? We keep our problems general to give participants as much creative flexibility as we can.
                  </div>
                </div>

                {/* How do teams work? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen5(!genOpen5)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> How do teams work?
                      
                  </div>
                  <div className={`${genOpen5? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    A single team can have anywhere between 1 and 4 members and should expect to submit one project per team. 
                    <br></br>
                    It's okay to participate by yourself, but we recommend finding or creating a team for the full BeeLikeCoders experience.
                    <br></br>
                  </div>
                </div>
                

                {/* Do I have to submit a project? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen6(!genOpen6)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> Do I have to submit a project?
                      
                  </div>
                  <div className={`${genOpen6? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    Nope.
                    <br></br>
                    While we encourage everyone to try and submit something, it's totally fine to attend the hackathon as a spectator.
                    <br></br>
                  </div>
                </div>
              
              
                {/* How can I help? */}
                <div className="h-full">
                  <div onClick={()=>setGenOpen7(!genOpen7)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span>How can I help?
                      
                  </div>
                  <div className={`${genOpen7? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    BeeLikeCoders is always looking for new mentors and judges!
                    <br></br>
                    If you're interested in helping out as either, please send us an email at  
                    <span className="underline text-green-500"> beelikecoders@gmail.com.</span>
                  </div>
                </div>
              </div>


              {/* OTHER */}
              <div className="flex flex-col xl:ml-16 w-full mr-4">
                <h1 className="font-bubble text-left text-4xl text-green-800 py-4 drop-shadow-xl">OTHER</h1>

                {/* How do I register? */}
                <div className="h-full">
                  <div onClick={()=>setLogOpen1(!logOpen1)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> How do I register?
                      
                  </div>
                  <div className={`${logOpen1? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    Simple!
                    <br></br>
                    Click <span className="cursor-pointer text-3xl text-green-500">here</span> to register and fill out the form. Easy peasy.
                    <br></br>
                  </div>
                </div>
                


                {/* How much will it cost? */}
                <div className="h-full">
                  <div onClick={()=>setLogOpen2(!logOpen2)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> How much will it cost?
                      
                  </div>
                  <div className={`${logOpen2? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    Absolutely nothing.
                    <br></br>
                    BeeLikeCoders is proud to be a completely free hackathon. As long as you can make it here, we'll cover everything else.
                    <br></br>
                  </div>
                </div>
                
                {/* Where is BeeLikeCoders? */}
                <div className="h-full">
                  <div onClick={()=>setLogOpen3(!logOpen3)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> Where is BeeLikeCoders?
                      
                  </div>
                  <div className={`${logOpen3? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    This year, BeeLikeCoders will be held at _____.
                  </div>
                </div>
                {/* When is the application deadline? */}
                <div className="h-full">
                  <div onClick={()=>setLogOpen4(!logOpen4)}
                      className={`hover:text-green-900 cursor-pointer xl:text-3xl md:text-xl text-lg items-center flex text-green-800 font-light-bubble font-semibold py-2 transition-all duration-100`}>
                    <span className="text-4xl items-center mr-2">•</span> When is the application deadline?
                      
                  </div>
                  <div className={`${logOpen4? "h-full": "h-0"} font-light-bubble ml-2 xl:text-3xl text-xl overflow-hidden pl-2 text-green-900`}>
                    This year, registration is due by _____.
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="w-3/12 absolute left-0 right-0 mx-auto bg-yellow-900 rounded-b-xl py-24 z-0 tree" >
          <div className="w-4/12 h-48 rounded-full bg-gray-800 mx-auto">

          </div>
        </div>
    </div>
    );
}

export default FAQ;
