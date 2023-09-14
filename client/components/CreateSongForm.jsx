import { useState } from "react";
import { fetchAllSongs, createSong } from "../fetching";
// import { create } from "@mui/material/styles/createTransitions";

export default function CreateSongForm({ song, setSong }) {
  const [level, setLevel] = useState(null);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const API = await createSong(level, name, artist, image);
    if (API.success) {
      console.log("New song: ", API.data.newSong);

      const newSong = API.data.newSong;
      setSong((songs) => [...songs, newSong]);

      setLevel(null);
      setName("");
      setArtist("");
      setImage("");
    } else {
      setError(API.data.newSong);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="level"
          autoFocus
          placeholder="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <input
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Create Song</button>
      </form>
    </>
  );
}
