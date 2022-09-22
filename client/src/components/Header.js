import React from "react";
import { Button } from "react-bootstrap";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About"
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Header = ({ logout, allMemories, userId, user }) => {
  return (
    // <div className = "container">
    //   <Router>
    //     <nav>
    //       <ul className = "flexnav">
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
          <ul className="flexnav">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            {/* <Link to='/about'>About</Link> | {' '} */}
            <li>
              <Profile user={user} allMemories={allMemories} userId={userId} />
            </li>
            <li>
              <Button
                onClick={logout}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "#FFFFFF",
                  color: "#29E7CD",
                  fontFamily: "Manrope",
                  textTransform: "uppercase",
                  paddingTop: "10px",
                  cursor: "pointer"
                }}
              >
                Logout
              </Button>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Header;
