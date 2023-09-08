import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleTab } from "../fetching";

export default function SingleTab() {
  const params = useParams();
  const [tab, setTab] = useState({});

  async function getSingleTab() {
    // fetch data from API
    try {
      setTab(await fetchSingleTab(params.tabId));
      console.log(tab);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSingleTab();
  }, []);

  return (
    <div key={tab.tabId}>
      <h4>{tab.name}</h4>
      <h4>{tab.url}</h4>
    </div>
  );
}
