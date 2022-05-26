import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate() // later used in loginVerify function

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const loginVerify = async (e) => {
        e.preventDefault();
        // const { email,password } = user;
        const res = await fetch('/login', {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
              })
        });

        const data = await res.json();

        if(res.status === 400 || !data ){
            window.alert("Invalid Credentials");
            // console.log("invalid Credentials");
        }
      
        else{
            window.alert("User logged in Succesfully");
            // console.log("User logged in Succesfully");
            
            navigate("/dashboard")
            // using useNavigate hook
        }
    }



  return (
    <>
        <Navbar/>

        <center>
            <br />
            <div className="container"><h3><u>LOGIN TO PAGEIT</u></h3></div>
            <br /><br />
            <form method="POST">

                Email ID: 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type="text" name='email' id='email' autoComplete='off' placeholder='Email ID'
                value={email} onChange={ (e) => setEmail(e.target.value) }/>
                
                <br /><br />


                Password: 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                <input type="text" name='password' id='password' autoComplete='off' placeholder='Password'
                value={password} onChange={ (e) => setPassword(e.target.value) }/>
                
                <br /><br />
                <br /><br />


                <input className='btn btn-success' type="submit" name='signup' id='signup' value="Login"
                onClick={ loginVerify }/>

            </form>
        </center>
    </>
  )
}

export default Login