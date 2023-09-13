import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="nav-bar-container">
      <Link id="all-songs" to="/allSongs">
        All Songs
      </Link>
      <Link id="all-tabs" to="/allTabs">
        All Tabs
      </Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
