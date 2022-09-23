import React, { useState, useEffect } from "react";
import { Button, Offcanvas, Card } from "react-bootstrap";

// ill also pass the auth0 user object here so i have access to username and "profile pic"
export default function Profile({ user, userId, allMemories, getMemories }) {
  const [isClicked, setIsClicked] = useState(false);
  const [userMems, setUserMems] = useState("")

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const onlyUsersMemories = () => {
    let these = allMemories.filter((obj) => obj.author === userId);
    setUserMems(these);
  }

  useEffect(() => {
    onlyUsersMemories()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="profileButton">
        <Button
          onClick={handleClick}
          style={{
            backgroundColor: "#FFFFFF",
            color: "#29E7CD",
            border: "#FFFFFF",
            textTransform: "uppercase",
            fontFamily: "Manrope",
            paddingTop: "10px",
          }}
        >
          Profile
        </Button>
      </div>


      <Offcanvas
        show={isClicked}
        onHide={handleClick}
        style={{ backgroundColor: "transparent", border: "none", padding: '10px', marginRight: "10px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#FFFFFF" }}>
            {" "}
            {user.nickname}'s profile
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {userMems !== "" && userMems.length > 1 &&
            userMems.map((mem) => (
              <Card key={mem._id}
                style={{ width: "10", height: "14", marginBottom: "10px" }}>
                <Card.Header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF",
                  }}>
                  {/*instead of {author}, this is gonna be {user.name} from auth0 */}
                  {user.nickname}
                </Card.Header>
                <Card.Body>
                  <Card.Img src={mem.image} />
                  <hr />
                  <Card.Text>
                    {mem.content}
                    <br />
                    <br />
                    <div className="cardLogo">V</div>
                    Vibed: {mem.createdAt.split("T")[0]}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}

          {userMems !== "" && userMems.length === 1 &&
            <Card
              style={{ width: "10", height: "14", marginBottom: "10px" }}>
              <Card.Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                }}>
                {/*instead of {author}, this is gonna be {user.name} from auth0 */}
                {user.nickname}
              </Card.Header>
              <Card.Body>
                <Card.Img src={userMems[0].image} />
                <hr />
                <Card.Text>
                  {userMems[0].content}
                  <br />
                  <br />
                  <div className="cardLogo">V</div>
                  Vibed: {userMems[0].createdAt.split("T")[0]}
                </Card.Text>
              </Card.Body>
            </Card>
          }

          {userMems !== '' && userMems.length === 0 && <><h1>Lets get to Vibing!</h1><br/><p>Click the plus button to create a new vibe</p></>}

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
