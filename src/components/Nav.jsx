import { Link } from "react-router-dom";
function Nav() {
  return (
    <ul>
      <li>
        <Link to="/home">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link to="/skills">
          <button>Skills</button>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <button>Projects</button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button>About</button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </li>
    </ul>
  );
}
export default Nav;
