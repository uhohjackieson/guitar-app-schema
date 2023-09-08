import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nav-bar-container">
      <Link to="/allSongs">All Songs</Link>
      <Link to="/allTabs">All Tabs</Link>
    </div>
  );
}
