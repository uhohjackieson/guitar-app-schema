import "./App.css";
import { Link, Routes, Route } from "react-router-dom"; 
import AllSongs from "../components/AllSongs";
import AllTabs from "../components/AllTabs";

// just put navbar and mainSection here

function App() {
  return (
    <>
    <div>
      <div>
        <h1></h1>
        <h2>
          <Link to="/allSongs">View All Songs</Link>
          <Link to="/allTabs">View All Tabs</Link>
          {/* <AllSongs /> */}
        </h2>
      </div>
    </div>

    <div>
      <Routes>
          <Route path="/allSongs" element={<AllSongs/>} />
          <Route path="/allTabs" element={<AllTabs/>} />
      </Routes>
    </div>
    
    </>
    
  );
}

export default App;
