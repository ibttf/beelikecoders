import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Footer from "./Footer";
import Loading from "../pages/Loading"
import NotFound from "../pages/NotFound";




function App() {


  useEffect(() => {
  }, []);



  return(
  <>
    <main className="bg-yellow-100">
    <Routes>

        {/* CONTACT PAGE */}
        <Route path="/contact" element={
          <>
            <NavBar/>
            <Footer />
          </>
        } />

        {/* HOME PAGE */}
        <Route path="/" element={
          <div className="max-w-screen overflow-x-hidden">
            <NavBar />
            <Home/>
            <Footer />
          </div>
        } />

        {/* NOT FOUND */}
        <Route path="*" element={
        <>
          <NavBar />
          <NotFound/>
          <Footer />
        </>} />
      </Routes>
    </main>
  </>)
  
}


export default App;
