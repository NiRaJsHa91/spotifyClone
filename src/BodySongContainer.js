import React from "react";
import "./bodySongContainer.css";
import { useDataLayerValue } from "./DataLayer";
import { spotify } from "./App";

const BodySongContainer = (props) => {
  const [{playlist}, dispatch] = useDataLayerValue();

  const setPlaylist = (id) => {
    spotify.getPlaylist(`${id}`).then((playlist) => {
      dispatch({
        type: "SET_PLAYLIST",
        playlist: playlist,
      });
    });
  };

  return (
    <div className="body_song_container" onClick={() => setPlaylist(props.id)}>
      <img
        src={
          props.coverImage[0]
            ? props.coverImage[0].url
            : "https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D"
        }
        alt="coverImage"
      />
      <p>{props.title}</p>
    </div>
  );
};

export default BodySongContainer;
