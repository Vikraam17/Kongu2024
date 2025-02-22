import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li className="link">
            <a href="/">useEffect</a>
          </li>
          <li className="link">
            <a href="/useRef">useRef</a>
          </li>
          <li className="link">
            <a href="/useRef2">useRef2</a>
          </li>
          <li className="link">
            <a href="/conditionalRender">Conditional Render</a>
          </li>
          <li className="link">
            <a href="/useMemo">useMemo</a>
          </li>
          <li className="link">
            <a href="/useCallback">useCallBack</a>
          </li> 
          <li className="link">
            <a href="/useReduce">useReduce</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
