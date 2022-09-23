import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import NewComment from './crud_comments/NewComment'
import Comment from './Comment'

export default function Comments({ comments, memoryId, author, getComments, allUsers, userId, userAuth0 }) {
  const [isAddClicked, setIsAddClicked] = useState(false)

  const handleAddClick = () => {
    setIsAddClicked(!isAddClicked)
  }

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{ fontFamily: 'Manrope' }}>Comments</Accordion.Header>
          <Accordion.Body style={{ overflowY: 'scroll', height: '100px' }}>

            {/*add comment button */}
            <div style={{ fontFamily: "Manrope", letterSpacing: "1" }}>
              <i onClick={handleAddClick}>+ New Comment</i>
            </div>

            {comments !== '' && comments.length > 1 && comments.map(com => (
              <Comment userId={userId} key={com._id} allUsers={allUsers} body={com.body} memoryId={memoryId} getComments={getComments} commentId={com._id} commentAuthor={com.author} memoryAuthor={author} />
            ))}

            {comments !== '' && comments.length === 1 &&
              <Comment userId={userId} allUsers={allUsers} body={comments[0].body} memoryId={memoryId} getComments={getComments} commentId={comments[0]._id} commentAuthor={comments[0].author} memoryAuthor={author} />}

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <NewComment userId={userId} userAuth0={userAuth0} getComments={getComments} author={author} memoryId={memoryId} handleAddClick={handleAddClick} isAddClicked={isAddClicked} />
    </>
  )
}
