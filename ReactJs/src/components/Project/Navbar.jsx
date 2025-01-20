import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Import CSS for styling (you can create this file)

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/state">
              useState
            </Link>
          </li>
          <li>
            <Link className="link" to="/effect">
              useEffect
            </Link>
          </li>
          <li>
            <Link className="link" to="/context">
              useContext
            </Link>
          </li>
          <li>
            <Link className="link" to="/ref">
              useRef
            </Link>
          </li>
          <li>
            <Link className="link" to="/memo">
              useMemo
            </Link>
          </li>
          <li>
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
