import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard";
import Postdata from "./components/Postdata";



function App() {
  return (
    <div>


      <Router>
          
            <Routes>

              <Route exact path="/" element = {<Home/>}>
              </Route>

              <Route exact path="/dashboard" element = {<Dashboard/>}>
              </Route>

              <Route exact path="/about" element = {<About />} >
              </Route>

              <Route exact path="/contact" element = {<Contact />} >
              </Route>

              <Route exact path="/login" element = {<Login />} >
              </Route>

              <Route exact path="/signup" element = {<Signup />} >
              </Route> 

              <Route exact path="/postdata" element = {<Postdata />} >
              </Route> 




              <Route path="*" element={<ErrorPage/>} >
              </Route>

            </Routes>

        </Router>


      
    </div>
  );
}

export default App;
