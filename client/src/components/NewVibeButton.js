import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import NewVibe from './crud_memory/NewVibe'

export default function NewVibeButton({ userId, getMemories }) {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <>
      <Button variant='info' onClick={handleClick}>New Vibe</Button>
      {isClicked && <NewVibe getMemories={getMemories} userId={userId} isClicked={isClicked} handleClick={handleClick} />}
    </>
  )
}
