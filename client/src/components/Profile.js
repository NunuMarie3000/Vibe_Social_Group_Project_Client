import React, { useState, useEffect } from 'react'
import { Button, Offcanvas, Card } from 'react-bootstrap'

// ill also pass the auth0 user object here so i have access to username and "profile pic"
export default function Profile({ allMemories, userId }) {
  const [isClicked, setIsClicked] = useState(false)
  const [userMems, setUserMems] = useState('')

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  const onlyUsersMemories = () => {
    let these = allMemories.filter(obj => obj.author === userId)
    setUserMems(these)
  }

  useEffect(() => {
    onlyUsersMemories()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Button onClick={handleClick} >Profile</Button>

      <Offcanvas show={isClicked} onHide={handleClick}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Enter Username Here's profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {userMems !== '' && userMems.map(mem => (
            <Card key={mem._id} style={{ width: '10', height: "14" }}>
              <Card.Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/*instead of {author}, this is gonna be {user.name} from auth0 */}
                {mem.author}
              </Card.Header>
              <Card.Body>
                <Card.Img src={mem.image} />
                <Card.Text>
                  {mem.content}<br /><br />
                  Vibed: {mem.createdAt.split('T')[0]}
                </Card.Text>
              </Card.Body>
            </Card>)
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
