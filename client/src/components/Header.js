import React from "react";
import { Button } from "react-bootstrap";
// import HomePage from "./pages/HomePage";
// import About from "./pages/About"
import { Link } from "react-router-dom";
import Profile from "./Profile";
import OtherUsers from "./OtherUsers";

const Header = ({ logout, allMemories, userId, user, getMemories, allUsers }) => {
  return (
    <>
        <nav>
          <ul className="flexnav">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            {/* <Link to='/about'>About</Link> | {' '} */}
            <li>
              <Profile allUsers={allUsers} getMemories={getMemories} user={user} allMemories={allMemories} userId={userId} />
            </li>
            <li>
              <OtherUsers allUsers={allUsers} getMemories={getMemories} allMemories={allMemories} />
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
