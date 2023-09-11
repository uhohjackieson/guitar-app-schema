import { useEffect, useState } from "react";
import { fetchAllTabs } from "../fetching";
import { useNavigate } from "react-router-dom";
import CreateTabForm from "./CreateTabForm";

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
      <CreateTabForm />
      {tabs.map((tab) => {
        return (
          <div key={tab.id}>
            <h4 id="song-text">
              Level: {tab.levelsId} Song: {tab.name}
            </h4>
            <h4 id="song-text">Song: {tab.name}</h4>
            <iframe
              width="665"
              height="374"
              src={tab.url}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

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
