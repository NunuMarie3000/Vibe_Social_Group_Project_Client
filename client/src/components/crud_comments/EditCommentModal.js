import axios from 'axios'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export default function EditCommentModal({ author, memoryId, getComments, commentId, isEditClicked, handleClick, commentBody }) {
  const [updatedBody, setUpdatedBody] = useState('')

  const handleSubmit = async (e) => {
    const url = `${process.env.REACT_APP_APIURL}comment/${commentId}`
    let sendBody 
    if(updatedBody === ''){sendBody = commentBody}else{sendBody = updatedBody}
    const reqBody = {
      author,
      body: sendBody,
      commented_on: memoryId
    }
    try {
      e.preventDefault()
      await axios.put(url, reqBody)
      getComments()
      handleClick()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Modal show={isEditClicked} onHide={handleClick}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Title>Edit Comment</Modal.Title>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="updated-comment">
              <Form.Label>Image</Form.Label>
              <Form.Control defaultValue={commentBody} type="text" onChange={(e) => setUpdatedBody(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
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
