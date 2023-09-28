import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="App">
      <header>
        <Link className="site-logo" to="/">
          One Shot
        </Link>
      </header>
    </div>
  );
}
