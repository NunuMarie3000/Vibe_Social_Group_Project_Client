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
    domain = "nunumarie3000.us.auth0.com"
    clientId = "2KsqG4VJrsZHSuc2gcn4njqdEtN2o3wC"
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
