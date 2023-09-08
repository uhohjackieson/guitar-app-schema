import { Fragment, useEffect, useState } from "react";
import { updateSong, deleteSong } from "../fetching";
import { useLocation, useNavigate } from "react-router-dom";

export default function SongCard({ song }) {
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setName(location.songs.name);
    setArtist(location.songs.artist);
    setImage(location.songs.image);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    async function editSong() {
      const updatedSong = { song: { level, name, artist, image } };
      const editedSong = await updateSong(location.song.songId, updatedSong);
      return editedSong;
    }
    editSong();
  };

  return (
    <Fragment>
      <h1>Update Your Song</h1>
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

      <button onClick={() => deleteSong(location.song.songId)}>Delete</button>

      <button onClick={() => navigate(`/allSongs`)}>Back</button>
    </Fragment>
  );
}
