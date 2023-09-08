import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleSong } from "../fetching";

export default function SingleSong() {
  const params = useParams();
  const [song, setSong] = useState({});

  async function getSingleSong() {
    // fetch data from API
    try {
      setSong(await fetchSingleSong(params.songId));
      console.log(song)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSingleSong();
  }, []);

  return (
    <div key={song.songId}>
      <h4>{song.name}</h4>
      <h4>{song.artist}</h4>
    </div>
  );
}
