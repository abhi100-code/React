import React from "react";

function PlaylistCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        width: "250px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>{props.song}</h2>
      <p>Artist: {props.artist}</p>
    </div>
  );
}

export default PlaylistCard;