import React from "react";
import { Card } from "react-bootstrap";
import "../Nav.css";
import "../DARKMODE.css";

export default function memory({ author, createdAt, image, content }) {
  return (
    <Card style={{ width: "18rem", height: "25rem", backgroundColor: "white" }}>
      <Card.Header style={{ backgroundColor: "#ffffff", fontSize: "11px", textAlign:'left' }}>
      {/* <div className="cardLogoHeader">V</div> */}

        {author}
      </Card.Header>
      <Card.Body
        style={{
          // backgroundColor: "#F4EBE8",
          backgroundColor: "#ffffff",
        }}
      >
        <Card.Img src={image} style={{}} />
        {/* <div className="cardLogo">V</div> */}

        <Card.Text><hr/></Card.Text>
        <div className="overflowCard">
          <Card.Text style={{ marginTop: "10px", fontFamily: "Rubik" }}>
            {content}
          </Card.Text>
        </div>
        <div className="cardLogo">V</div>
      </Card.Body>
      <Card.Footer style={{ fontSize: "10px", textAlign: "left" }}>
        {createdAt}
      </Card.Footer>
      {/* <button>Comments</button> accordion */}
    </Card>
  );
}
