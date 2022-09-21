import React from "react";
import { Card } from "react-bootstrap";

export default function memory({ author, createdAt, image, content }) {
  return (
    <div>
      <Card style = {{width: '18rem', height: "24rem"}}>
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Img src={image} />
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Footer>{createdAt}</Card.Footer>

        {/* <button>Comments</button> accordion */}
      </Card>
    </div>
  );
}
