import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
function Navigation() {
  return (
    <div className="navi">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Aout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
