import { useEffect, useState } from "react";
import { fetchAllTabs } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function AllSongs() {
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
            <h4>
              Level: {tab.levelsId} Song: {tab.name} URL: {tab.url}
            </h4>
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
