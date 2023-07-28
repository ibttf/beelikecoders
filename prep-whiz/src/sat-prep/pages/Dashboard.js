import React, {useState,useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BsFillLightningFill, BsPencilFill} from 'react-icons/bs';
import Loading from '../../pages/Loading';
import { LineChart, Line } from 'recharts';


import config from '../../baseUrl';
const Dashboard = (props) => {
    const navigate=useNavigate();

    const [user ,setUser]=useState({})
    const [isLoading, setIsLoading]=useState(false);
    
    const [isScoreShowing,setIsScoreShowing]=useState(true);
    const [isSectionRatingShowing, setIsSectionRatingShowing]=useState(true);


    const [overallScores,setOverallScores]=useState({})
    const [readingScores,setReadingScores]=useState({})
    const [writingScores,setWritingScores]=useState({})
    const [mathScores,setMathScores]=useState({})
    const [lessonInteractions, setLessonInteractions]=useState([])



    useEffect(()=>{
        const checkLoginStatus = async () => {
            try {
              const response = await fetch(`${config.baseUrl}/users/current`, {
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
              if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUser(data);
              }
            }catch(err){
              console.log(err);
            }
            setIsLoading(false);
          };

        
          const getOrCreateScores=async()=>{
            try{
              const response = await fetch(`${config.baseUrl}/users/create-scores`, {
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
              const data=await response.json()

              setReadingScores({
                readingCorrect: data[0].readingCorrect,
                readingAttempted: data[0].readingAttempted
              })
              setWritingScores({
                writingCorrect:  data[0].writingCorrect,
                writingAttempted:  data[0].writingAttempted
              })
              setMathScores({
                mathCorrect:  data[0].mathCorrect,
                mathAttempted:  data[0].mathAttempted,
              })
              setOverallScores({
                overallCorrect: data[0].readingCorrect+ data[0].writingCorrect + data[0].mathCorrect,
                overallAttempted:  data[0].readingAttempted+ data[0].writingAttempted+ data[0].mathAttempted,
                readingWritingCorrect:  data[0].readingCorrect+ data[0].writingCorrect,
                readingWritingAttempted:  data[0].readingAttempted+ data[0].writingAttempted
              })
            }catch(err){
            }
          }


          const getLessonInteractions = async () => {
            try {
              const lessonInteractions = await fetch(`${config.baseUrl}/users/lesson-interactions`, {
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
              const jsonLessonInteractions=await lessonInteractions.json()
              setLessonInteractions([...jsonLessonInteractions])
            }catch(err){
              console.log(err);
            }
            setIsLoading(false);
          };

          getLessonInteractions();
          checkLoginStatus();
          getOrCreateScores();

    },[])

    if (isLoading) return (<Loading />)
    return (
      <div className={`${props.isExpanded ? "mr-60 ml-72" : "mx-60"} duration-300 overflow-x-hidden`}>
        
        <div className={` mt-24 flex`}>
          
                <h1 className="font-extrabold text-5xl text-gray-700 w-full">Welcome back, {user.email}</h1>
                    <div onClick={()=>navigate("/testprep/sat/learn")}
                    className={`relative flex items-center
                            h-12 w-36 mt-2 mb-2  
                            ml-2
                            bg-gray-600 hover:bg-black
                            text-white
                            rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center p-2`}>
                    <BsFillLightningFill size="32" /> <h1 className='text-2xl font-extrabold ml-2'>Learn</h1>
                    </div>


        </div>





        {/* ESTIMATED SCORE SECTION */}
        <div className=" mt-12 flex flex-col justify-center h-max bg-gray-700 p-8 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-gray-200 font-extrabold text-xl">Estimated Score</h1>
              <div className=" border-2 text-gray-200 border-gray-200 mx-4 py-1 px-2  font-semibold">
                AI Generated
              </div>
            </div>
            {isScoreShowing ? 
            <div onClick={()=>setIsScoreShowing(false)}
                  className="cursor-pointer text-gray-500 border-2 py-1 rounded-3xl border-gray-500 px-2 hover:border-gray-200 hover:text-gray-200">
              Hide
            </div>:
            <div onClick={()=>setIsScoreShowing(true)}
                  className="cursor-pointer text-gray-500 border-2 py-1 rounded-3xl border-gray-500 px-2 hover:border-gray-200 hover:text-gray-200">
            Show
            </div>
            }

          </div>
          <div className={`duration-1000 ease-in-out  overflow-hidden ${isScoreShowing ? "h-max": "h-0"}`}>
            <div className={`flex items-center `}>
              <h1 className="text-gray-200 text-6xl font-bold">1550</h1>
              <h6 className="text-gray-500 text-3xl mx-2">|</h6>
              <div className="flex flex-col">
                <h3 className="font-bold text-gray-500">400-</h3>
                <h3 className="font-bold text-gray-500">1600</h3>
              </div>
            </div>
            <div className="flex items-center">
              <h6 className="leading-6 text-gray-200 text-7xl font-extralight -mr-1">|</h6>
              <div className="flex flex-col w-full mt-3">
                <div className="flex items-center">
                  <div className="w-full h-6 bg-gray-500 my-1 rounded-r-lg">

                  </div>
                <h3 className="text-gray-500 text-md ml-1">1600</h3>
                </div>
                <div className="flex items-center">
                <div className={`w-${10}/12 h-6 bg-gray-400 my-1 rounded-r-lg`}>
                </div>
                <h3 className="text-gray-500 text-md ml-1">1550</h3>
              </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION RATINGS */}

        <div className=" mt-12 flex flex-col justify-center h-max bg-gray-300 p-8 rounded-xl">
          <div className="flex items-center justify-between">

              <h1 className="text-gray-700 font-extrabold text-xl">Section Ratings</h1>
              {isSectionRatingShowing ? 
              <div onClick={()=>setIsSectionRatingShowing(false)}
                    className="cursor-pointer text-gray-500 border-2 py-1 rounded-3xl border-gray-500 px-2 hover:border-gray-700 hover:text-gray-700">
                Hide
              </div>:
              <div onClick={()=>setIsSectionRatingShowing(true)}
                    className="cursor-pointer text-gray-500 border-2 py-1 rounded-3xl border-gray-500 px-2 hover:border-gray-700 hover:text-gray-700">
              Show
              </div>
              }



          </div>
          <div className={`duration-300 overflow-hidden ${isSectionRatingShowing ? "h-max" : 'h-0'}`}>
            <div className="mt-4 only:grid grid-flow-col grid-col-3 gap-32 auto-cols-fr">
              {/* DOUGHNUT CHART */}
              <div className="text-center flex flex-col justify-between">
                <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}>

                <clipPath id='hole'>
                  <path d='M 50 0 a 50 50 90 0 1 0 100 a 50 50 90 0 1 0 -100 v 10 a 2 2 90 0 0 0 81 a 2 2 90 0 0 0 -81' />
                </clipPath>

                <foreignObject x='0' y='0' width='100' height='100' clipPath='url(#hole)'>
                  
                  <div
                    xmlns='http://www.w3.org/1999/xhtml'
                    style={{
                      width: '100%',
                      height: '100%',
                      background: `conic-gradient(#4f545c ${315}deg, #C7C7C7 ${315}deg)`
                    }}
                  >

                  </div>
                </foreignObject> 
                
                <text className={`fill-gray-500 text-3xl font-extrabold`} x="50" y="50" dominantBaseline="middle" textAnchor="middle">
                  0
                </text>
                
                <text className={`fill-gray-500 text-xs font-semibold`} x="50" y="70" dominantBaseline="middle" textAnchor="middle">
                  No Rating
                </text>
                
                </svg>
                {/* LABELS */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="mt-8 text-2xl font-extrabold text-gray-900">
                  READING
                  </h1>
                  <button onClick={()=>navigate("/testprep/sat/practice")}
                            className="bg-gray-600 px-4 py-1 rounded-xl mt-4 text-white font-bold flex items-center cursor-pointer
                                      hover:bg-gray-900">
                    <BsPencilFill className="mr-2"/>
                    PRACTICE
                  </button>
                </div>
              </div>


              {/* DOUGHNUT CHART */}
              <div className="text-center flex flex-col justify-between">
                <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}>

                <clipPath id='hole'>
                  <path d='M 50 0 a 50 50 90 0 1 0 100 a 50 50 90 0 1 0 -100 v 10 a 2 2 90 0 0 0 81 a 2 2 90 0 0 0 -81' />
                </clipPath>

                <foreignObject x='0' y='0' width='100' height='100' clipPath='url(#hole)'>
                  
                  <div
                    xmlns='http://www.w3.org/1999/xhtml'
                    style={{
                      width: '100%',
                      height: '100%',
                      background: `conic-gradient(#4f545c ${315}deg, #C7C7C7 ${315}deg)`
                    }}
                  >

                  </div>
                </foreignObject> 
                
                <text className={`fill-gray-500 text-3xl font-extrabold`} x="50" y="50" dominantBaseline="middle" textAnchor="middle">
                  0
                </text>
                
                <text className={`fill-gray-500 text-xs font-semibold`} x="50" y="70" dominantBaseline="middle" textAnchor="middle">
                  No Rating
                </text>
                
                </svg>
                {/* LABELS */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="mt-8 text-2xl font-extrabold text-gray-900">
                  WRITING
                  </h1>
                  <button onClick={()=>navigate("/testprep/sat/practice")}
                            className="bg-gray-600 px-4 py-1 rounded-xl mt-4 text-white font-bold flex items-center cursor-pointer
                                      hover:bg-gray-900">
                    <BsPencilFill className="mr-2"/>
                    PRACTICE
                  </button>
                </div>
              </div>


              {/* DOUGHNUT CHART */}
              <div className="text-center flex flex-col justify-between">
                <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' style={{ borderRadius: '100%' }}>

                <clipPath id='hole'>
                  <path d='M 50 0 a 50 50 90 0 1 0 100 a 50 50 90 0 1 0 -100 v 10 a 2 2 90 0 0 0 81 a 2 2 90 0 0 0 -81' />
                </clipPath>

                <foreignObject x='0' y='0' width='100' height='100' clipPath='url(#hole)'>
                  
                  <div
                    xmlns='http://www.w3.org/1999/xhtml'
                    style={{
                      width: '100%',
                      height: '100%',
                      background: `conic-gradient(#4f545c ${315}deg, #C7C7C7 ${315}deg)`
                    }}
                  >

                  </div>
                </foreignObject> 
                
                <text className={`fill-gray-500 text-3xl font-extrabold`} x="50" y="50" dominantBaseline="middle" textAnchor="middle">
                  0
                </text>
                
                <text className={`fill-gray-500 text-xs font-semibold`} x="50" y="70" dominantBaseline="middle" textAnchor="middle">
                  No Rating
                </text>
                
                </svg>
                {/* LABELS */}
                <div className="flex flex-col items-center justify-center">
                  <h1 className="mt-8 text-2xl font-extrabold text-gray-900">
                  MATH
                  </h1>
                  <button onClick={()=>navigate("/testprep/sat/practice")}
                            className="bg-gray-600 px-4 py-1 rounded-xl mt-4 text-white font-bold flex items-center cursor-pointer
                                      hover:bg-gray-900">
                    <BsPencilFill className="mr-2"/>
                    PRACTICE
                  </button>
                </div>
              </div>







            </div>
          </div>
        </div>




        {/* REVIEW PAST PRACTICES AND LESSONS TO PRACTICE */}
        <div className="grid grid-flow-cols grid-cols-4 grid-row-auto-fr  mt-12">
          {/* REVIEW PAST PRACTICES */}
          <div className="flex flex-col justify-top h-full bg-gray-200 p-8 rounded-xl w-full" style={{"grid-area":"1/1/3/4"}}>
            <h1 className="text-gray-700 font-extrabold text-xl">Review Past Practices</h1>
            <div className="grid grid-flow-rows grid-cols-5 grid-rows-4">
              
              <h3 className="text-gray-800 font-extralight mt-4">Test Id</h3>
              <h3 className="text-gray-800 font-extralight mt-4">Date</h3>
              <h3 className="text-gray-800 font-extralight mt-4">Section</h3>
              <h3 className="text-gray-800 font-extralight mt-4">Score</h3>
              <h3 className="text-gray-800 font-extralight mt-4">Timed</h3>


              <h3 className="text-gray-600 font-extralight mt-4 text-sm">6hjk2341</h3>
              <h3 className="text-gray-600 font-extralight mt-4 text-sm">Jul 20 2023</h3>
              <h3 className="text-gray-600 font-extralight mt-4 text-sm">Reading</h3>
              <h3 className="text-gray-600 font-extralight mt-4 text-sm">48/52</h3>
              <h3 className="text-gray-600 font-extralight mt-4 text-sm">1:52 Left</h3>

            </div>
      
          </div>


          {/* LESSONS TO PRACTICE */}

          <div className="flex flex-col justify-center h-max bg-gray-700 py-8 rounded-xl ml-2">
            <h1 className="text-center text-gray-200 font-extrabold text-lg  whitespace-nowrap">Suggested Lessons</h1>
            <div className="grid-flow-row grid-cols-1 grid gap-4 auto-cols-fr">
              <div className="flex flex-col mt-4">
                <h1 className="text-center text-gray-300 font-extrabold text-md py-2">Reading</h1>
                <hr></hr>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">1. Reading Lesson 1</h2>
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">2. Reading Lesson 2</h2>
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">3. Reading Lesson 3</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-center text-gray-300 font-extrabold text-md py-2">Writing</h1>
                <hr></hr>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">1. Writing Lesson 1</h2>
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">2. Writing Lesson 2</h2>
                  <h2 className="text-gray-400 text-xs font-bold pt-2 cursor-pointer hover:text-gray-500">3. Writing Lesson 3</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-center text-gray-300 font-extrabold text-md py-2">Math</h1>
                <hr></hr>
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">1. Math Lesson 1</h2>
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">2. Math Lesson 2</h2>
                  <h2 className="text-gray-400 text-xs font-bold py-2 cursor-pointer hover:text-gray-500">3. Math Lesson 3</h2>
                </div>
              </div>
            </div>

          </div>



        </div>

        {/* REVIEW PAST TESTS */}
        <div className="  mt-12 flex flex-col justify-top h-full bg-gray-300 p-8 rounded-xl" style={{"grid-area":"1/1/3/4"}}>
          <h1 className="text-gray-700 font-extrabold text-xl">Review Past Full Tests</h1>
          <div className="grid grid-flow-rows grid-cols-3 grid-rows-4">
            
            <h3 className="text-gray-800 font-extralight mt-4">Practice Test</h3>
            <h3 className="text-gray-800 font-extralight mt-4">Date</h3>
            <h3 className="text-gray-800 font-extralight mt-4">Score</h3>


            <h3 className="text-gray-600 font-extralight mt-4 text-sm">2</h3>
            <h3 className="text-gray-600 font-extralight mt-4 text-sm">Jul 20 2023</h3>
            <h3 className="text-gray-600 font-extralight mt-4 text-sm">1550</h3>
          </div>
    
        </div>


        {/* DASHBOARD FOOTER */}
        <hr className="mt-16"></hr>
        <div className=" grid grid-flow-row grid-cols-4 justify-center h-max rounded-xl my-16">
          <h1 className="text-gray-600 font-extrabold text-3xl">PrepWhiz</h1>
          <div></div>

          <div className="flex flex-col">
          </div>

          <div className="flex flex-col">
            <h1 className="text-gray-600 font-extrabold text-xl text-right mb-4">Help</h1>
            <h1 className="text-gray-500 font-normal text-md text-right cursor-pointer hover:text-gray-800">Ask a Question</h1>
            <h1 className="text-gray-500 font-normal text-md text-right cursor-pointer hover:text-gray-800">Contact Us</h1>
          </div>




        </div>


      


      </div>
    );
}

export default Dashboard;
