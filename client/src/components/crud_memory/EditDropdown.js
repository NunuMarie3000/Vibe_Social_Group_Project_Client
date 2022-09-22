import axios from 'axios'
import React, { useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import EditVibe from './EditVibe'

export default function EditDropdown({ memoryInfo, getMemories }) {
  const [isEditClicked, setIsEditClicked] = useState(false)

  const handleDeleteClick = async () => {
    const url=`https://memories-socialmedia-group.herokuapp.com/memory/${memoryInfo.memoryId}`
    try {
      await axios.delete(url)
      getMemories()
    } catch (error) {
      console.log(error)
    }
  }

  const handleEditClick = async () => {
    setIsEditClicked(!isEditClicked)
  }

  return (
    <>
      {/* <DropdownButton  id="dropdown-basic-button" size='sm' drop='start' title=""> */}
      <DropdownButton  id="dropdown-basic-button" align={{ xSmall: 'start' }} style = {{color: 'red'}} title="✎">

        <Dropdown.Item onClick={handleEditClick}>
          <i className="fa-solid fa-pencil"></i> Edit Vibe
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDeleteClick}><i className="fa-solid fa-trash"></i> Delete Vibe</Dropdown.Item>
      </DropdownButton>

      <EditVibe handleEditClick={handleEditClick} isEditClicked={isEditClicked} memoryInfo={memoryInfo} getMemories={getMemories} />
    </>
  )
}
