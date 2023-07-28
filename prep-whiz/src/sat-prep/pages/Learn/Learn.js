import React from 'react';
import { Link } from 'react-router-dom';

const Learn = (props) => {
    return (
        <div className={`${props.isExpanded ? "ml-60":"mx-24"}  duration-100 mt-24`}>
            <h1 className="text-center font-extrabold text-5xl text-gray-700">Learn</h1>
            <div className="grid grid-col-3 grid-flow-col text-center mt-24 gap-3">
                <Link to="/testprep/sat/learn/reading">
                    <div className={`relative flex items-center 
                                h-full ${props.isExpanded ? "w-88":"w-96"}
                                text-center
                                bg-gray-700 hover:bg-gray-900
                                text-white hover:text-white
                                rounded-3xl
                                transition-all duration-300 ease-linear
                                cursor-pointer shadow-lg  group justify-center p-2
                                py-12
                                flex-col `}>
                        <h1 className="text-3xl font-bold">Reading</h1>
                        <p className="py-4 px-4 text-center">Reading is ALL practice.
                        </p>
                    </div>
                </Link>
                <Link to="/testprep/sat/learn/writing">
                    <div className={`relative flex items-center 
                                ${props.isExpanded ? "w-88":"w-96"}
                                text-center
                                h-full 
                                bg-gray-700 hover:bg-gray-900
                                text-white hover:text-white
                                rounded-3xl
                                transition-all duration-300 ease-linear
                                cursor-pointer shadow-lg  group justify-center p-2
                                py-12
                                flex-col `}>
                        <h1 className="text-3xl font-bold">Writing</h1>
                        <p className="py-4 px-12 text-center">English rules you forgot from the third grade.
                        </p>
                    </div>
                </Link>
                <Link to="/testprep/sat/learn/math">
                    <div className={`relative flex items-center 
                                ${props.isExpanded ? "w-88":"w-96"}
                                text-center
                                h-full
                                bg-gray-700 hover:bg-gray-900
                                text-white hover:text-white
                                rounded-3xl
                                transition-all duration-300 ease-linear
                                cursor-pointer shadow-lg  group justify-center p-2
                                py-12
                                flex-col `}>
                        <h1 className="text-3xl font-bold">Math</h1>
                        <p className="py-4 px-4 text-left">Formulas formulas formulas.
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Learn;
