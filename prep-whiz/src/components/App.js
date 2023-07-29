import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import About from "../pages/About";
import Footer from "./Footer";
import Loading from "../pages/Loading"
import EditProfile from "../pages/EditProfile";
import NotFound from "../pages/NotFound";
import Tutoring from "../pages/Tutoring";

// SAT PREP
import Sidebar from "../sat-prep/components/Sidebar"
import Dashboard from "../sat-prep/pages/Dashboard"
import Practice from "../sat-prep/pages/Practice/Practice";
  // SAT PREP LEARN
  import Learn from "../sat-prep/pages/Learn/Learn";
import Video from "../sat-prep/pages/Learn/LearnVideo";
import LearnPracticeTopBar from "../sat-prep/pages/Learn/LearnPracticeTopBar";

    //SAT LEARN MATH
import LearnSubject from "../sat-prep/pages/Learn/LearnSubject";
import LearnMathPractice from "../sat-prep/pages/Learn/LearnMath/LearnMathPractice";

    //SAT LEARN READING
import LearnReadingPractice from "../sat-prep/pages/Learn/LearnReading/LearnReadingPractice";

    //SAT LEARN WRITING=
import LearnWritingPractice from "../sat-prep/pages/Learn/LearnWriting/LearnWritingPractice";




import "../styles/App.css";
import config from "../baseUrl"
function App() {
  const [user,setUser]=useState(null)
  const [isLoading,setIsLoading]=useState(true);
  const [isExpanded,setIsExpanded]=useState(false);
  const[open,setOpen]=useState(false);


  useEffect(() => {
    setIsLoading(true);
    checkLoginStatus();
  }, []);


  const checkLoginStatus = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/users/current`, {
        headers: { 'Content-Type': 'application/json', 
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    }catch(err){
      setUser(null);
    }
    setIsLoading(false);
  };

  if (isLoading){
    return <Loading />
  }
  if(!user){
    return(
    <>
      <main>
      <Routes>

          {/* AUTH */}
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />

          {/* TUTORING PAGE */}
          <Route path="/tutoring" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen}/>
              <Tutoring />
              <Footer />
            </>
          } />
          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen} />
              <About />
              <Footer />
            </>
          } />
          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen} />
              <Footer />
            </>
          } />

          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen}/>
              <Home user={user} open={open}/>
              <Footer />
            </>
          } />

          {/* NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>)
  }
  return (
    <>
      <main className="overflow-x-hidden">
        <Routes>
      {/* PRACTICE ROUTES */}
        <Route path="/testprep/sat/practice" element={
          <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <Practice isExpanded={isExpanded}/>
          </>
          } />

    {/* LEARN ROUTES */}
          {/* PRACTICE ROUTES */}

          <Route path="/testprep/sat/learn/reading/practice/:lesson" element={
          <>
            <LearnPracticeTopBar subject={"reading"}/>
            <LearnReadingPractice />
          </>
          } />
          <Route path="/testprep/sat/learn/writing/practice/:lesson" element={
          <>
            <LearnPracticeTopBar subject={"writing"}/>
            <LearnWritingPractice />
          </>
          } />
          <Route path="/testprep/sat/learn/math/practice/:lesson" element={
          <>
            <LearnPracticeTopBar subject={"math"}/>
            <LearnMathPractice />
          </>
          } />
          {/* VIDEO ROUTES */}
          <Route path="/testprep/sat/learn/:subject/video/:lesson" element={
          <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <Video isExpanded={isExpanded}/>
          </>
          } />
        {/* BASE ROUTES */}
          <Route path="/testprep/sat/learn/:subject" element={
          <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <LearnSubject isExpanded={isExpanded}/>
          </>
          } />
        <Route path="/testprep/sat/learn" element={
          <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <Learn isExpanded={isExpanded}/>
          </>
          } />

          {/* DASHBOARD */}
        <Route path="/testprep/sat" element={
          <>
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            <Dashboard isExpanded={isExpanded}/>
          </>
          } />


          {/* EDIT PROFILE */}
          <Route path="/edit-profile" element={
            <>
              <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
              <EditProfile user={user}/>
            </>
          } />

          {/* AUTH */}
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />

          {/* TUTORING PAGE */}
          <Route path="/tutoring" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen} />
              <Tutoring />
              <Footer />
            </>
          } />
          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen} />
              <About />
              <Footer />
            </>
          } />
          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen} />
              <Footer />
            </>
          } />

          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <NavBar user={user} open={open} setOpen={setOpen}/>
              <Home user={user} open={open}/>
              <Footer />
            </>
          } />
          {/* NOT FOUND */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
    </>
  );
}


export default App;
