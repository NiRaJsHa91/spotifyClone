import React from "react";
import "./sidebarOption.css";
import { spotify } from "./App";
import { useDataLayerValue } from "./DataLayer";

const SidebarOption = ({ id, title, Icon }) => {

const [
  { playlist},
  dispatch,
] = useDataLayerValue();

  const setPlaylist = (id) => {
    if(id != playlist?.id){
    spotify.getPlaylist(`${id}`).then((playlist) => {
      // console.log(comingPlaylist)
      dispatch({
        type: "SET_PLAYLIST",
        playlist: playlist,
      });
      // }
    });
  }
  };

  return (
    <div className="sidebarOption" onClick={() => setPlaylist(id)}>
      {Icon ? (
        <>
          <Icon className="sidebarIcon" />
          <h4>{title}</h4>
        </>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
};

export default SidebarOption;
