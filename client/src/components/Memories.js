import React from 'react'
import Memory from './Memory'

export default function Memories({ allMemories, getMemories, userId, user, allUsers }) {
  return (
    <>
    {/* <div className = "vibe"> */}
      {allMemories !== '' && allMemories.slice(0).reverse().map(obj => (
          <Memory key={obj._id} allUsers={allUsers} user={user} getMemories={getMemories} userId={userId} memoryId={obj._id} author={obj.author} createdAt={obj.createdAt} image={obj.image} content={obj.content} likes={obj.likes} />
        ))} 
        {/* </div> */}
    </>
  )
}
