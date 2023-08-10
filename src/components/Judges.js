import React from 'react'; 
import question from "../styles/fp-question.png" 
const Judges = () => {
    return (
      <div className="w-full bg-[url('../styles/fp-bg-20.png')]" style={{backgroundSize:"100%"}}>
        <div className="relative text-center pb-24 flex flex-col xl:w-7/12 w-10/12 lg:border-16 border-8 border-dotted rounded-xl bg-amber-200
                       border-amber-400 mx-auto justify-between" id="judges"
                    >
            
          <div className="m-0 py-12 flex flex-col justify-center items-center">
            <h1 className="font-bubble text-amber-700" style={{fontSize: "6vh"}}>
              JUDGES
            </h1>
            <h2 className="font-bubble text-amber-500 pt-6" style={{fontSize: "4vh"}}>COMING SOON...</h2>
          </div>

          <div className="flex justify-center w-full">
            <div className="gallery">
              <img src={question} className="w-1/12 h-1/12" alt="judge" >
              </img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
              <img src={question} className="w-1/12 h-1/12" alt="judge"></img>
            </div>
          </div>


        </div>
        </div>

    );
}

export default Judges;
