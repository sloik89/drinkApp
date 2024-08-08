import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="center flex-space-between">
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="newsletter">Newsletter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
