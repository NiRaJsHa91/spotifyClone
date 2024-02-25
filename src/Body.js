import React, { useState } from "react";
import "./body.css";
import Header from "./Header";

import { useDataLayerValue } from "./DataLayer";
import { useEffect } from "react";
import BodySongContainer from "./BodySongContainer";

const Body = () => {
  const [{ userPlaylists }, dispatch] = useDataLayerValue();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchHandler = (searchInput) => {
      if (searchInput && searchInput.trim() != "") {
        const filteredBodySongsList = userPlaylists?.items?.filter((item) => {
          return item.name
            .toString()
            .toLowerCase()
            .includes(searchInput?.toString().toLowerCase());
        });

        setSearchResults(filteredBodySongsList);
      } else {
        setSearchResults(userPlaylists?.items);
      }
    };
    searchHandler(searchTerm);
  }, [searchTerm, userPlaylists]);

  return (
    <div className="body">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="body_info">
        <h4>Your Playlists</h4>
        <div
          className={`${
            userPlaylists?.items?.length == 0 ? "no_playlist_div" : "body_songs"
          }`}
        >
          {

            userPlaylists?.items?.length == 0 ? (
            <h1 className="no_playlist_title">No playlist to show, make sure you have created a playlist in actual spotify app</h1>
            ) 
            :
            (

            searchResults?.length < 1 ? 
                (
                  
                    !searchTerm  ? (
                      userPlaylists?.items?.map((item) => (
                      <BodySongContainer
                        id={item.id}
                        key={item.id}
                        coverImage={item.images}
                        title={item.name}
                      />
                      ))
                    )
                    : (
                      <h1 style={{ whiteSpace: "nowrap" }}>No results found</h1>
                    )
                     
            
                )   
                : 
                (              
                  searchResults?.map((item) => (
                  <BodySongContainer
                    id={item.id}
                    key={item.id}
                    coverImage={item.images}
                    title={item.name}
                  />
                  ))
                )
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Body;
