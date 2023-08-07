import React from 'react'; 
import question from "../styles/fp-question.png" 
const Judges = () => {
    return (
        <div className="relative text-center mt-72 pb-48 flex flex-col w-8/12 border-8 rounded-xl bg-amber-200
                      border-amber-400 mx-auto justify-between" id="judges"
                    >
            
          <div className="m-0 py-12 flex flex-col justify-center items-center">
            <h1 className="font-bubble text-7xl text-amber-700 ">
              JUDGES
            </h1>
            <h2 className="font-bubble text-4xl text-amber-500 pt-12">COMING SOON...</h2>
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

    );
}

export default Judges;
