import { useState } from "react";
import { fetchAllSongs, createSong } from "../fetching";

export default function CreateSongForm({ setSongs }) {
  const [level, setLevel] = useState(0);
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    async function makeSong() {
      const newSong = {
        level: level,
        name: name,
        artist: artist,
        image: image,
      };
      const result = await createSong(newSong);
      const updateSongs = await fetchAllSongs();
      setSongs(updateSongs.song);
      return result;
    }
    makeSong();

    setLevel(0);
    setName("");
    setArtist("");
    setImage("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
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
