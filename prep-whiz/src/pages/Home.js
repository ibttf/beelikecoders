import React from "react";
import { Link } from "react-router-dom";
import hero from "../styles/hero.png";
import squiggle from "../styles/red-squiggle.png";

import "../styles/Home.css";
const Home = ({ user }) => {
  if (user) {
    return (
      <div className="home">
        <div className="home-left">
          <h4>LET'S WRITE THE BEST ESSAY EVER</h4>
          <h2>Every Essay Can Use a Little Hepl
              <img src={squiggle} className="squiggle"></img>
          </h2>
        
          <h3>Get Your Essay Reviewed Today</h3>
          <div className="home-btns">
            <Link to="/review">
              <button className="home-btn review-btn">Review Essays</button>
            </Link>
            <Link to="/my-essays">
              <button className="home-btn my-essays-btn">See My Essays</button>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <div className="hero-blob"></div>
          <div className="hero-img-container">
            <img src={hero}></img>
          </div>
        </div>
      </div>
    );
  }

  return (
      <div className="home">
        <div className="home-left">
          <h4>LET'S WRITE THE BEST ESSAY EVER</h4>
          <h2>Every Essay Can Use a Little Hepl
              <img src={squiggle} className="squiggle"></img>
          </h2>
        
          <h3>Get Your Essay Reviewed Today</h3>
          <div className="home-btns">
            <Link to="/login">
              <button className="home-btn review-btn">Review Essays</button>
            </Link>
            <Link to="/login">
              <button className="home-btn my-essays-btn">See My Essays</button>
            </Link>
          </div>
        </div>
        <div className="home-right">
          <div className="hero-blob"></div>
          <div className="hero-img-container">
            <img src={hero}></img>
          </div>
        </div>
      </div>
    );
};

export default Home;
