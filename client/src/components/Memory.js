import React from "react";
import { Card } from "react-bootstrap";
import "../Nav.css"

export default function memory({ author, createdAt, image, content }) {
  return (
    <div className = 'vibeBox'>
      <Card style = {{width: '18rem', height: "24rem", backgroundColor: "white"}}>
        <Card.Header style = {{backgroundColor: "#F4EBE8", fontSize: "11px"}}>{author}</Card.Header>
        <Card.Body style = {{
          backgroundColor: "#F4EBE8"
        }}>
          <Card.Img src={image} style = {{border: "3px white solid"}}/>
          <Card.Text>{content}</Card.Text>
          <Card.Text style = {{fontFamily: "Titan One", textAlign: "right"}}>V</Card.Text>
          {/* <div className = "logoV">V</div> */}
        </Card.Body>
        <Card.Footer style = {{fontSize: "10px", textAlign: 'right'}}>{createdAt}</Card.Footer>

        {/* <button>Comments</button> accordion */}
      </Card>
    </div>
  );
}
