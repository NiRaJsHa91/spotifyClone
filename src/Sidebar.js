import React from "react";
import styles from "./Sidebar.module.css";
import spotifySidebarlogo from "./assets/images/spotify-sidebarlogo.svg";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import QueueIcon from "@mui/icons-material/Queue";
import { useDataLayerValue } from "./DataLayer";

const Sidebar = () => {
  const [{ userPlaylists,}, dispatch] = useDataLayerValue();

  const handleHome = () => {
    dispatch({
      type: "SET_PLAYLIST",
      playlist: null,
    });
  };

  return (
    <div className={styles.sidebar}>
      <img src={spotifySidebarlogo} alt="" />
      <div onClick={() => handleHome}>
        <SidebarOption key={1} title="Home" Icon={HomeOutlinedIcon} />
      </div>
      <SidebarOption key={2} title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption key={3} title="Your Library" Icon={QueueIcon} />
      <br />
      <strong>PLAYLISTS</strong>
      <br />
      <hr />
      {userPlaylists?.items?.map((item) => (
        <SidebarOption id={item.id} key={item.id} title={item.name} />
      ))}
    </div>
  );
};

export default Sidebar;
