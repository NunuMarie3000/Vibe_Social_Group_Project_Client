import App from "./App";
import { useAuth0 } from "@auth0/auth0-react"
import LoginPage from "./pages/LoginPage"

import React from 'react'

export default function Auth() {
  const { user, loginWithRedirect, logout, isLoading } = useAuth0()
  if (!user) {
    return (
      <LoginPage />
    )
  } else {
    return (
      <App user={user} logout={logout} isLoading={isLoading} loginWithRedirect={loginWithRedirect} />
    )
  }
}
