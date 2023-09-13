import { useState } from "react";
import { fetchAllTabs, createTab } from "../fetching";
// import { create } from "@mui/material/styles/createTransitions";

export default function CreateTabForm({ tab, setTab }) {
  const [level, setLevel] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  //this will convert regular youtube URL into embedded URL

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("hi", url);

    function urlConverter(url) {
      if (url.includes("watch")) {
        const splitString = url.split("/");
        const finalPiece = splitString[3].split("=")[1];
        const ogUrl = `https://www.youtube.com/embed/${finalPiece}`;

        return ogUrl;
      } else if (url.includes("youtu.be")) {
        const splitString = url.split("/");
        console.log(splitString);
        const finalPiece = splitString[3];
        console.log(finalPiece);
        const ogUrl = `https://www.youtube.com/embed/${finalPiece}`;
        console.log(ogUrl);
        return ogUrl;
      }
    }

    const finalUrl = urlConverter(url);
    console.log(finalUrl);

    const API = await createTab(level, name, finalUrl);
    // console.log(API);
    if (API.success) {
      console.log("New tab: ", API.data.newTab);

      const newTab = API.data.newTab;
      setTab((tabs) => [...tabs, newTab]);

      //   setLevel(null);
      //   setName("");
      //   setUrl("");
    } else {
      setError(API.data.newTab);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button type="submit">Create Tab</button>
      </form>
    </>
  );
}
