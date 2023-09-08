import { useEffect, useState } from "react";
import { fetchAllTabs } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function AllTabs() {
  const [tabs, setTabs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTabs() {
      const response = await fetchAllTabs();
      setTabs(response);
    }
    fetchTabs();
  }, []);

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <div key={tab.id}>
            <h4 id="song-text">
              Level: {tab.levelsId} Song: {tab.name}
            </h4>
            <h4 id="song-text">Song: {tab.name}</h4>
            <iframe width="420" height="315" src={tab.url}></iframe>
            <button
              onClick={() => {
                navigate(`/tabs/${tab.tabId}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
