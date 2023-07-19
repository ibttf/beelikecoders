import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import config from "../baseUrl";
function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup=async(e)=> {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    if (password!==passwordConfirmation){
      setErrors(["Password does not match"])
      setIsLoading(false);
      return;
    }
    try{
      await createUserWithEmailAndPassword(auth,email,password)
      .then(userCredential=>{
        localStorage.setItem('accessToken', userCredential.user.accessToken);
        navigate("/");
        window.location.reload();
      })
    }catch(err){
      setErrors([err])

    }
    setIsLoading(false);
  };


  return (
    <div className="login-form">
      <h1>Create Account</h1>
      <h2>Please enter your details to make an account.</h2>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />

        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>

        <div className="errors">
          {errors.map((err) => (
            <div key={err}>Oops! {err}</div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
