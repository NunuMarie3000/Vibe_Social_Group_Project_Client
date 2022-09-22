import React from 'react'
import Memory from './Memory'

export default function Memories({ allMemories, getMemories, userId }) {
  return (
    <>
      {allMemories !== '' && allMemories.map(obj => (
          <Memory key={obj._id} getMemories={getMemories} userId={userId} memoryId={obj._id} author={obj.author} createdAt={obj.createdAt} image={obj.image} content={obj.content} likes={obj.likes} />
        ))} 
    </>
  )
}
