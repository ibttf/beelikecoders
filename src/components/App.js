import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About"
import Schedule from "./Schedule";
import Judges from "./Judges";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
function App() {


  useEffect(() => {
  }, []);



  return(
  <>
    <main className="bg-blue-100 overflow-x-hidden max-w-screen">
    <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <div className="">
            <NavBar />
            <Hero />
            <About />
            <Schedule />
            <Judges />
            <Sponsors />
            <FAQ />
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
