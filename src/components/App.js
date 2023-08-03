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
    <main className="bg-blue-100">
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
          <>
            <NavBar />
            <Home/>
            <Footer />
          </>
        } />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </>)
  
}


export default App;
