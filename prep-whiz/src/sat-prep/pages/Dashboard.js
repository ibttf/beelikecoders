import React, {useState,useEffect} from 'react';
import Loading from '../../pages/Loading';
import config from '../../baseUrl';
const Dashboard = () => {
    const [user ,setUser]=useState({})
    const [isLoading, setIsLoading]=useState(false);
    useEffect(()=>{
        const checkLoginStatus = async () => {
            try {
              const response = await fetch(`${config.baseUrl}/users/current`, {
                headers: { 'Content-Type': 'application/json', 
                            Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
              });
        
              if (response.ok) {
                const data = await response.json();
                console.log(data);
                setUser(data);
              }
            }catch(err){
              
            }
            setIsLoading(false);
          };
          checkLoginStatus()
    },[])
    if (isLoading) return (<Loading />)
    return (
        <div>
        </div>
    );
}

export default Dashboard;
