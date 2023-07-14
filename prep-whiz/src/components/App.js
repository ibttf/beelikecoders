import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Loading from "../pages/Loading"
import "../styles/App.css";
import config from "../baseUrl"
function App() {
  const [userId, setUserId] = useState("");
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
      }
    }catch(err){
      
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
