import { useState } from "react";
import {auth, googleProvider} from '../config/firebase'
import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {BsGoogle} from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

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
  <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8 bg-gray-200">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 onClick={()=>navigate('/')} className="text-center cursor-pointer font-bold text-3xl text-gray-600" >PrepWhiz</h1>

      <hr className="bg-gray-500 h-1 my-4 rounded-xl"></hr>
    
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
        {showLogin ? 
        "Log In":
        "Create an Account"}
      </h2>
    </div>
    
    {showLogin ? 
      <div className="mt-5 border-gray-400 bg-gray-200 p-8 rounded-xl lg:w-4/12 md:7/12 w-10/12 mx-auto">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="h-12 pointer-events-none focus-within:text-xs mt-2  text-lg font-medium leading-6">
              <input className="peer pointer-events-auto bg-gray-200 block w-full py-1.5 font-normal text-gray-900 border-b-2 border-0 border-gray-500 focus:border-gray-900 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required /> 
              <label for="email" className="block text-gray-700 relative -top-7 peer-focus:-top-12 duration-300">Email address</label>  
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
            </div>
            <div className="h-12 pointer-events-none focus-within:text-xs mt-2  text-lg font-medium leading-6">
              <input onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required className="h-full peer pointer-events-auto bg-gray-200 block w-full py-1.5 font-normal text-gray-900 border-b-2 border-0 border-gray-500 focus:border-gray-900 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                       />
              
              <label for="password" className="block text-gray-700 relative -top-7  peer-focus:-top-12 duration-300">Password</label>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            {errors.map((err)=>{
              <div className="text-red-600 py-4">{err}</div>
            })}
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">{isLoading? "Loading..." : "Sign in"}</button>
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
      <div className="mt-5  border-gray-400 bg-gray-200 p-8 rounded-xl lg:w-4/12 md:7/12 w-10/12 mx-auto">
        <form onSubmit={handleSignup} className="space-y-6 ">
        <div>
            <div className="h-12 pointer-events-none focus-within:text-xs mt-2  text-lg font-medium leading-6">
              <input className="peer pointer-events-auto bg-gray-200 block w-full py-1.5 font-normal text-gray-900 border-b-2 border-0 border-gray-500 focus:border-gray-900 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      onChange={(e)=>setEmail(e.target.value)} id="email" name="email" type="email" autocomplete="email" required /> 
              <label for="email" className="block text-gray-700 relative -top-7 peer-focus:-top-12 duration-300">Email address</label>  
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
            </div>
            <div className="h-12 pointer-events-none focus-within:text-xs mt-2  text-lg font-medium leading-6">
              <input onChange={(e)=>setPassword(e.target.value)} id="password" name="password" type="password" autocomplete="current-password" required className="h-full peer pointer-events-auto bg-gray-200 block w-full py-1.5 font-normal text-gray-900 border-b-2 border-0 border-gray-500 focus:border-gray-900 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                       />
              
              <label for="password" className="block text-gray-700 relative -top-7  peer-focus:-top-12 duration-300">Password</label>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
            </div>
            <div className="h-12 pointer-events-none focus-within:text-xs mt-2  text-lg font-medium leading-6">
              <input onChange={(e)=>setPassword(e.target.value)} id="confirmPassword" name="confirmPassword" type="password" autocomplete="current-password" required className="h-full peer pointer-events-auto bg-gray-200 block w-full py-1.5 font-normal text-gray-900 border-b-2 border-0 border-gray-500 focus:border-gray-900 focus:ring-0 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                       />
              
              <label for="confirmPassword" className="block text-gray-700 relative -top-7 peer-focus:-top-12 duration-300">Confirm Password</label>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            {errors.map((err)=>{
              <div className="text-red-600 py-4">{err}</div>
            })}
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">{isLoading? "Loading..." : "Create Account"}</button>
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
        <a href="#" onClick={()=>setShowLogin(!showLogin)}className="font-semibold leading-6 text-gray-600 hover:text-gray-500"> Sign up here.</a>
      </>:
      <>
        Already have an account? 
        <a href="#" onClick={()=>setShowLogin(!showLogin)} className="font-semibold leading-6 text-gray-600 hover:text-gray-500"> Sign in here.</a>
      </>}

      </p>
  </div>
  )
}

export default Login;
