import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Loading from "../pages/Loading"
import EditProfile from "../pages/EditProfile";
// SAT PREP STUFF
import Sidebar from "../sat-prep/components/Sidebar"
import Dashboard from "../sat-prep/pages/Dashboard"
import Learn from "../sat-prep/pages/Learn/Learn";
import Practice from "../sat-prep/pages/Practice/Practice";

// SAT PREP LEARN
import LearnMath from "../sat-prep/pages/Learn/LearnMath";
import LearnReading from "../sat-prep/pages/Learn/LearnReading";
import LearnWriting from "../sat-prep/pages/Learn/LearnWriting";


import "../styles/App.css";
import config from "../baseUrl"
function App() {
  const [userId, setUserId] = useState("");
  const [user,setUser]=useState({})
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
        setUserId(data.uid);
        setUser(data);
      }
    }catch(err){
      console.log(err);
    }
    setIsLoading(false);
  };

  if (isLoading){
    return <Loading />
  }
  return (
    <>
      <main >
        <Routes>
        <Route path="/testprep/:name/practice" element={
          <>
            <Sidebar />
            <Practice />
          </>
          } />
          <Route path="/testprep/:name/learn/reading" element={
          <>
            <Sidebar />
            <LearnReading />
          </>
          } />
          <Route path="/testprep/:name/learn/writing" element={
          <>
            <Sidebar />
            <LearnWriting />
          </>
          } />
          <Route path="/testprep/:name/learn/math" element={
          <>
            <Sidebar />
            <LearnMath />
          </>
          } />
        <Route path="/testprep/:name/learn" element={
          <>
            <Sidebar />
            <Learn />
          </>
          } />
        <Route path="/testprep/:name" element={
          <>
            <Sidebar />
            <Dashboard />
          </>
          } />
          <Route path="/edit-profile" element={
            <>
              <Sidebar />
              <EditProfile user={user}/>
            </>
          } />
          <Route path="/login" element={
            <Login />
          } />

          <Route path="/" element={
            <>
              <NavBar userId={userId} />
              <Home userId={userId} />
            </>
          } />

        </Routes>
      </main>
    </>
  );
}


export default App;
