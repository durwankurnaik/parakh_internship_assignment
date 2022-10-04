import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">Durwankur Naik</div>
      <div className="right">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className="buttons">Login</li>
        <li className="buttons">Sign up</li>
      </div>
    </nav>
  );
};

export default Navbar;
