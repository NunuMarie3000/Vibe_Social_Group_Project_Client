import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import EditDropdown from "./crud_memory/EditDropdown";
import Comments from "./Comments";
import axios from 'axios'
import "../Nav.css";


export default function Memory({ author, likes, createdAt, image, content, userId, memoryId, getMemories }) {
  const memoryInfo = { author, createdAt, likes, image, content, userId, memoryId }
  const [allComments, setAllComments] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  let [updatedLikes, setUpdatedLikes] = useState(likes)

  const getComments = async () => {
    const url = `https://memories-socialmedia-group.herokuapp.com/comments/${memoryId}`
    try {
      await axios.get(url).then(res => setAllComments(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  // const likeVibe = () => {
  //   setIsLiked(!isLiked)
  //   setUpdatedLikes(updatedLikes++)
  //   updateLikes()
  //   getComments()
  // }
  const likeVibe = () => {
    setIsLiked(!isLiked)
    if (isLiked) {
      setUpdatedLikes(updatedLikes--)
    }
    else if (!isLiked) {
      setUpdatedLikes(updatedLikes++)
    }
    updateLikes()
    getComments()
  }

  const updateLikes = async () => {
    // const url = `http://localhost:8000/memory/${memoryId}`
    const url = `https://memories-socialmedia-group.herokuapp.com/memory/${memoryId}`

    const sendLikes = {
      "likes": updatedLikes
    }
    try {
      await axios.patch(url, sendLikes)
      console.log(likes)
      console.log(updatedLikes)
      console.log(sendLikes)
      getComments()
    } catch (error) {
      console.log(error)
    }
  }

  // i need a function to send patch request to update likes
  // okay, maybe...
  // how would i update likes? i could increase them, sure, but what if the user unlikes it after liking it?
  // maybe just when i make the get comments request, i store the likes in state or useRef() and inc or dec within state, then like, componentDidUnmount, or whatever the functional equivalent is, make the patch request with whatever is in state? if componentDidUnmount is doing what i think its doing, running a piece of code right before the node is unmounted, if so, it'll update the db so whenever we come back, the final number will be accurately stored in the db

  useEffect(() => {
    getComments()
    //eslint-disable-next-line
  }, [])


  return (
    <div>
      <Card style={{ width: '18rem', height: "auto" }}>
        <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/*instead of {author}, this is gonna be {user.name} from auth0 */}
          {/* {author} */}


          {/* i'll use bootstrap dropdown button here that user can click if they wanna edit or delete
        this is where imma put edit buttons if author matches userId on*/}
          {userId === author && <EditDropdown getMemories={getMemories} memoryInfo={memoryInfo} />}

        </Card.Header>
        <Card.Body>
          <Card.Img src={image} style = {{width: "255px", height: "250px", objectFit: "cover", borderRadius: '0px'}} />
          <div className = "authorImage">{author}</div>
          {/* <div class = "overflowCard"> */}
          <hr/>
          <Card.Text style={{ marginTop: "10px", fontFamily: "Rubik" }}>
            {content}<br /><br />
            Vibed: {createdAt.split('T')[0]}<br />
            {!isLiked ? <i onClick={likeVibe} className="fa-regular fa-heart"></i> : <i onClick={likeVibe} className="fa-solid fa-heart"></i>}&nbsp;
            {/*i'll add number of likes here */}
            {updatedLikes}
          </Card.Text>
          {/* </div> */}
          <div className="cardLogo">V</div>

        </Card.Body>
        <Card.Footer style = {{backgroundColor: "#FFFFFF"}}>
          {/* comments accordion */}
          {allComments !== '' && <Comments getComments={getComments} comments={allComments} author={author} memoryId={memoryId} />}
        </Card.Footer>
      </Card>
    </div>

  );
}
