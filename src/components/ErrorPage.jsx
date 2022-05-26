import React from 'react'
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <>
      <center><br /><br />
        <div className="container">
          <h2>PAGE NOT FOUND</h2>
          <p>The page yoy are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <br /><br />
          <Link to="/" className='btn btn-danger'>Back to Home Page</Link>
        </div>
      </center>
    </>
  )
}

export default ErrorPage