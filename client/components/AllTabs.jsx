import { useEffect, useState } from "react";
import { fetchAllTabs } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function AllSongs() {
  const [songs, setSongs] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchSongs() {
      const response = await fetchAllTabs();
      setSongs(response);
    }
    fetchSongs();
  }, []);

  return (
    <div>
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <h4>
              Song: {song.name} URL: {song.url}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
