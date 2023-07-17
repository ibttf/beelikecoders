import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { BsFillLightningFill} from 'react-icons/bs';
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
        <div className="ml-60 mt-24 flex justify-between">
                <h1 className="font-extrabold text-5xl text-gray-700 w-full">Welcome back, {user.email}</h1>
                <Link to="/testprep/sat/learn" className="w-full flex justify-end px-72">
                    <div className={`relative flex items-center 
                            h-12 w-36 mt-2 mb-2  
                            ml-2
                            bg-gray-600 hover:bg-black
                            text-white
                            rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg  group justify-center p-2`}>
                    <BsFillLightningFill size="32" /> <h1 className='text-2xl font-extrabold ml-2'>Learn</h1>
                    </div>
                </Link>
            <div>
                
            </div>

        </div>
    );
}

export default Dashboard;
