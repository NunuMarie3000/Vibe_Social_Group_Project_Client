import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
// i wanna edit with a modal

export default function EditVibe({ memoryInfo, getMemories, isEditClicked, handleEditClick }) {
  const { author, createdAt, image, content, memoryId } = memoryInfo
  // const { author, createdAt, image, content, userId, memoryId } = memoryInfo
  const [updatedImage, setUpdatedImage] = useState('')
  const [updatedContent, setUpdatedContent] = useState('')

  const handleSubmit = async (e) => {
    const url = `https://memories-socialmedia-group.herokuapp.com/memory/${memoryId}`

    let sendImage 
    let sendContent
    if(updatedImage === ''){sendImage = image}else{sendImage = updatedImage}
    if(updatedContent === ''){sendContent = content}else{sendContent = updatedContent}

    const updatedBody = {
      author,
      createdAt,
      image: sendImage,
      content: sendContent
    }
    try {
      e.preventDefault()
      await axios.put(url, updatedBody) 
      getMemories()
      handleEditClick()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal show={isEditClicked} onHide={handleEditClick}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title>Edit Vibe</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="updated-image">
              <Form.Label>Image</Form.Label>
              <Form.Control defaultValue={image} type="text" placeholder="Enter image address" onChange={(e) => setUpdatedImage(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="updated-content">
              <Form.Label>Vibe</Form.Label>
              <Form.Control defaultValue={content} type="text" as="textarea" rows={3} placeholder="I love life <3" onChange={(e) => setUpdatedContent(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
