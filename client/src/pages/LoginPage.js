//Login.js
import React from "react";
import { Button } from "react-bootstrap";

const Login = ({ loginWithRedirect }) => {
  return (
    <div className="loginButton">
      <div
        className="loginWords"
        style={{
          display: "grid",
        }}
      >
        <div
          className="checkWord"
          style={{
            fontFamily: "Titan One",
            color: "#FFFFFF",
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "40px",
          }}
        >
          CHECK
        </div>
        <div
          className="yourWord"
          style={{
            fontFamily: "Titan One",
            color: "#ffffff",
            position: "absolute",
            top: "19%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            fontSize: "65px",
          }}
        >
          YOUR
        </div>
        <div
          className="vibeWord"
          style={{
            fontFamily: "Titan One",
            color: '#ffffff',
            position: "absolute",
            top: "32%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "100px",
            textDecoration:"underline"
          }}
        >
          VIBE
        </div>
      </div>

      <Button className = "realLoginButton"
        onClick={() => loginWithRedirect()}
        style={{
          backgroundColor: "transparent",
          border: "2px white solid",
          fontFamily: "Titan One",
          fontSize: "24px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
