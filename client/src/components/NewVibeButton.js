import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NewVibe from "./crud_memory/NewVibe";

export default function NewVibeButton({ userId, getMemories }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="newVibeButton">
      <Button
        style={{
          fontSize: "32px",
          color: "#FFFFFF",
          backgroundColor: "transparent",
          border: "2px white solid",
          borderRadius: "50px",
          alignItems: "center",
          padding:"2px 50px"
        }}
        variant="info"
        onClick={handleClick}
      >
        +
      </Button>
      {isClicked && (
        <NewVibe
          getMemories={getMemories}
          userId={userId}
          isClicked={isClicked}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}
