import './mobilesidebar.css' 
 import spotifySidebarlogo from "./assets/images/spotify-sidebarlogo.svg";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import QueueIcon from "@mui/icons-material/Queue";
import { useDataLayerValue } from "./DataLayer";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const MobileSidebar = () => {
    const [{ userPlaylists, isMobileSidebarHidden }, dispatch] = useDataLayerValue();


  return (
    <div
      className="mobile_sidebar"
      style={isMobileSidebarHidden ? { zIndex: "-1" } : { zIndex: "999999" }}
    >
      <div
        className="close_sidebar_icon"
        onClick={() => {
          dispatch({
            type: "SET_MOBILE_SIDEBAR",
            isMobileSidebarHidden: true,
          });
        }}
      >
        <CloseOutlinedIcon />
      </div>
      <img src={spotifySidebarlogo} alt="" />
      <SidebarOption key={1} title="Home" Icon={HomeOutlinedIcon} />
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
}

export default MobileSidebar
