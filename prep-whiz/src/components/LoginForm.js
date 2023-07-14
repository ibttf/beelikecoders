import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../config/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import "../styles/LoginForm.css";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleLogin=async(e)=> {
    e.preventDefault();
    setIsLoading(true);
    try{
      await signInWithEmailAndPassword(auth,email,password)
      .then(userCredential=>{
        localStorage.setItem('accessToken', userCredential.user.accessToken);
      })
      navigate("/")
      window.location.reload();
    }catch(err){
      setErrors([err])

    }
    setIsLoading(false);

  };

  return (
    <div className="login-form">
      <h1>Welcome back</h1>
      <h2>Welcome back! Please enter your details.</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          id="password"
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign In"}</button>

        <div className="errors">
          {errors ? (
            errors.map((err) => <div key={err}>Oops! {err}</div>)
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
