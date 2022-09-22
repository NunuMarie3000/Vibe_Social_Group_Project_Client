import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Everything from "./Everything"

export default function BetweenAppAndEverything({ logout, isLoading, user }) {

  const [allMemories, setAllMemories] = useState('')
  let [userId, setUserId] = useState('')
  let [allUsers, setAllUsers] = useState('')

  const getMemories = async () => {
    // const userAPI = `${process.env.APIURL}/memories`;
    const userAPI = "https://memories-socialmedia-group.herokuapp.com/memories";
    try {
      let res = await axios.get(userAPI);
      setAllMemories(res.data)
      // setUserId("632b2cfae04541e4ffed9fac") /*storm's userId */
      // setUserId("632b2cfbe04541e4ffed9fa") /*tyler's userId */
    } catch (error) {
      console.log(error)
    }
    getEmailsOfOtherUsers()
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

  return (
    <>
      <div>
        {allMemories !== '' && userId !== '' && allUsers !== '' && <Header allUsers={allUsers} user={user} logout={logout} allMemories={allMemories} userId={userId} />}
        {allMemories !== '' && userId !== '' && allUsers !== '' && <Everything allUsers={allUsers} user={user} userInfoFromAuth={user} allMemories={allMemories} getMemories={getMemories} userId={userId} />}
      </div>


    </>
  )
}
