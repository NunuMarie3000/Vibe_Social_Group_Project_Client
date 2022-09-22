import React from "react";
import { Card } from "react-bootstrap";
import "../Nav.css"
import "../DARKMODE.css"

export default function memory({ author, createdAt, image, content }) {
  return (
      <Card style = {{width: '18rem', height: "24rem", backgroundColor: "white"}}>
        <Card.Header style = {{backgroundColor: "#ffffff", fontSize: "11px"}}>{author}</Card.Header>
        <Card.Body style = {{
          // backgroundColor: "#F4EBE8",
          backgroundColor: "#ffffff",
          boxShadow: '0 3rem 8rem 2rem rgba(0, 0, 0, 0.15)'
        }}>
          <Card.Img src={image} style = {{border: "3px white solid"}}/>
          <div className = "overflowCard">
          <Card.Text style = {{marginTop: "10px", fontFamily: "Rubik"}}>{content}</Card.Text>
          </div>
          <div className = "cardLogo">V</div>
        </Card.Body>
        <Card.Footer style = {{fontSize: "10px", textAlign: 'right'}}>{createdAt}</Card.Footer>
        {/* <button>Comments</button> accordion */}
      </Card>
  );
}
