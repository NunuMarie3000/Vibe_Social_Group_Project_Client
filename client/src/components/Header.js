import React from 'react'
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About"


const Header = () => {
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
          </ul>
        </nav>
        <Routes>
          <Route exact path = "/about" element = {<About/>} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Header