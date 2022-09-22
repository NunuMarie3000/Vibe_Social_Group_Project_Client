import React from 'react'
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import About from "../pages/About"
import DarkMode from "./DarkMode"
import "../Nav.css"

// const Header = ({logout}) => {
const Header = () => {
  return (
    <div class = "container">
    
    {/* <div class="toggle">
       <a href = '#'><i class="fa fa-bars"></i></a>
      </div>       */}
      <Router>
        <nav>
          <ul class = "flexnav">
          {/* <div class="menu"> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="*">Logout</Link>
            </li>
            {/* <li>
             <DarkMode/>
            </li> */}
            <li>
              {/* <button onClick = {logout}>Logout</button> */}
              {/* <button>Logout</button> */}
            </li>
          </ul>
          {/* </div> */}
        </nav>
        <Routes>
          {/* <Route exact path = "/" ></Route> */}
          <Route exact path = "/about" element = {<About/>} />
          {/* <Route exact path="/home" element={<HomePage />} /> */}
        </Routes>
      </Router>
     </div>
    
  )
}

export default Header