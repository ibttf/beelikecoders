import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from '../config/firebase'
import { signOut} from "firebase/auth";
import logo from "../styles/logo-no-background.png";
import "../styles/Navbar.css";
import config from "../baseUrl"
//bootstrap stuff
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ userId }) {
  const navigate=useNavigate();

  const handleLogout=async()=>{
    signOut(auth)
    localStorage.removeItem('accessToken');
    navigate("/")
    window.location.reload();
  }
  
  return (
       <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="top-page-img"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={userId ? "/review" : "/"} className="navbar-btn">Review</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={userId ? "/new" : "/"}  className="navbar-btn">Submit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={userId ? "/my-essays" : "/"}  className="navbar-btn">My Essays</Link>
            </Nav.Link>
            {userId ? 
            <Nav.Link onClick={handleLogout}> 
              <Link to="/"  className="navbar-btn">Logout</Link>
            </Nav.Link>
            :
            <Nav.Link> 
              <Link to="/login"  className="navbar-btn">Login</Link>
            </Nav.Link>
            }

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )  
}
 

export default NavBar;
