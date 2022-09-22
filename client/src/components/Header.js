import React from 'react'
import { Button } from 'react-bootstrap'
// import HomePage from "./pages/HomePage";
// import About from "./pages/About"
import { Link } from 'react-router-dom'
import Profile from './Profile'


const Header = ({ logout, allMemories, userId }) => {
  return (
    // <div>
    //   <Router>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           {/* <button onClick = {logout}>Logout</button> */}
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       {/* <Route exact path = "/" ></Route> */}
    //       {/* <Route exact path = "/about" element = {<About/>} /> */}
    //       {/* <Route exact path="/home" element={<HomePage />} /> */}
    //     </Routes>
    //   </Router>
    // </div>
    <>
      <nav>
        <Link to='/'>Home</Link> | {' '}
        {/* <Link to='/about'>About</Link> | {' '} */}
        <Profile allMemories={allMemories} userId={userId} />
        <Button onClick = {logout}>Logout</Button>
      </nav>
    </>
  )
}

export default Header