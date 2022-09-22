//Login.js
import React from "react";

const Login = ({loginWithRedirect}) => {
  return (
    <div>
      <button onClick = {()=> loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;