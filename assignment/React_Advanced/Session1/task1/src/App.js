import React from "react";
import PlaylistCard from "./PlaylistCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Playlist</h1>

      <PlaylistCard
        song="Shape of You"
        artist="Ed Sheeran"
      />

      <PlaylistCard
        song="Blinding Lights"
        artist="The Weeknd"
      />

      <PlaylistCard
        song="Perfect"
        artist="Ed Sheeran"
      />
    </div>
  );
}

export default App;