import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Loading from "../pages/Loading"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/App.css";
import config from "../baseUrl"
function App() {
  const [user, setUser] = useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const history=useHistory();
  useEffect(() => {
    setIsLoading(true);
    // auto-login
    checkLoginStatus();

  }, []);


  const checkLoginStatus = async () => {
    // try {
    //   const response = await fetch(`${config.baseUrl}/users/current`, {
    //     headers: { 'Content-Type': 'application/json', 
    //                 Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     setUser(data);
    //   }
    // }catch(err){
      
    // }
    setIsLoading(false);
  };

  if (isLoading){
    return <Loading />
  }
  if (!user){
    return (
      <>
        <main >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <NavBar user={user} />
              <Home user={user} />
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
