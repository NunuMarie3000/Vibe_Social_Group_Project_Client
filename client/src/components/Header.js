import React from "react";
import { Button } from "react-bootstrap";
// import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import OtherUsers from "./OtherUsers";

const Header = ({ logout, allMemories, userId, user, getMemories, allUsers }) => {
  return (
    <>

      <nav>
        <ul className="flexnav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">&nbsp;&nbsp;&nbsp;About</Link>
          </li>
          <li>
            <Profile allUsers={allUsers} getMemories={getMemories} user={user} allMemories={allMemories} userId={userId} />
          </li>
          <li>
            <OtherUsers allUsers={allUsers} getMemories={getMemories} allMemories={allMemories} />
          </li>
          <li>
            <Button onClick={logout}>Logout</Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
