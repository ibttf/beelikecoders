import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NotFound from "../pages/NotFound";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About"
import Events from "./Events";
import Judges from "./Judges";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
function App() {


  useEffect(() => {
  }, []);



  return(
  <>
    <main className=" overflow-x-hidden max-w-screen bg-yellow-200">
    <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <div className="">
            <NavBar />
            <Hero />
            <About />
            <Events />
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
