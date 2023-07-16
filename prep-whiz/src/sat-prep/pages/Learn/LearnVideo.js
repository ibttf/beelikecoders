import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from "react-icons/ai"
import vid1 from "../../../styles/vid1.mp4"
const LearnVideo = (props) => {
    const {lesson}=useParams()
    const navigate=useNavigate();
    return (
        <div className="ml-60 mt-24">
                <p onClick={()=>{navigate("/testprep/sat/learn/math")}}
                   className="mb-4 font-bold text-md flex items-center cursor-pointer"
                    >
                        <AiOutlineArrowLeft size="24" class/>
                        BACK</p>
                <h1 className="font-extrabold text-4xl text-gray-700">{lesson}</h1>
                <div className="video-responsive">
                    <video controls width="90%" className="rounded-3xl my-12">
                        <source src={vid1} type="video/mp4" />
                        <p>Sorry, your browser does not support video.</p>

      
                    </video>
                </div>

        </div>
    );
}

export default LearnVideo;
