import { useState } from "react";
import {auth, googleProvider} from '../config/firebase'
import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import logo from "../styles/logo-no-background.png";
import {BsGoogle} from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

import "../styles/Login.css";
function Login() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle=async()=>{
    try{
      const userCredential= await signInWithPopup(auth,googleProvider)
      localStorage.setItem('accessToken', userCredential.user.accessToken);
      navigate("/")
      window.location.reload();
    }catch(err){
    }
  }

  const handleLogin=async(e)=> {
    e.preventDefault();
    console.log(email,password)
    setIsLoading(true);
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      localStorage.setItem('accessToken', userCredential.user.accessToken);
      navigate("/")
      window.location.reload();
    }catch(err){
      setErrors(["Invalid username or password."])

    }
    setIsLoading(false);

  };

  function handleSignup(e){
    e.preventDefault();
    setIsLoading(true);
    if (password!==passwordConfirmation){
      setErrors(["Password does not match"])
      setIsLoading(false);
      return;
    }
    try{
      createUserWithEmailAndPassword(auth,email,password)
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

  return(
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img onClick={()=>navigate('/')} className="mx-auto h-10 w-auto cursor-pointer" src={logo} alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
        {showLogin ? 
        "Welcome Back":
        "Create an Account"}
      </h2>
    </div>
    
    {showLogin ? 
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-400 bg-white p-8 rounded-xl">
        <form onSubmit={handleLogin} className="space-y-6 ">
          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            {errors.map((err)=>{
              <div className="text-red-600 py-4">{err}</div>
            })}
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading? "Loading..." : "Sign in"}</button>
          </div>
        </form>

        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-700 font-thin text-sm">Or continue with</span>
        <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="px-6 sm:px-0 max-w-sm">
              <button type="button" className="whitespace-nowrap text-white w-full  text-sm bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <BsGoogle onClick={loginWithGoogle} />
                Google<div></div></button>
          </div>
          <div className="px-6 sm:px-0 max-w-sm">
            <button type="button" className="whitespace-nowrap text-white w-full  text-sm bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <BsGoogle onClick={loginWithGoogle} />
              Google<div></div></button>
          </div>
        </div>
      </div>:
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border border-gray-400 bg-white p-8 rounded-xl">
        <form onSubmit={handleSignup} className="space-y-6 ">
          <div>
            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            </div>
            <div className="mt-2">
              <input onChange={(e)=>setPasswordConfirmation(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            {errors.map((err)=>{
              <div className="text-red-600 py-4">{err}</div>
            })}
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading? "Loading..." : "Create Account"}</button>
          </div>
        </form>
  
        <div class="relative flex py-5 items-center">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-700 font-thin text-sm">Or continue with</span>
        <div class="flex-grow border-t border-gray-400"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="px-6 sm:px-0 max-w-sm">
              <button type="button" className="whitespace-nowrap text-white w-full  text-sm bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <BsGoogle onClick={loginWithGoogle} />
                Google<div></div></button>
          </div>
          <div className="px-6 sm:px-0 max-w-sm">
            <button type="button" className="whitespace-nowrap text-white w-full  text-sm bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
              <BsGoogle onClick={loginWithGoogle} />
              Google<div></div></button>
          </div>
        </div>
      </div>}
      <button onClick={()=>console.log(auth?.currentUser?.email)}>get current user</button>
      <button onClick={()=>{signOut(auth); localStorage.clear()}}>Logout</button>

    <p className="mt-10 text-center text-sm text-gray-500">
      {showLogin?
      <>
        Don't have an account? 
        <a href="#" onClick={()=>setShowLogin(!showLogin)}className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign up here.</a>
      </>:
      <>
        Already have an account? 
        <a href="#" onClick={()=>setShowLogin(!showLogin)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign in here.</a>
      </>}

      </p>
  </div>
  )
}

export default Login;
