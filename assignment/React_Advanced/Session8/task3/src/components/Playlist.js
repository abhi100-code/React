import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";

const Playlist = React.memo(() => {
  const { playlist } = useContext(MusicContext);

  console.log("Playlist Rendered");

  return (
    <div>
      <h2>Spotify Playlist</h2>

      <ul>
        {playlist.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>
    </div>
  );
});

export default Playlist;