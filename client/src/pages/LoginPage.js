//Login.js
import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      username,
      password
    });


  };
  return (
    <div>
      <button>Login</button>
    </div>
  );
};

export default Login;