import React from 'react';

const Footer = () => {
    return (

    <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl md:px-12">
        <div className="grid  grid-flow-col grid-cols-2  px-4 py-6 lg:gap-48 lg:py-8 sm:gap-8">
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Company</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Careers</a>
                    </li>
                    
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Help center</h2>
                <ul className="text-gray-400 font-medium">
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Ask a Question</a>
                    </li>
                    <li className="mb-4">
                        <a href="/" className="hover:underline">Contact Us</a>
                    </li>
                </ul>
            </div>

        </div>
        <div className="px-12 py-6 bg-gray-700 flex flex-col md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-300 text-center w-full">© 2023 PrepWhiz™ All Rights Reserved.
            </span>
            <span className="text-sm text-gray-300 text-center w-full py-4">
            SAT® is a registered trademark of the College Entrance Examination Board™. The College Entrance Examination Board™ does not endorse, nor is it affiliated in any way with the owner or any content of this web site. ACT® is a registered trademark of ACT Inc., which does not endorse, nor is it affiliated in any way with, the owner or any content of this web site.
            </span>

        </div>
        </div>
    </footer>

    );
}

export default Footer;
