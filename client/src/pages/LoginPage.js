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
            opacity: ".5",
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
            opacity: ".6",
            fontSize: "65px",
          }}
        >
          YOUR
        </div>
        <div
          className="vibeWord"
          style={{
            fontFamily: "Titan One",
            color: "#ffffff",
            position: "absolute",
            top: "32%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "100px",
            textDecoration: "underline",
            opacity: ".75",
          }}
        >
          VIBE
        </div>
      </div>

      <Button
        onClick={() => loginWithRedirect()}
        style={{
          opacity: "0.9",
          transition: "0.3s",
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

      <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </div>
  );
};

export default Login;
