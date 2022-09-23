import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router'
import axios from 'axios'
// this will be slide overlay like profile, on opposite side that renders posts of that specific user

export default function OtherUser() {
  let { userIdParams, email } = useParams()
  const [userVibes, setUserVibes] = useState('')

  const getUserParamMemories = async () => {
    // const userAPI = `${process.env.APIURL}/memories`;
    const userAPI = `https://memories-socialmedia-group.herokuapp.com/memories/${userIdParams}`;
    try {
      let res = await axios.get(userAPI);
      setUserVibes(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserParamMemories()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="mainLogo">VIBE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <a style={{
          // width: '500px',
          borderRadius: "5px",
          color: "#29E7CD",
          backgroundColor:"#fff",
          textAlign: "center",
          fontWeight: "300",
          textDecoration: "none",
          fontSize: '16px',
          padding: "18px 10px",
          border: "#FFFFFF",
          textTransform: "uppercase",
          fontFamily: "Manrope",
        }} href='/'>Home</a>

        <h1 style={{ textAlign: 'center' }}>{email.split("@")[0]}'s Vibes</h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: "center" }}>
          {userVibes !== '' && userVibes.length > 1 && userVibes.map(vibe => (
            <Card key={vibe._id}
              style={{ width: "18rem", height: "auto", marginBottom: "10px" }}>
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                }}>
                {/*instead of {author}, this is gonna be {user.name} from auth0 */}
                {email.split("@")[0]}
              </Card.Header>
              <Card.Body>
                <Card.Img src={vibe.image} />
                <hr />
                <Card.Text>
                  {vibe.content}
                  <br />
                  <br />
                  <div className="cardLogo">V</div>
                  Vibed: {vibe.createdAt.split("T")[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}

          {userVibes !== '' && userVibes.length === 1 &&
            <Card
              style={{ width: "18rem", height: "auto", marginBottom: "10px" }}>
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                }}>
                {/*instead of {author}, this is gonna be {user.name} from auth0 */}
                {email.split("@")[0]}
              </Card.Header>
              <Card.Body>
                <Card.Img src={userVibes[0].image} />
                <hr />
                <Card.Text>
                  {userVibes[0].content}
                  <br />
                  <br />
                  <div className="cardLogo">V</div>
                  Vibed: {userVibes[0].createdAt.split("T")[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          }
        </div>
      </div>
    </>
  )
}
