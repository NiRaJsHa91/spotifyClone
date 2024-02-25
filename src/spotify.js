export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "dfcb684ca42b4efb817b60930e452473";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // parts is an array where first element is left side of equal to sign and second element being value
      var parts = item.split("=");
      // initial is an empty object
      // now first element of parts become key and second element becomes its value
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};
