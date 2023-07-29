import React from 'react';

const TutorProfile = (props) => {
    return (
        <div className="grid grid-cols-1 grid-flow-row">
            <img src={props.person} alt="Great Tutor Here" className="rounded-full h-36 w-36 mx-auto" ></img>
            <h1 className="font-lg text-center text-gray-700 font-semibold py-2">
                {props.name}
            </h1>
            <h2 className="font-md text-center text-gray-600 font-semibold">
                {props.title}
            </h2>
            <p className="py-4 text-gray-900 font-thin text-left">
                <span className="font-semibold text-gray-800">
                    SAT: {props.scores[0]}
                    <br></br>
                    SAT Reading/Writing: {props.scores[1]}
                    <br></br>
                    SAT Math: {props.scores[2]}
                </span> 
                <br></br>
                {props.bio}
            </p>
        </div>
    );
}

export default TutorProfile;
