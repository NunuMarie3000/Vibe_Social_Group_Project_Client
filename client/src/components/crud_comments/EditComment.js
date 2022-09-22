import React, { useState } from 'react'
import EditCommentModal from './EditCommentModal'

export default function EditComment({ author, getComments, commentId, body, memoryId }) {
  const [isEditClicked, setIsEditClicked] = useState(false)

  const handleClick = () => {
    setIsEditClicked(!isEditClicked)
  }


  return (
    <>
      <i onClick={handleClick} className="fa-solid fa-pencil"></i>

      <EditCommentModal handleClick={handleClick} memoryId={memoryId} commentBody={body} getComments={getComments} commentId={commentId} author={author} isEditClicked={isEditClicked} />
    </>
  )
}

// edit body, i need 