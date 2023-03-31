import { NavLink } from "react-router-dom";
import { navMenu } from "../../helpers/navMenu";

import "./style.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        {navMenu.map(({ id, path, title }) => (
          <NavLink key={id} to={path} className="nav-link">
            {title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
