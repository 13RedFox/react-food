import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="blue lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Food
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="https://github.com/13RedFox/react-food" target="_blank" rel="noreferrer">
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
