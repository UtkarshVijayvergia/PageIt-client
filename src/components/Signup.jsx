import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate() // later used in postData function


  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });


  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({ ...user, [name]: value })
  }


  const postData = async (e) => {
    e.preventDefault();  // to stop auto reloading of form
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault => READ ABOUT PREVENTDEFAULT() FUNCTION

    const { firstName, lastName, email, phone, password, confirmPassword } = user;
    //object destructuring---> no need to write user.email or user.phone instead write email or phone directly

    //now using fetch method;
    const response = await fetch("/register", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, lastName, email, phone, password, confirmPassword
      })
    });

    const data = await response.json();

    if(response.status === 422 || !data){
      window.alert("Email ID already registered");
      // console.log("invalid Data");
    }

    else{
      window.alert("User Registered Succesfully");
      console.log("User Registered Succesfully");

      navigate("/login")
      // using useNavigate hook
    }

    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    // ----------------------------------------------- CLIENT WALE PAKAGE.JSON FILE MAI ADD PROXY VARNA CORS ERROR DIKHAEGA-----------------------------------------------//
    // -------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  }


  return (
    <>
      <Navbar />

      <center>
        <br />
        <div className="container"><h3><u>SIGNUP</u></h3>
          <br /><br />
          <form method="POST">

            First Name:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name='firstName' id='firstName' placeholder='First Name'
              value={user.firstName} onChange={inputHandler} />

            <br /><br />


            Last Name:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name='lastName' id='lastName' placeholder='Last Name'
              value={user.lastName} onChange={inputHandler} />

            <br /><br />


            Email ID:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name='email' id='email' placeholder='Email ID'
              value={user.email} onChange={inputHandler} />

            <br /><br />


            Phone Number:
            &nbsp;&nbsp;&nbsp;
            <input type="text" name='phone' id='phone' placeholder='Phone Number'
              value={user.phone} onChange={inputHandler} />

            <br /><br />


            Password:
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name='password' id='password' placeholder='Password'
              value={user.password} onChange={inputHandler} />

            <br /><br />


            Confirm Password:
            <input type="text" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password'
              value={user.confirmPassword} onChange={inputHandler} />

            <br /><br />
            <br /><br />



            <Link to="/login">I am already a Registered User</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <button className='btn btn-success' name='signup' id='signup' value="Register"
              onClick={postData}>Register</button>

          </form>
          
        </div>
      </center>
    </>
  )
}



export default Signup