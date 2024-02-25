import React from "react";
import "./singlePlayer.css";
import { useDataLayerValue } from "./DataLayer";
import SinglePlaylistSong from "./SinglePlaylistSong";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Avatar from "@mui/material/Avatar";


const SinglePlayer = () => {
  const [{ playlist, user }, dispatch] = useDataLayerValue();

  return (
    <div className="single_player">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="single_player_menu"
          onClick={() => {
            dispatch({
              type: "SET_MOBILE_SIDEBAR",
              isMobileSidebarHidden: false,
            });
          }}
        >
          <MenuOutlinedIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>
        <div
          className="avatar"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <Avatar
            alt="avatar"
            src={user?.images[0]?.url}
            style={{ height: "40px", width: "40px", objectFit: "contain" }}
          />
          <h4>{user?.display_name}</h4>
        </div>
      </div>

      <div className="playlist_info">
        <div className="poster_image">
          <img src={playlist?.images[0]?.url} alt="poster Image" />
        </div>
        <div className="poster_info">
          <p>Playlist</p>
          <h1>{playlist?.name}</h1>

          <div
            style={{
              display: "flex",
              fontSize: "1rem",
              gap: "10px",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Avatar
              alt="avatar"
              src={user?.images[0]?.url}
              style={{ height: "30px", width: "30px", objectFit: "contain" }}
            />
            {playlist?.owner?.display_name} . {playlist?.tracks?.total} Songs
          </div>
        </div>
      </div>
      <div className="playlist_all_songs">
        <div className="heading">
          <p className="title">#Title</p>
          <p className="album">Album</p>
          <p>Date Added</p>
          <p>Duration</p>
        </div>
        <br />
        <hr color="gray" />

        {playlist?.tracks?.items?.map((song) => (
          <SinglePlaylistSong
            key={song?.track?.id}
            img={song?.track?.album?.images[2]?.url}
            name={song?.track?.name}
            artist={song?.track?.artists[0]?.name}
            album={song?.track?.album?.name}
            dateAdded={song?.added_at}
            duration={song?.track?.duration_ms}
            audio={song?.track?.preview_url}
          />
        ))}
      </div>
    </div>
  );
};

export default SinglePlayer;
