import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: [
        {
          name: "first",
          artist: "John",
          album: "superfirst",
          id: 1,
        },
        {
          name: "second",
          artist: "Jack",
          album: "superSecon",
          id: 2,
        },
      ],

      playlistName: "Pleylistyatko",
      playlistTracks: [
        {
          name: "third",
          artist: "Bob",
          album: "thirdio",
          id: 3,
        },
        {
          name: "fourth",
          artist: "Sammy",
          album: "almobi",
          id: 4,
        },
      ],
    };
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((song) => song.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({ playlistTracks: tracks });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}
