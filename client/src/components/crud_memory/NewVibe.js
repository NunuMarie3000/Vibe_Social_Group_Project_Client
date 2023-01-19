import React, { useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'
// here we need to be able to create a new vibe

export default function NewVibe({ isClicked, handleClick, userId, getMemories }) {
  const [vibeImage, setVibeImage] = useState('')
  const [vibeContent, setVibeContent] = useState('')

  const handleSubmit = async (e) => {
    const url = `${process.env.REACT_APP_APIURL}newmemory/${userId}`
    const newBody = {
      author: userId,
      image:  vibeImage,
      content: vibeContent
    }
    try {
      e.preventDefault()
      await axios.post(url, newBody)
      getMemories()
      handleClick()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal show={isClicked} onHide={handleClick}>
        <Modal.Header closeButton style = {{border: "none", height: "15px", backgroundColor: "#FFF7F8"}}>
        </Modal.Header>
        <Modal.Title style = {{display: 'grid', justifyContent: "center", fontFamily: " Titan One", color: "#24C1AC", backgroundColor:"#FFF7F8"}}>What's your VIBE?</Modal.Title>
        {/* <Modal.Body style = {{backgroundColor: '#003D5B'}}> */}
        <Modal.Body style = {{backgroundColor: '#FFF7F8'}}>
          <Form  onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control required type="text" placeholder="Enter image address" onChange={(e)=>setVibeImage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Vibe</Form.Label>
              <Form.Control required type="text" as="textarea" rows={3} maxLength = "50" placeholder="I love life <3" onChange={(e)=>setVibeContent(e.target.value)}/>
            </Form.Group>
            <div className = "addVibeButton">
            <Button style = {{
              fontSize: "16px",
              color: "#24C1AC",
              backgroundColor: "#FFFFFF",
              border: "2px #29E7CD solid",
              borderRadius: "50px",
              alignItems: "center",
              padding: "5px",
              paddingRight: "-10px",
              letterSpacing:'1px'
            }} 
            type="submit">
              <div className = "logoText">Send Vibes</div>
            </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}
