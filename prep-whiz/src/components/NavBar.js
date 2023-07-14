import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../styles/logo-no-background.png";
import "../styles/Navbar.css";
import config from "../baseUrl"
//bootstrap stuff
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ user }) {
  const history=useHistory();

  const handleLogout = async () => {
    localStorage.removeItem('accessToken');
    const response = await fetch(`${config.baseUrl}/users/logout`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.reload();
      history.push('/')
    }

  };
  
    if (user) {
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
              <Link to="/review" className="navbar-btn">Review</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/new"  className="navbar-btn">Submit</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/my-essays"  className="navbar-btn">My Essays</Link>
            </Nav.Link>
            <Nav.Link onClick={handleLogout}> 
              <Link to="/"  className="navbar-btn">Logout</Link>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
  } else{

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
           <Nav.Link >
             <Link to="/login" className="navbar-btn">Review</Link>
           </Nav.Link>
           <Nav.Link >
             <Link to="/login"  className="navbar-btn">Submit</Link>
           </Nav.Link>
           <Nav.Link >
             <Link to="/login"  className="navbar-btn">My Essays</Link>
           </Nav.Link>
           <Nav.Link> 
             <Link to="/login"  className="navbar-btn">Login</Link>
           </Nav.Link>
           
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   )
  }
  
}
 

export default NavBar;
