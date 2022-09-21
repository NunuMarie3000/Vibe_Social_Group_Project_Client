import React from "react";
import { Card } from "react-bootstrap";

export default function memory({ author, createdAt, image, content }) {
  return (
    <div>
      <Card>
        <Card.Header>{author}</Card.Header>
        <Card.Body>
          <Card.Img src={image} />
          <Card.Text>{content}</Card.Text>
        </Card.Body>
        <Card.Footer>{createdAt}</Card.Footer>
      </Card>
    </div>
  );
}
