import axios from 'axios'
import React from 'react'

export default function DeleteComment({ commentId, getComments }) {
  const handleDeleteClick = async () => {
    const url = `${process.env.REACT_APP_APIURL}comment/${commentId}`
    try {
      await axios.delete(url)
      getComments()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div onClick={handleDeleteClick}>
      <i className="fa-solid fa-trash"></i>
      </div>
    </>
  )
}
