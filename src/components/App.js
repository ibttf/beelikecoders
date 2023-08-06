import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";




function App() {


  useEffect(() => {
  }, []);



  return(
  <>
    <main className="bg-yellow-100 overflow-x-hidden max-w-screen">
    <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <div className="">
            <NavBar />
            <Home/>
          </div>
        } />

        {/* NOT FOUND */}
        <Route path="*" element={
        <>
          <NavBar />
          <NotFound/>
        </>} />
      </Routes>
    </main>
  </>)
  
}


export default App;
