import React, { useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'
// here we need to be able to create a new vibe

export default function NewVibe({ isClicked, handleClick, userId, getMemories }) {
  const [vibeImage, setVibeImage] = useState('')
  const [vibeContent, setVibeContent] = useState('')

  const handleSubmit = async (e) => {
    const url = `https://memories-socialmedia-group.herokuapp.com/newmemory/${userId}`
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
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title>Set a new vibe</Modal.Title>
        <Modal.Body>
          <Form  onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control required type="text" placeholder="Enter image address" onChange={(e)=>setVibeImage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Vibe</Form.Label>
              <Form.Control required type="text" as="textarea" rows={3} placeholder="I love life <3" onChange={(e)=>setVibeContent(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
