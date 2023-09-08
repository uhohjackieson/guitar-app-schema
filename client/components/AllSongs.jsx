import { useEffect, useState } from "react";
import { fetchAllSongs } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function AllSongs() {
  const [songs, setSongs] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSongs() {
      const response = await fetchAllSongs();
      await setSongs(response);
    }
    fetchSongs();
    console.log(songs);
  }, []);

  // to search through songs
  const songsToDisplay = searchParam
    ? songs.filter(
        (song) =>
          song.name.toLowerCase().includes(searchParam) ||
          song.artist.toLowerCase().includes(searchParam)
      )
    : songs;

  // this maps over all the songs to show each song with level, name, artist and image
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
      {songsToDisplay.map((song) => {
        return (
          <div key={song.id}>
            <h4>
              Level: {song.levelsId} Song: {song.name} Artist: {song.artist}
            </h4>
            <img src={song.image} alt={song.name} />
            <div>
              <button
                onClick={() => {
                  navigate(`/songs/${song.songId}`);
                }}
              >
                See Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
