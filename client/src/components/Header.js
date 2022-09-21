import React from 'react'
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About"


const Header = ({logout}) => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              {/* <button onClick = {logout}>Logout</button> */}
            </li>
          </ul>
        </nav>
        <Routes>
          {/* <Route exact path = "/about" element = {<About/>} /> */}
          {/* <Route exact path="/home" element={<HomePage />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default Header