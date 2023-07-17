import { useState } from "react";
import {auth, googleProvider} from '../config/firebase'
import { signInWithPopup, signOut} from "firebase/auth";
import logo from "../styles/logo-no-background.png";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Login.css";
function Login() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  const loginWithGoogle=async()=>{
    try{
      const userCredential= await signInWithPopup(auth,googleProvider)
      localStorage.setItem('accessToken', userCredential.user.accessToken);
      navigate("/")
      window.location.reload();
    }catch(err){
    }
  }

  return (
    <div className="login">

      <div className="login-left">
      </div>
      <div className="login-right">
        <Link to="/">
          <img src={logo} className="login-img" alt="logo"></img>
        </Link>

        {showLogin ? (
          <>

            <LoginForm/>
            <div />
            <p className="small-text">
              Don't have an account? &nbsp;
              <button
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>

            <SignUpForm />
            <div />
            <p className="small-text">
              Already have an account? &nbsp;
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log In
              </button>
            </p>
          </>
        )}
        <div className="signin-divider">OR</div>
        <div className="google-btn-container">
          <div className="google-btn" onClick={loginWithGoogle}>
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google-logo"/>
            </div>
            <p className="btn-text">Sign in with Google</p>
          </div>
        </div>
        <button onClick={()=>console.log(auth?.currentUser?.email)}>get current user</button>
        <button onClick={()=>{signOut(auth); localStorage.clear()}}>Logout</button>
      </div>
      
    </div>
  );
}

export default Login;
