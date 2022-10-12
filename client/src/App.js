import React from "react";
import {useAuth0} from "@auth0/auth0-react"
import LoginPage from "./pages/LoginPage"
import BetweenAppAndEverything from "./components/BetweenAppAndEverything";
import LoadingPage from "./components/LoadingPage";


const App = () => {
  const { user, loginWithRedirect, logout, isLoading } = useAuth0()

  if(user){
    return(
      <>
        {isLoading ? <LoadingPage/> : <BetweenAppAndEverything user={user} logout={logout} isLoading={isLoading} />}
      </>
    )
  }else{
    return(<><LoginPage loginWithRedirect={loginWithRedirect} /></>)
  }
};

export default App;
