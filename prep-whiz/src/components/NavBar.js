import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../config/firebase'
import { signOut} from "firebase/auth";
import logo from "../styles/logo-no-background.png";
import "../styles/Navbar.css";
// import config from "../baseUrl"


function NavBar({ userId }) {
  const navigate=useNavigate();

  const handleLogout=async()=>{
    signOut(auth)
    localStorage.removeItem('accessToken');
    navigate("/")
    window.location.reload();
  }
  
  return (
       <div bg="light" expand="lg">
      <div>

        <div>
          <Link to="/">
            <img src={logo} className="top-page-img" alt="logo"></img>
          </Link>
        </div>
        <div aria-controls="basic-navbar-nav" />
        <div id="basic-navbar-nav">
          <div className="me-auto">
            <div>
              <Link to={userId ? "/review" : "/"} className="navbar-btn">Review</Link>
            </div>
            <div>
              <Link to={userId ? "/new" : "/"}  className="navbar-btn">Submit</Link>
            </div>
            <div>
              <Link to={userId ? "/my-essays" : "/"}  className="navbar-btn">My Essays</Link>
            </div>
            {userId ? 
            <div onClick={handleLogout}> 
              <Link to="/"  className="navbar-btn">Logout</Link>
            </div>
            :
            <div> 
              <Link to="/login"  className="navbar-btn">Login</Link>
            </div>
            }

            
          </div>
        </div>
      </div>
    </div>

  )  
}
 

export default NavBar;
