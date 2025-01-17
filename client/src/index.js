import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Nav.css"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from './pages/About';
import Login from "./pages/LoginPage";

import { Auth0Provider } from "@auth0/auth0-react";

// test
import OtherUser from "./components/OtherUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={process.env.REACT_APP_REDIRECT}>

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/home" element={<App/>}></Route>

        <Route exact path="/:email/user/:userIdParams" element={<OtherUser />} />

        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>

    </Auth0Provider>
  </React.StrictMode>
);
