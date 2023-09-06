import { useEffect, useState } from "react";
import { fetchAllSongs } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function AllSongs() {
  const [songs, setSongs] = useState([]);
  // const navigate = useNavigate();


    useEffect(() => {
      async function fetchSongs() {
        const response = await fetchAllSongs();
        setSongs(response);
      }
      fetchSongs();
  }, []);

  return (
    <div>
      {songs.map((song) => {
        return <div key={song.id}>
          <h4>Song: {song.name} Artist: {song.artist}</h4>
        </div>
      })}

    </div>
  );
}
