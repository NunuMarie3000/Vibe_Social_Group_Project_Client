import React from "react";
import { Button } from "react-bootstrap";
// import HomePage from "./pages/HomePage";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Header = ({ logout, allMemories, userId, user }) => {
  return (
    <>
      <nav>
        <ul className="flexnav">
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <Link
            to="/about"
            style={{
              backgroundColor: "#FFFFFF",
              border: "#FFFFFF",
              color: "#29E7CD",
              fontFamily: "Manrope",
              textTransform: "uppercase",
              paddingTop: "17px",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            About
          </Link>

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
                cursor: "pointer",
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
