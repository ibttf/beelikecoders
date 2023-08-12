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
  <main className=" bg-green-50" >
  <Routes>

      {/* HOME PAGE */}
      <Route path="*" element={
        <div>
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

    </Routes>
  </main>
  )
  
}


export default App;
