export const initialState = {
  user: null,
  userPlaylists: [],
  playlist: null,
  anySongPlaying: false,
  
  //   to be removed fixed token, just for debugging purpose so that as soon as we reload after logging in we remain logged in
  token: null,
  isMobileSidebarHidden: true,
 
  currentPlayingSong: null,
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER_PLAYLISTS":
      return {
        ...state,
        userPlaylists: action.userPlaylists,
      };

    

    case "SET_MOBILE_SIDEBAR":
      return {
        ...state,
        isMobileSidebarHidden: action.isMobileSidebarHidden,
      };

   

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_ANY_SONG_PLAYING":
      return {
        ...state,
        anySongPlaying: action.anySongPlaying,
      };

    case "SET_CURRENT_PLAYING_SONG":
      return {
        ...state,
        currentPlayingSong: action.currentPlayingSong,
      };

    default:
      return state;
  }
};

export default reducer;
