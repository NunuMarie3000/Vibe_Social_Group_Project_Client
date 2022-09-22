import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function NewComment({ author, memoryId, handleAddClick, isAddClicked, getComments }) {
  const [commentBody, setCommentBody] = useState('')


  const handleSubmit = async (e) => {
    const url = `https://memories-socialmedia-group.herokuapp.com/newcomment`
    const newComment = {
      author: author,
      body: commentBody,
      commented_on: memoryId
    }
    try {
      e.preventDefault()
      await axios.post(url, newComment)
      getComments()
      handleAddClick()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal show={isAddClicked} onHide={handleAddClick}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title>Add A Comment</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="new-comment">
              <Form.Label>Comment</Form.Label>
              <Form.Control required type="text" placeholder="I Vibe With This <3" onChange={(e) => setCommentBody(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
