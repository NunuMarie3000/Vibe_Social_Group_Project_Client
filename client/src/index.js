import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Nav.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain = {process.env.REACT_APP_DOMAIN}
    clientId = {process.env.REACT_APP_CLIENTID}
    redirectUri = {window.location.origin}>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        {/* <Route exact path="/about" element={<About />} /> */}
        {/* <Route exact path="/home" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>

    </Auth0Provider>
  </React.StrictMode>
);
