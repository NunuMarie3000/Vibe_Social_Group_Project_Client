import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import EditComment from './crud_comments/EditComment'
import DeleteComment from './crud_comments/DeleteComment'

export default function Comment({allUsers, body, memoryId, getComments, commentId, commentAuthor, userId }) {
  let [authorUsername, setAuthorUsername] = useState('')

  const matchUserToComment = () => {
    let correctAuthor = allUsers.find(user => {return user._id === commentAuthor})
    setAuthorUsername(correctAuthor.email.split("@")[0])
  }
  // we have author of the memory and author of the comment and userId of the person signed in 
  // if the userId(person signed in rn) === author of the comment, 
  // i don't care if it matches the user signed in, i need authorId of the comment === allUsers.user._id

  useEffect(() => {
    matchUserToComment()
  })

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{authorUsername}</Card.Title>
          <Card.Text>
            {body}
          </Card.Text>
          <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/*edit comment button */}{/*delete comment button */}
            {commentAuthor === userId && <><EditComment  memoryId={memoryId} body={body} author={commentAuthor} getComments={getComments} commentId={commentId} /> <DeleteComment getComments={getComments} commentId={commentId} /></>}
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  )
}
