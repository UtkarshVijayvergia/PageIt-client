import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';


const Home = () => {
  return (
    <>
        <Navbar/>

        <center><br /><br />
            <div className="container">
                <h3><u>Welcome To PAGEIT</u></h3>
                <br /><br />
                <Link to="/login" className='btn btn-success'>Login</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/signup" className='btn btn-success'>SignUp</Link>
            </div>
        </center>
    </>
  )
}

export default Home