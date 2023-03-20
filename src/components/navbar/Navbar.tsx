import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-pages">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
        <div className="nav-user">
        <NavLink to="/form" className="nav-link form-account" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
