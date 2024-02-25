import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from "./DataLayer";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="Header">
      <div
        className="menu_icon"
        onClick={() => {
          dispatch({
            type: "SET_MOBILE_SIDEBAR",
            isMobileSidebarHidden: false,
          });
        }}
      >
        <MenuOutlinedIcon style={{ fontSize: "35px" }} />
      </div>
      <div className="header_left">
        <SearchIcon className="search_icon" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search for albumbs, music and playlists..."
        />
      </div>
      <div className="header_right">
        <Avatar className="avatar" alt="avatar" src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
