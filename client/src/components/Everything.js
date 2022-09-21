import React from "react"
import Memory from "./Memory"

export default function Everything({allMemories}) {


  return (
    <div style = {{ display: "grid", gridTemplateColumns: "repeat(3, 18rem)", gridColumnGap: "10px"}}>

    {allMemories !== '' && allMemories.map(obj => (

        <Memory author = {obj.author} createdAt = {obj.createdAt}  image = {obj.image} content = {obj.content}/>

    ))}
    

    </div>
  )
}


