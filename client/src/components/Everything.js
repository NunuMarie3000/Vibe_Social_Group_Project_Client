import React from "react"
import Memories from './Memories'

import NewVibeButton from "./NewVibeButton"

export default function Everything({ allMemories, userId, getMemories, user, allUsers }) {

  return (
    <>
      {/*we need to have a new vibe button at the top for users to create a new post */}
      <NewVibeButton userId={userId} getMemories={getMemories} />
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <div className="vibe">
        {allMemories !== '' && <Memories allUsers={allUsers} user={user} getMemories={getMemories} userId={userId} allMemories={allMemories} />}
      </div>
      </div>
    </>
  )

}
