import { NavLink } from "react-router-dom";

export const StyledNavBar = () => {
  return (
    <nav className="primary-nav">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/courses/1">
        course 1
      </NavLink>
      <NavLink className="nav-link" to="/pricing">
        princing
      </NavLink>
      <NavLink className="nav-link" to="/pricing/free">
        pricing free
      </NavLink>
      <NavLink className="nav-link" to="/navigateDemo">
        useNavigate demo
      </NavLink>
    </nav>
  );
};
