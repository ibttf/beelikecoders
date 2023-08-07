import React from 'react';
import {BsHammer } from "react-icons/bs"

const Schedule = () => {
    return (
        <div className="relative text-center mt-48 flex flex-col w-8/12 border-8 rounded-xl border-black  bg-black mx-auto justify-between" id="schedule">
          {/* winking bee face */}
          <svg className="absolute left-0 right-0 mx-auto -top-36 w-48"  viewBox="0 0 512 512">
            <g fill="#000000" stroke="#000000" stroke-width="1">
              <path d="M240.5 511 c-90.9 -6.9 -167.7 -72.4 -188.4 -160.7 -5.4 -23.1 -6.8 -54.5 -3.5 -77.4 8.9 -61.9 44.1 -115.8 97.8 -149.3 4.9 -3.1 9.3 -5.6 9.8 -5.6 0.4 0 0.8 1 0.8 2.3 0 1.6 -2.6 4.2 -9.6 9.7 -48.3 37.9 -78.3 99.1 -78.4 160 0 8 0.5 18.4 1.1 23 9.2 74.2 56.9 137.9 125.3 167.6 26.7 11.5 51.7 16.7 80.1 16.8 20.8 0 35.3 -2.1 55.4 -7.9 13.3 -3.8 20.1 -4.5 20.1 -2 0 1.8 -3.1 3.4 -17.4 9.2 -28 11.2 -62.9 16.6 -93.1 14.3z"/>
              <path d="M241.3 318.1 c-5.9 -2.2 -9.5 -4.5 -13.7 -9 -2.3 -2.4 -3 -4.2 -3.4 -8.5 -0.4 -5.1 -0.2 -5.7 2.6 -8.6 4.1 -4 11.2 -4.3 16.3 -0.5 7.5 5.5 9.5 6.5 13 6.5 2.3 0 4.9 -0.9 7 -2.5 8 -5.8 9.4 -6.5 14.1 -6.5 3.5 0 5.4 0.6 7.5 2.4 2.5 2.2 2.8 3.1 2.8 8.5 0 5.7 -0.2 6.2 -4 10.1 -2.2 2.2 -6.5 5.3 -9.5 6.7 -4.7 2.3 -7 2.8 -16.5 3 -9 0.3 -12 0 -16.2 -1.6z"/>
              <path d="M170.3 310 c-3.6 -1.5 -4.3 -4.3 -4.3 -17.3 0 -11.1 0.2 -12.7 2.1 -15.1 1.8 -2.3 2.7 -2.6 8.3 -2.6 5.2 0 6.6 0.4 8.4 2.3 2 2.1 2.2 3.4 2.2 15.4 0 16 -0.7 17.4 -9.1 17.9 -3 0.2 -6.4 0 -7.6 -0.6z"/>
              <path d="M313 308 c-1.6 -1.6 -2 -3.3 -2 -9.5 0 -12.1 4.4 -19.3 14.5 -24.1 6.1 -2.9 16.7 -3.2 24 -0.7 10.6 3.6 17.3 14.7 16.3 27.1 -0.6 7.3 -2.9 9.2 -10.7 9.2 -7 0 -9.8 -1.8 -10.7 -6.8 -0.9 -4.8 -2 -6.9 -4.4 -8.2 -3.4 -1.8 -8 2.7 -8 7.9 0 1 -0.9 3 -2.1 4.5 -1.8 2.3 -2.7 2.6 -8.5 2.6 -5.1 0 -6.8 -0.4 -8.4 -2z"/>
              <path d="M177 108 c1.2 -0.7 0.4 -2.4 -4.2 -9.2 -6.5 -9.6 -17.1 -20.6 -26.7 -27.8 -8.6 -6.4 -27.2 -16 -27.8 -14.2 -1 2.6 -2.5 1.1 -2 -2 1.2 -6.9 4.2 -15.8 5.4 -15.8 0.7 0 1.3 0.6 1.3 1.3 0 0.7 3.6 3 8 5 17.7 8.3 37.4 24 49.1 39.2 6.1 7.9 13 19.3 12.1 19.9 -0.4 0.2 -3.2 1.4 -6.2 2.5 -5.7 2.2 -11.9 2.9 -9 1.1z"/>
              <path d="M327 107.5 c-8.5 -2.5 -9 -2.7 -9 -4.2 0 -0.8 0.4 -1.2 0.9 -0.9 0.5 0.3 2.1 -1.5 3.6 -4.1 12.5 -21.8 34.8 -41.9 58.8 -53.1 4.2 -2 7.7 -4.2 7.7 -4.9 0 -0.7 0.6 -1.3 1.3 -1.3 1.4 0 3.5 7.4 4.3 15 0.4 3.3 0.2 4.1 -0.5 3 -0.9 -1.3 -2.5 -0.8 -10.7 3.4 -17.8 9 -33.5 22.6 -44.2 38.4 -4.6 6.8 -5.4 8.5 -4.2 9.2 2.3 1.5 -2.6 1.1 -8 -0.5z"/>
            </g>
            <g fill="#000000" stroke="#000000" stroke-width="1">
              <path d="M254.7 500 c-97.7 -10.3 -175.6 -86.5 -187.6 -184 -1.6 -12.2 -1.3 -41.7 0.4 -53.8 6.3 -44.5 25.6 -84.2 56.6 -116.6 14.4 -15.2 28.3 -25.9 41.9 -32.4 6.3 -3 12 -6.1 12.5 -6.8 1.5 -1.9 11.8 -5.5 12.8 -4.5 0.5 0.5 3.6 0 7 -1 33.5 -10 78.4 -10.4 112.3 -0.9 4.3 1.2 9.2 2.4 10.9 2.5 5.1 0.6 12.5 2.9 12.5 4 0 0.5 5.8 3.8 12.8 7.1 22.4 10.8 41.3 24.6 59.2 43 22.7 23.4 38.3 48.9 48.4 79.4 7.7 23 10.6 41.3 10.6 66.2 0 75.4 -38.4 141.9 -104.7 181.3 -6 3.6 -11.5 6.3 -12.4 6 -0.9 -0.3 -7.2 1.1 -13.9 3 -6.8 2 -17.8 4.5 -24.4 5.6 -14 2.3 -41.5 3.3 -54.9 1.9z m32.1 -37.9 c47.6 -10.5 88.4 -40.5 111.3 -81.9 15.2 -27.3 21.8 -54.9 20.6 -85.1 -1.9 -46 -21.4 -74.9 -58.2 -85.8 -8.2 -2.4 -28.2 -2.4 -38.3 0 -16.7 4 -30.7 10.5 -44 20.4 -9.8 7.3 -12.6 8.3 -22.2 8.3 -9.4 0 -12.8 -1.2 -20.8 -7.3 -18 -13.7 -39.3 -22 -60.2 -23.4 -33 -2.1 -62 16.7 -74.1 48.1 -6 15.4 -7.3 23.9 -7.3 46.1 0 17.2 0.3 21.5 2.2 30.5 15.1 69.3 68.2 120 137.7 131.6 11.9 2 41.3 1.1 53.3 -1.5z"/>
            </g>
            <g fill="#facc15" stroke="#facc15" stroke-width="1">
              <path d="M77 75.7 c-11.8 -2.7 -21.7 -10.6 -26.8 -21.5 -3.9 -8.3 -3.9 -23.1 0 -31.4 1.4 -3.1 4.4 -7.6 6.7 -10 4.1 -4.5 13.7 -10.5 14.9 -9.4 0.3 0.4 0.1 3.3 -0.6 6.4 -0.7 3.2 -1.2 6.8 -1.2 8 0 2.8 4.2 15.6 5.2 16 0.4 0.2 0.8 0.8 0.8 1.3 0 0.6 1.9 3 4.2 5.5 4.8 5.1 13.9 10 20.4 11 6.2 0.9 16.5 -1.3 17.2 -3.8 0.5 -2.1 4.2 -2.5 4.2 -0.4 0 4.8 -7.6 16.4 -13.7 21.1 -8.7 6.7 -21.1 9.5 -31.3 7.2z"/>
              <path d="M420.9 76 c-9.6 -1.6 -19.4 -7.7 -24.4 -15.1 -1.6 -2.4 -3.3 -4.6 -3.6 -4.9 -0.4 -0.3 -1.5 -2.9 -2.4 -5.8 -4 -12.2 0.3 -29.1 9.8 -38.6 3.8 -3.7 11.2 -8.6 13.2 -8.6 0.9 0 0.6 5.9 -0.6 10.6 -1 4 -0.9 5.4 1.6 12.9 1.5 4.7 3.1 8.5 3.6 8.5 0.5 0 0.9 0.6 0.9 1.3 0 0.7 1.5 2.7 3.3 4.4 9.5 9 20.1 12.7 29.7 10.5 2.8 -0.7 6.5 -1.2 8.1 -1.2 2.7 0 3 0.3 2.4 2.3 -2.3 7.6 -9.8 15.8 -18.4 20.1 -3.9 2 -15.9 5 -18.1 4.5 -0.3 -0.1 -2.6 -0.5 -5.1 -0.9z"/>
            </g>
            <g fill="#ff9e8f">
              <path d="M143.1 360.9 c-11.3 -1.9 -24.3 -11.8 -26.9 -20.7 -2 -6.6 -1.5 -19.9 0.8 -24.8 2.4 -5 9.1 -11.4 14.9 -14.3 8.4 -4.3 22.2 -6.1 32.6 -4.3 3.4 0.6 4 1.1 4.6 4.1 0.4 1.8 1.4 4 2.3 4.9 2.1 2.1 8 2 10.4 -0.1 1.8 -1.7 2.1 -1.6 5.7 2.4 5.8 6.5 7.5 11.1 7.5 21 0 7.2 -0.4 9.3 -2.6 13.6 -7.3 14.8 -26.6 21.9 -49.3 18.2z"/>
              <path d="M345.9 361 c-10.4 -1.8 -20.8 -8.6 -25.6 -16.8 -2.3 -3.9 -2.8 -6 -3.1 -13.9 -0.4 -8.5 -0.2 -9.8 2.2 -14.8 4.3 -8.8 16.4 -17.5 24.3 -17.5 2.7 0 3.2 0.4 3.8 3 1.8 8.3 13.5 7.8 15.1 -0.7 l0.7 -3.5 4.9 0.5 c11 1.3 23.6 10.1 27.4 19.2 1.9 4.8 1.9 20.1 -0.2 25 -6.2 14.9 -27.3 23.2 -49.5 19.5z"/>
            </g>
            <g fill="#facc15" stroke="#facc15" stroke-width="1">
              <path d="M244 467.9 c-66.1 -4.3 -124.8 -49.9 -145.9 -113.4 -6.4 -19.1 -7.6 -27.7 -7.5 -53 0 -19.9 0.3 -24.2 2.1 -32.1 8.6 -36.7 30.1 -58.8 62.7 -64.5 9.5 -1.6 29.8 -0.6 40 2.1 15.8 4.1 30 11 42.8 20.7 7.4 5.6 11.5 7.3 17.8 7.3 6.5 0 10.2 -1.6 19.2 -8.3 13.3 -9.9 27.2 -16.4 44 -20.4 10.4 -2.5 35.9 -2.5 44.3 0 30 9 47.8 29.1 55.7 62.7 2.6 11.2 3.6 39.9 1.8 53.7 -5.6 45.4 -31.1 88.1 -68 114.5 -24.3 17.4 -55.5 28.8 -82.5 30.3 -5.5 0.3 -11.1 0.7 -12.5 0.9 -1.4 0.1 -7.7 -0.1 -14 -0.5z m-79.9 -110.3 c25.9 -5.5 36.2 -29 20.4 -46.4 -3.5 -3.9 -3.6 -4.2 -2.1 -6.4 1.2 -1.7 1.6 -4.7 1.6 -12.2 0 -8.9 -0.2 -10.2 -2.2 -12.3 -3 -3.3 -8 -3.1 -10.7 0.3 -1.8 2.3 -2.1 4.1 -2.1 11.7 l0 9 -3.2 -0.7 c-11.5 -2.3 -21.9 -1.1 -30.9 3.5 -5.8 2.9 -12.4 9.3 -14.9 14.3 -2.3 4.8 -2.6 12.7 -0.8 18.8 2.6 8.9 15.6 18.8 26.9 20.7 7.9 1.3 10.6 1.2 18 -0.3z m200.2 0.4 c12.5 -2 24.2 -10.1 28.1 -19.5 2 -4.7 2.1 -14.5 0.2 -19 -3.5 -8.3 -15.6 -17.3 -25.6 -19 -3.6 -0.6 -3.8 -0.9 -4.9 -6.1 -2.4 -10.4 -11.3 -18.1 -22.1 -19.2 -13.1 -1.2 -25.9 10.2 -26 23.1 0 5.8 2.4 8.7 7.4 8.7 3.7 0 7.6 -3.6 7.6 -7.1 0 -8 9.9 -12.1 15.5 -6.4 3 2.9 3.4 7.5 0.8 7.5 -3 0 -11.6 4.5 -16 8.4 -15.7 13.7 -10.7 36.5 10.2 45.7 7.9 3.5 15.7 4.4 24.8 2.9z m-94.1 -43.8 c5.4 -2.4 12.6 -8.6 13.9 -11.9 1.8 -4.9 -3.6 -11.2 -8.5 -9.9 -1.3 0.3 -4.3 2.2 -6.6 4.1 -7.3 6.1 -16.5 6.9 -23.2 1.9 -10.4 -7.5 -11.6 -7.8 -16 -3.4 -2.4 2.5 -2.9 3.6 -2.3 5.8 1.2 5.1 8.3 11.2 16.8 14.3 6.8 2.5 19.1 2.1 25.9 -0.9z"/>
              <path d="M98.4 55.1 c-0.2 -0.2 -1.4 -0.5 -2.7 -0.7 -1.2 -0.1 -2.3 -0.3 -2.4 -0.4 -0.2 -0.2 -0.6 -0.3 -1 -0.4 -4.7 -0.8 -19.3 -12.6 -19.3 -15.6 0 -0.5 -0.4 -1 -1 -1 -0.5 0 -1 -0.9 -1 -2 0 -1.1 -0.4 -2 -1 -2 -0.5 0 -0.9 -0.3 -0.8 -0.7 0.2 -1 -1.2 -7.5 -1.9 -8.6 -0.8 -1.3 -0.6 -11.9 0.2 -14 0.4 -1 0.5 -2 0.2 -2.3 -0.3 -0.4 0.2 -1.4 1.1 -2.4 4.9 -5 22.4 -5.4 32.4 -0.6 16 7.6 25.3 28.1 20.3 44.7 -1 3.3 -2.1 5.5 -2.5 4.9 -0.7 -1.1 -7 -0.3 -7 0.9 0 0.8 -12.9 0.9 -13.6 0.2z"/>
              <path d="M440.6 55.3 c-0.2 -0.3 -1 -0.6 -1.8 -0.7 -4.7 -1 -7.8 -2.3 -11.8 -4.9 -5.9 -3.9 -11 -8.8 -11 -10.4 0 -0.7 -0.4 -1.3 -0.8 -1.3 -0.5 0 -1.5 -1.8 -2.2 -4 -0.7 -2.2 -1.7 -4 -2.2 -4 -0.5 0 -0.6 -0.4 -0.3 -1 0.3 -0.5 0.3 -1.6 -0.2 -2.2 -0.4 -0.7 -0.8 -1.7 -0.8 -2.3 -0.1 -0.5 -0.5 -2.6 -0.9 -4.6 -0.5 -2.5 -0.3 -5.1 0.9 -8.4 0.9 -2.7 1.4 -5.4 1.1 -6.1 -0.9 -2.3 9.5 -4.6 18.7 -4.2 10.2 0.4 17.6 3.6 24.5 10.5 9.5 9.5 13.4 24.1 9.9 36.3 -1.6 5.3 -1.7 5.5 -5.3 5.7 -2 0.1 -4 0.5 -4.3 1 -0.6 0.8 -12.7 1.4 -13.5 0.6z"/>
            </g>
            </svg>
          {/* WINGS */}
          <svg className="absolute 3xl:-left-80 -left-36 -top-12 3xl:w-96 w-48" viewBox="0 0 140 140" preserveAspectRatio="xMidYMid meet">
            <g fill="#000000">
              <path d="M68.5 107.6 c-8.7 -2.7 -15.8 -8.5 -19 -15.3 -0.9 -1.8 -2.3 -3.3 -3.1 -3.3 -0.8 0 -3.9 -0.9 -6.9 -1.9 -26.5 -9.3 -34 -43.1 -13.9 -62.1 10.9 -10.3 22.9 -13.1 37 -8.6 12.3 3.9 38.8 18.1 52.7 28.2 l4.7 3.4 0 8.8 c0 4.9 -0.3 9.2 -0.7 9.6 -0.4 0.4 -1.6 2.8 -2.8 5.5 -1.1 2.6 -3.9 7 -6.2 9.7 -2.3 2.7 -6.6 8.1 -9.5 12.1 -6.7 9 -11.5 12.9 -17.9 14.2 -6.3 1.4 -9.3 1.3 -14.4 -0.3z m14.4 -5.6 c4.2 -1.2 8.9 -5.5 14.6 -13.5 4.4 -6.2 15.8 -26.6 15.1 -27.2 -0.2 -0.2 -5.2 2.6 -11.2 6.3 -14.9 9 -29 16 -39 19.3 l-8.4 2.7 3.6 4.2 c6.6 7.8 16.1 10.9 25.3 8.2z m-22.3 -20.6 c6.7 -1.9 24.6 -10.9 38.7 -19.4 l10.8 -6.5 -30.8 -0.5 c-16.9 -0.3 -30.9 -0.7 -31.1 -0.8 -0.2 -0.1 -0.2 -1.2 0 -2.4 l0.3 -2.3 31.3 -0.5 31.4 -0.5 -11.9 -7.1 c-22.8 -13.8 -40.1 -21.4 -48.7 -21.4 -15.2 0 -29.3 13.4 -30.4 29 -0.7 10.5 1.7 17 9.2 24.6 9.1 9 18.7 11.5 31.2 7.8z"/>
            </g>
          </svg>
          <svg className="absolute 3xl:-right-80 -right-36 -top-12 3xl:w-96 w-48 -scale-x-100" viewBox="0 0 140 140" preserveAspectRatio="xMidYMid meet">
            <g fill="#000000">
              <path d="M68.5 107.6 c-8.7 -2.7 -15.8 -8.5 -19 -15.3 -0.9 -1.8 -2.3 -3.3 -3.1 -3.3 -0.8 0 -3.9 -0.9 -6.9 -1.9 -26.5 -9.3 -34 -43.1 -13.9 -62.1 10.9 -10.3 22.9 -13.1 37 -8.6 12.3 3.9 38.8 18.1 52.7 28.2 l4.7 3.4 0 8.8 c0 4.9 -0.3 9.2 -0.7 9.6 -0.4 0.4 -1.6 2.8 -2.8 5.5 -1.1 2.6 -3.9 7 -6.2 9.7 -2.3 2.7 -6.6 8.1 -9.5 12.1 -6.7 9 -11.5 12.9 -17.9 14.2 -6.3 1.4 -9.3 1.3 -14.4 -0.3z m14.4 -5.6 c4.2 -1.2 8.9 -5.5 14.6 -13.5 4.4 -6.2 15.8 -26.6 15.1 -27.2 -0.2 -0.2 -5.2 2.6 -11.2 6.3 -14.9 9 -29 16 -39 19.3 l-8.4 2.7 3.6 4.2 c6.6 7.8 16.1 10.9 25.3 8.2z m-22.3 -20.6 c6.7 -1.9 24.6 -10.9 38.7 -19.4 l10.8 -6.5 -30.8 -0.5 c-16.9 -0.3 -30.9 -0.7 -31.1 -0.8 -0.2 -0.1 -0.2 -1.2 0 -2.4 l0.3 -2.3 31.3 -0.5 31.4 -0.5 -11.9 -7.1 c-22.8 -13.8 -40.1 -21.4 -48.7 -21.4 -15.2 0 -29.3 13.4 -30.4 29 -0.7 10.5 1.7 17 9.2 24.6 9.1 9 18.7 11.5 31.2 7.8z"/>
            </g>
          </svg>

          <div className="m-0 py-12 ">
            <h1 className="text-yellow-400 font-bubble text-7xl">
              SCHEDULE
            </h1>
          </div>
          <div className="w-full bg-yellow-400">
                <h2 className="py-12 font-light-bubble lg:text-3xl text-xl">
                  <div className="flex w-full justify-center items-center lg:text-4xl text-3xl">
                    Still in the works...
                    <BsHammer size="36" className=""/>
                  </div>

                  <br></br>
                  In the meantime, click <a href="https://docs.google.com/document/d/1hrnKy7hEBFc7_Ellov7c_5sDgelJ7kfoM5kcCFzk3LA/edit" target="_blank" className="underline cursor-pointer">here</a> to see the 2023 schedule.
                </h2>
          </div>
         
        </div>
    );
}

export default Schedule;
