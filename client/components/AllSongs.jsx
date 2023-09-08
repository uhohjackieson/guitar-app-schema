import { useEffect, useState } from "react";
import { fetchAllSongs, deleteSong } from "../fetching";
import { useNavigate } from "react-router-dom";
import CreateSongForm from "./CreateSongForm";

export default function AllSongs() {
  const [songs, setSongs] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSongs() {
      const response = await fetchAllSongs();
      setSongs(response);
    }
    fetchSongs();
    console.log(songs);
  }, []);

  // to SEARCH through songs
  const songsToDisplay = searchParam
    ? songs.filter(
        (song) =>
          song.name.toLowerCase().includes(searchParam) ||
          song.artist.toLowerCase().includes(searchParam)
      )
    : songs;

  // DELETE song
  const handleDelete = async (songId) => {
    try {
      await deleteSong(songId);
      const updatedSongs = await fetchAllSongs();
      setSongs(updatedSongs);
    } catch (error) {
      console.error("trouble deleting song", error);
    }
  };

  // this MAPS over all the songs to show each song with level, name, artist and image
  return (
    <div>
      <div>
        <label id="search">Search: </label>
        <input
          type="text"
          placeholder="Search song or artist"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
        />
      </div>
      <div>
        <CreateSongForm setSongs={setSongs} />
      </div>
      {songsToDisplay.map((song) => {
        return (
          <div key={song.id}>
            <h4 id="song-text">Level: {song.levelsId}</h4>
            <h4 id="song-text">Song: {song.name}</h4>
            <h4 id="song-text">Artist: {song.artist}</h4>
            <img id="image" src={song.image} alt={song.name} />
            <div>
              <button
                onClick={() => {
                  navigate(`/songs/${song.songId}`);
                }}
              >
                See Details
              </button>
              <button onClick={() => handleDelete(song.songId)}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
