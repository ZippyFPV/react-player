import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//Import Styles
import "./styles/app.scss";
//Import Util
import data from "./data";

function App() {
  //State

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  );
}

export default App;
