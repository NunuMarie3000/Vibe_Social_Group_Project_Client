import React, { useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";

import EditDropdown from "./crud_memory/EditDropdown";
import Comments from "./Comments";
import axios from 'axios'
import "../Nav.css";


export default function Memory({ author, likes, createdAt, image, content, userId, memoryId, getMemories, user, allUsers }) {
  const memoryInfo = { author, createdAt, likes, image, content, userId, memoryId }
  
  const [allComments, setAllComments] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const [authorUsername, setAuthorUsername] = useState('')
  // useRef instead of state so it persists between renders until my patch request before component dies
  const likeCounter = useRef(0)

  const getComments = async () => {
    const url = `https://memories-socialmedia-group.herokuapp.com/comments/${memoryId}`
    try {
      await axios.get(url).then(res => setAllComments(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  const matchUserToMemory = () => {
    let correctAuthor = allUsers.find(obj =>{return obj._id === author})
    setAuthorUsername(correctAuthor.email.split("@")[0])
  }

  const likeVibe = () => {
    setIsLiked(!isLiked)
    if(!isLiked){return (likeCounter.current = likeCounter.current + 1)}
    else return (likeCounter.current = likeCounter.current - 1)
  }

  const updateLikes = async () => {
    const url = `https://memories-socialmedia-group.herokuapp.com/memory/${memoryId}`

    const sendLikes = {
      "likes": (likeCounter.current + likes)
    }
    try {
      await axios.patch(url, sendLikes)
    } catch (error) {
      console.log(error)
    }
  }

  // i need a function to send patch request to update likes
  // okay, maybe...
  // how would i update likes? i could increase them, sure, but what if the user unlikes it after liking it?
  // maybe just when i make the get comments request, i store the likes in state or useRef() and inc or dec within state, then like, componentDidUnmount, or whatever the functional equivalent is, make the patch request with whatever is in state? if componentDidUnmount is doing what i think its doing, running a piece of code right before the node is unmounted, if so, it'll update the db so whenever we come back, the final number will be accurately stored in the db

  useEffect(() => {
    matchUserToMemory()
    getComments()
    //eslint-disable-next-line
  }, [])

  // this is acting like componentWillUnmount, sends patch request to the server updating likes in the db right before the component gets destroyed
  useEffect(() => {
    updateLikes()
    return () => {
      updateLikes()
    }
  })


  return (
    <div>
      <Card style={{ width: '18rem', height: "auto" }}>
        <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/*instead of {author}, this is gonna be {user.name} from auth0 */}

          {authorUsername !== '' && authorUsername}

          {/* i'll use bootstrap dropdown button here that user can click if they wanna edit or delete
        this is where imma put edit buttons if author matches userId on*/}
          {userId === author && <EditDropdown getMemories={getMemories} memoryInfo={memoryInfo} />}

        </Card.Header>
        <Card.Body>
          <Card.Img src={image} style = {{width: "255px", height: "250px", objectFit: "cover", borderRadius: '0px'}} />
          <div className = "authorImage">{authorUsername}</div>

          <hr/>
          <Card.Text style={{ marginTop: "10px", fontFamily: "Rubik" }}>
            {content}<br /><br />
            Vibed: {createdAt.split('T')[0]}<br />
            {!isLiked ? <i onClick={likeVibe} className="fa-regular fa-heart"></i> : <i onClick={likeVibe} className="fa-solid fa-heart"></i>}&nbsp;
            {/*i'll add number of likes here */}
            {/* {updatedLikes} */}
            {(likeCounter.current) + (likes)}
          </Card.Text>
          {/* </div> */}
          <div className="cardLogo">V</div>

        </Card.Body>
        <Card.Footer style = {{backgroundColor: "#FFFFFF"}}>
          {/* comments accordion */}
          {allComments !== '' && <Comments userAuth0={user} allUsers={allUsers} getComments={getComments} comments={allComments} author={author} memoryId={memoryId} userId={userId} />}
        </Card.Footer>
      </Card>
    </div>

  );
}
