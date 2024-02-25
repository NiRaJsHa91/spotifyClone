import React from "react";
import "./Login.css";
import spotifyLogo from "./assets/images/spotify-logo.svg";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <div className="login_upper_section">
        <img src={spotifyLogo} alt="" />
        <div className="note">
          <h3> Important Note </h3>
          <p>
            Spotify mandates developers to add those users manually for whom
            they want to allow access to their app, by adding user's name and
            email address respectively associated with their actual spotify
            account. So you won't be able to use this app with your own spotify account
          </p>
          <p>
            You must be logged in with actual spotify in your system with
            following credentials and add or remove any song, playlists. And then you can click login button below to see them in this app
          </p>
          <h4 className="note_credentials"> Email : nirajdummy@gmail.com</h4>
          <h4>Password : nirajdummy91@gmail.com</h4>
        </div>
      </div>
      <div className="login_bottom_section">
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      </div>
    </div>
  );
}

export default Login;
