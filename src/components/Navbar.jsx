import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> <img src={require(`../components/images/NavbarIcon.jpg`)} alt="PageIt" height={'25px'} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">           
                    </ul>

                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar