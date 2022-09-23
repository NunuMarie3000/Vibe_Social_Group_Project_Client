import React, { useState } from 'react'
import {  Dropdown } from 'react-bootstrap'

export default function OtherUsers({ allUsers }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <div className='profileButton'>
        <Dropdown onClick={handleClick}
          style={{
            backgroundColor: "#FFFFFF",
            border: "#FFFFFF",
            color: "#29E7CD",
            fontFamily: "Manrope",
            textTransform: "uppercase",
            paddingTop: "10px",
            cursor: "pointer"
          }}>
          <Dropdown.Toggle id="dropdown-basic">
            Join the Party
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {allUsers !== '' && allUsers.map(user => <Dropdown.Item key={user._id} href={`${user.email}/user/${user._id}`}>{user.email.split("@")[0]}</Dropdown.Item>)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
