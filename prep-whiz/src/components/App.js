import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Footer from "./Footer";
import Loading from "../pages/Loading"
import EditProfile from "../pages/EditProfile";
// SAT PREP
import Sidebar from "../sat-prep/components/Sidebar"
import Dashboard from "../sat-prep/pages/Dashboard"
import Practice from "../sat-prep/pages/Practice/Practice";
  // SAT PREP LEARN
  import Learn from "../sat-prep/pages/Learn/Learn";
import Video from "../sat-prep/pages/Learn/LearnVideo";
import LearnPracticeTopBar from "../sat-prep/pages/Learn/LearnPracticeTopBar";

    //SAT LEARN MATH
import LearnMath from "../sat-prep/pages/Learn/LearnMath/LearnMath";
import LearnMathPractice from "../sat-prep/pages/Learn/LearnMath/LearnMathPractice";

    //SAT LEARN READING
import LearnReading from "../sat-prep/pages/Learn/LearnReading/LearnReading";

    //SAT LEARN WRITING
import LearnWriting from "../sat-prep/pages/Learn/LearnWriting/LearnWriting";





import "../styles/App.css";
import config from "../baseUrl"
function App() {
  const [user,setUser]=useState(null)
  const [isLoading,setIsLoading]=useState(true);
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
            <Login />
          } />

          {/* TUTORING PAGE */}
          <Route path="/tutoring" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />
          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />
          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />

          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <NavBar user={user} />
              <Home user={user} />
              <Footer />
            </>
          } />

        </Routes>
      </main>
    </>)
  }
  return (
    <>
      <main >
        <Routes>
      {/* PRACTICE ROUTES */}
        <Route path="/testprep/sat/practice" element={
          <>
            <Sidebar />
            <Practice />
          </>
          } />

    {/* LEARN ROUTES */}
          {/* PRACTICE ROUTES */}
          <Route path="/testprep/sat/learn/reading/practice/:lesson" element={
          <>
            <LearnPracticeTopBar />

          </>
          } />
          <Route path="/testprep/sat/learn/writing/practice/:lesson" element={
          <>
            <LearnPracticeTopBar />

          </> 
          } />
          <Route path="/testprep/sat/learn/:subject/practice/:topic/:lesson" element={
          <>
            <LearnPracticeTopBar />
            <LearnMathPractice />
          </>
          } />
          {/* VIDEO ROUTES */}
          <Route path="/testprep/sat/learn/reading/video/:lesson" element={
          <>
            <Sidebar />
            <Video />
          </>
          } />
          <Route path="/testprep/sat/learn/writing/video/:lesson" element={
          <>
            <Sidebar />
            <Video />
          </> 
          } />
          <Route path="/testprep/sat/learn/math/video/:lesson" element={
          <>
            <Sidebar />
            <Video />
          </>
          } />
        {/* BASE ROUTES */}
          <Route path="/testprep/sat/learn/reading" element={
          <>
            <Sidebar />
            <LearnReading />
          </>
          } />
          <Route path="/testprep/sat/learn/writing" element={
          <>
            <Sidebar />
            <LearnWriting />
          </>
          } />
          <Route path="/testprep/sat/learn/math" element={
          <>
            <Sidebar />
            <LearnMath />
          </>
          } />
        <Route path="/testprep/sat/learn" element={
          <>
            <Sidebar />
            <Learn />
          </>
          } />

          {/* DASHBOARD */}
        <Route path="/testprep/sat" element={
          <>
            <Sidebar />
            <Dashboard />
          </>
          } />


          {/* EDIT PROFILE */}
          <Route path="/edit-profile" element={
            <>
              <Sidebar />
              <EditProfile user={user}/>
            </>
          } />

          {/* AUTH */}
          <Route path="/login" element={
            <Login />
          } />

          {/* TUTORING PAGE */}
          <Route path="/tutoring" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />
          {/* ABOUT PAGE */}
          <Route path="/about" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />
          {/* CONTACT PAGE */}
          <Route path="/contact" element={
            <>
              <NavBar user={user} />
              <Footer />
            </>
          } />

          {/* HOME PAGE */}
          <Route path="/" element={
            <>
              <NavBar user={user} />
              <Home user={user} />
              <Footer />
            </>
          } />

        </Routes>
      </main>
    </>
  );
}


export default App;
