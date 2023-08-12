import React from 'react'; 
import question from "../styles/fp-question.png" 
const Judges = () => {
    return (
      <div className="w-full bg-[url('../styles/fp-bg-20.png')]" style={{backgroundColor: "#fefcbf", backgroundSize:"100%"}}>
        <div className="relative text-center flex flex-col xl:w-7/12 w-10/12 lg:border-16 border-8 border-dotted rounded-xl 
                       border-amber-400 mx-auto justify-between bg-amber-200" id="judges"
                    >
            
          <div className="m-0 py-12 flex flex-col justify-center items-center">
            <h1 className="font-bubble text-amber-700 header3" >
              JUDGES
            </h1>
            <h2 className="font-bubble text-amber-500 pt-6 header4">COMING SOON...</h2>
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
