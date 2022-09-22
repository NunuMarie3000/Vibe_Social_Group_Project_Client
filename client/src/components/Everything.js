import React from "react"
import Memories from './Memories'

import NewVibeButton from "./NewVibeButton"

export default function Everything({ allMemories, userId, getMemories, user, allUsers }) {


  return (
    <>
      {/*we need to have a new vibe button at the top for users to create a new post */}
      <NewVibeButton userId={userId} getMemories={getMemories}  />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: "repeat(3, 18rem)",
        gridColumnGap: "10px",
        gridRowGap:"10px",
        marginTop: '60px'
      }}
    >
      {allMemories !== '' && <Memories allUsers={allUsers} user={user} getMemories={getMemories} userId={userId} allMemories={allMemories} />}

      </div>
    </>
  )

}
