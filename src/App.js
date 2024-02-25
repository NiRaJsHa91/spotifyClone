import React, { useLayoutEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

export const spotify = new SpotifyWebApi();

function App() {
  // const [token,setToken]=useState(null);
  const [{ token }, dispatch] = useDataLayerValue();

  let _token = null;

  const makeRequests = () => {
    spotify.setAccessToken(_token);

    spotify.getMe().then((user) => {
      dispatch({
        type: "SET_USER",
        user: user,
      });
    });

    spotify.getUserPlaylists().then((userPlaylists) => {
      dispatch({
        type: "SET_USER_PLAYLISTS",
        userPlaylists: userPlaylists,
      });
    });
  };

  useLayoutEffect(() => {
    const localToken = localStorage.getItem("token");

    if (localToken) {
      _token = localToken;
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      makeRequests();
    } else {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      _token = hash.access_token;

      if (_token) {
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
        localStorage.setItem("token", _token);

        makeRequests();
      }
    }
  }, []);

  return <>{token ? <Player /> : <Login />}</>;
}

export default App;
