import React, { useEffect, useRef } from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import MobileSidebar from "./MobileSidebar";
import { useDataLayerValue } from "./DataLayer";
import SinglePlayer from "./SinglePlayer";

function Player() {
  const [{ playlist, currentPlayingSong, anySongPlaying }, dispatch] =
    useDataLayerValue();

  const soundRef = useRef();

//if playlist changes currentplaying song should stop
  useEffect(()=>{
    dispatch({
      type: "SET_CURRENT_PLAYING_SONG",
      currentPlayingSong: null,
    });
  },[playlist])

  // Code that should run when the currently playing song changes.
  useEffect(() => {
    // If any song is already playing, then pause the current song before switching to new song.
    if (soundRef?.current) {
      soundRef.current.pause();
    }

    // If current playing song's value changes to some non-null value,
    // then set that song as the soundRef and play that song.
    if (currentPlayingSong != null) {
      soundRef.current = new Audio(currentPlayingSong);
      soundRef?.current?.play();
    }
  }, [currentPlayingSong]);

  // Code that should run when the song's playing state changes betweeen play & pause
  useEffect(() => {
    if (anySongPlaying) {
      soundRef?.current?.play();
      console.log(soundRef)
    } else {

      soundRef?.current?.pause();
      
      //to completely end/remove the song instead of just pausing
      // dispatch({
      //   type: 'SET_CURRENT_PLAYING_SONG',
      //   currentPlayingSong: null,
      // })
      
    }
  }, [anySongPlaying]);

  return (
    <div className="player">
      <MobileSidebar />
      <div className="player__body">
        <Sidebar />
        {playlist ? <SinglePlayer /> : <Body />}
      </div>
      
    </div>
  );
}

export default Player;
