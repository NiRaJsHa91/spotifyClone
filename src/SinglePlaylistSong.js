
import "./singlePlaylistSong.css";

import { useDataLayerValue } from "./DataLayer";

const SinglePlaylistSong = ({
  
  img,
  name,
  artist,
  album,
  dateAdded,
  duration,
  audio,
}) => {
  const [{ anySongPlaying, currentPlayingSong }, dispatch] =
    useDataLayerValue();
  
  

  
  

  return (
    <div
      className="singlePlaylistSong_div"
      onClick={() => {
        // If this song is already set as the current playing song,
        // then just toggle the "play"/"pause" state of current song.
        // Else set this song as the current playing song and set the playing state to "play"
        if (currentPlayingSong === audio) {
          dispatch({
            type: "SET_ANY_SONG_PLAYING",
            anySongPlaying: !anySongPlaying,
          });
        } else {
          dispatch({
            type: "SET_CURRENT_PLAYING_SONG",
            currentPlayingSong: audio,
          });

          dispatch({
            type: "SET_ANY_SONG_PLAYING",
            anySongPlaying: true,
          });
        }

        
      }}
    >
      <div className="singlePlaylistSong">
        <div className="title ">
          <div className="title_img">
            <img src={img} alt="title_img" />
          </div>
          <div className="title_info ">
            <p className="truncate_enabled">{name}</p>

            <span>{artist}</span>
          </div>
        </div>

        <p className="truncate_enabled">{album}</p>
        <p className="truncate_enabled">{dateAdded.slice(0, 10)}</p>
        <p className="truncate_enabled">
          {/* {Math.trunc(Math.trunc(duration / 1000) / 60)}:
          {Math.trunc(Math.trunc(duration / 1000) % 60)} */}
          30 Sec
        </p>
      </div>
    </div>
  );
};

export default SinglePlaylistSong;
