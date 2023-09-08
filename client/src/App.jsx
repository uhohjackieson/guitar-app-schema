import "./App.css";
import { Link, Routes, Route, Router } from "react-router-dom";
import AllSongs from "../components/AllSongs";
import AllTabs from "../components/AllTabs";
import SingleSong from "../components/SingleSong";
import Navbar from "../components/Navbar";
import SingleTab from "../components/SingleTab";

// just put navbar and mainSection here

function App() {
  return (
    <>
      <div>
        <div>
          <h1></h1>
          <h2>
            <Navbar />
          </h2>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/allSongs" element={<AllSongs />} />
          <Route path="/allTabs" element={<AllTabs />} />
          <Route path="/songs/:songId" element={<SingleSong />}></Route>
          <Route path="/tabs/:tabId" element={<SingleTab />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
