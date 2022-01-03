import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li className="divider"></li>
        <li>
          <a href="#!">three</a>
        </li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Fortnite store
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
