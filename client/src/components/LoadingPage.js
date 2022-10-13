import React from 'react'

const styled = {
  display: "flex",
  flexDirection: "column",
  fontSize: "60px",
  justifyContent: "center",
  color: "rgb(224, 134, 211, 1)",
  webkitTextStrokeWidth: "2px",
  webkitTextStrokeColor: "black",
  margin: "1rem auto"
}

export default function LoadingPage() {
  return (
    <>
      <h1 style={{
        marginTop: "85%", color: "rgb(224, 134, 211, 1)",webkitTextStrokeWidth: "2px",webkitTextStrokeColor: "black"}} className="mainLogo">VIBE</h1>
          <div style = { styled }>
          <h2 style={{ fontFamily: "Titan One" }}>Loading ... </h2>
      <h2 style={{ fontFamily: "Titan One" }}>Thanks for your patience</h2>
    </div>
    </>
  )
}
