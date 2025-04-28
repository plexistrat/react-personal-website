import React from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ scrollTo }) => {
  return (
    <div className="navbar">
      <a href="/">
        <img src="./logo.png" alt="" />
      </a>

      <div className="buttons">
        <button onClick={() => scrollTo("About")}> About</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
      <CiMenuBurger className="burger" />
    </div>
  );
};

export default Navbar;
