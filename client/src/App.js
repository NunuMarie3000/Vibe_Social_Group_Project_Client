import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import Everything from "./components/Everything"
// import {useAuth0} from "@auth0/auth0-react"
// import LoginPage from "./pages/LoginPage"


const App = () => {

  const [allMemories, setAllMemories] = useState('')
  const [userId, setUserId] = useState('')
  
  // const {loginWithRedirect, logout, isLoading, user} = useAuth0()

  const getMemories = async()=>{
    // const userAPI = `${process.env.APIURL}/memories`;
    const userAPI = "https://memories-socialmedia-group.herokuapp.com/memories";
    let res = await axios.get(userAPI);
    setAllMemories(res.data)
    setUserId("632b2cfae04541e4ffed9fac") /*storm's userId */
    // setUserId("632b2cfbe04541e4ffed9fa") /*tyler's userId */
  }

  // const getUser = async()=>{
  //   try {
  //     const userAPI = `${process.env.APIURL}/useremail/${user.email}`
  //   let res = await axios.get(userAPI)
  //   if(res === null || res === '' || res === undefined){
  //     //we want to create a new user 
  //     createNewUser()
  //   }else {
  //     //getUser id 
  //     setUserId(res.data)
  //   }
  // }catch (error) {
  //     console.log(error)
  //   }
    
  // }

  // const createNewUser = async()=>{
  //   const userAPI = `${process.env.APIURL}/newuser`
  //   const userEmail = {email: user.email}
  //   try {
  //     const newUser = await axios.post(userAPI, userEmail)
  //     setUserId(newUser.data._id)
  //     getUser()

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  useEffect(()=> {
    getMemories()
    // getUser()
  },[])



  return (
    <div>
      <div class = "mainLogo">
      VIBE
    </div>
      {/* <Header logout = {logout}/> */}
      {allMemories !== '' && userId !== '' && <Header allMemories={allMemories} userId={userId} />}
      {/* {!user && <LoginPage login = {loginWithRedirect}/>} */}
      {allMemories !== '' && userId !== '' && <Everything allMemories = {allMemories} getMemories={getMemories} userId = {userId}/>}
      <Footer />
    </div>
  );
};

export default App;
