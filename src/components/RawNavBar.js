import { Link } from "react-router-dom";

export const RawNavbar = () => {
  return (
    <nav className="primary-nav">
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/courses/1">
        course 1
      </Link>
      <Link className="nav-link" to="/pricing">
        princing
      </Link>
      <Link className="nav-link" to="/pricing/free">
        pricing free
      </Link>
    </nav>
  );
};
