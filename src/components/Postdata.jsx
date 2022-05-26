import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Postdata = () => {

    const [userData, setUserData] = useState({message:""}); 

    // handling inputs
    const inputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
    
        setUserData({...userData, [name]:value})
    } 

    // send data to backend
    const dataSender = async (e) => {
        e.preventDefault();

        const message = userData;

        const res = await fetch('/postdata', {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message
            })
        });

        const data = await res.json();

        if(!data){
            console.log("message not sent");
        }
        else{
            alert("message sent");
            setUserData({...userData, message:""})   // to make the message as empty in textarea input field after sending message;
        }
    }
    

    return (
        <div>
            <center>
                <br /><br />
                <h3>POST DATA TO DATABASE</h3>
                <br /><br />
                <form method='POST'>

                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'
                    value={userData.message} onChange={inputHandler}></textarea>  
                    <br />  
                    
                    <input className='btn btn-success' type="submit" name='sendData' id='sendData' value="Submit"
                    onClick={ dataSender }/>

                </form>

                <br /><br />
                <Link to="/dashboard" className='btn btn-success'>Back To Dashboard</Link>
            </center>
        </div>
    )
}

export default Postdata