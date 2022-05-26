import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
    
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react' // for storing the incoming data of the user after verification

const Dashboard = () => {

    const navigate = useNavigate(); // later used in dashboardVerify function
    const [userData, setUserData] = useState({}); // for storing the incoming data of the user after verification to render this data on web page


    const dashboardVerify = async () => {
        try{
            const res = await fetch('/dashboard', {
                method:"GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            if(res.status === 200){
                console.log(12);
                const data = await res.json();
                setUserData(data);  // for storing the incoming data of the user after verification to render this data on web page
                console.log(13);

                if(!res.status === 200){
                    console.log(14);
                    const error = new Error(res.error)
                    throw error;
                }
            }
            
            else{
                console.log(res);
                console.log(15);
                const error = new Error("Error is: " , res.error)
                throw error;
            }
            console.log(16);
        }

        catch(err){
            console.log(17);
            console.log(err);
            navigate("/about")
            // using useNavigate hook
        }
    }


    useEffect(() => {
        dashboardVerify();
        // we cant use async inside useEffect hook so using a function but then it will show a warning and to remove that warning use the line below at the end of the code 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    

  return (
    <>
        <Navbar/>

        <center><br /><br />
            <div className="container">
                <form method='GET'>
                    <h3><u>Dashboard</u></h3>
                    <br /><br /><br />
                    <p>Welcome { userData.firstName } { userData.lastName } <br /> Your email id is: { userData.email } </p>    
                </form>
            </div>
            <br /><br />
                <Link to="/postdata" className='btn btn-success'>Post Data to Database</Link>
        </center>
    </>
  )
}

export default Dashboard