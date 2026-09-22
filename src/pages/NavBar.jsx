import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to="/">Movie App</Link>
      </div>

      <div className="navbar_right">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}

export default NavBar;
