import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Everything from "./Everything"
import LoadingPage from '../components/LoadingPage';

export default function BetweenAppAndEverything({ logout, user }) {

  const [allMemories, setAllMemories] = useState('')
  const [userId, setUserId] = useState('')
  const [allUsers, setAllUsers] = useState('')
  // create loading hook
  const [areWeLoading, setAreWeLoading] = useState(false);
  //for profile component

  const getMemories = async () => {
    const userAPI = `${process.env.REACT_APP_APIURL}/memories`;
    try {
      let res = await axios.get(userAPI);
      setAllMemories(res.data)
      getEmailsOfOtherUsers()
    } catch (error) {
      console.log(error)
    }
  }

  const getEmailsOfOtherUsers = async () => {
    const userAPI = `https://memories-socialmedia-group.herokuapp.com/users`
    try {
      await axios.get(userAPI).then(res => setAllUsers(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  const getIdFromDb = async () => {
    setAreWeLoading(true);
    const email = user.email
    const url = `https://memories-socialmedia-group.herokuapp.com/useremail/${email}`
    try {
      const response = await axios.get(url)
      if (response.data.user === null || response.data.user === '' || response.data.user === undefined) {
        createNewUsersId()
      } else {
        setUserId(response.data.user._id)
      }
    } catch (error) {
      console.log(error)
    }
    getMemories()
    setAreWeLoading(false);
  }

  const createNewUsersId = async () => {
    const url = `https://memories-socialmedia-group.herokuapp.com/newuser`
    const body = {
      email: user.email
    }
    try {
      const response = await axios.post(url, body)
      setUserId(response.data._id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIdFromDb()
    //eslint-disable-next-line
  }, [])

  if(areWeLoading)
  {
    return(
      <LoadingPage/>
    )
  }
  else
  {
    return(
        <>
            <div className = "mainLogo">VIBE</div>
            {allMemories !== '' && userId !== '' && allUsers !== '' && <Header getMemories={getMemories} allUsers={allUsers} user={user} logout={logout} allMemories={allMemories} userId={userId} />}
            {allMemories !== '' && userId !== '' && allUsers !== '' && <Everything allUsers={allUsers} user={user} userInfoFromAuth={user} allMemories={allMemories} getMemories={getMemories} userId={userId} />}
        </>
      )
  }
}
