import React from "react";
import "./Navbar.css";

const Navbar = ({ scrollTo }) => {
  return (
    <div className="navbar">
      <a href="/">
        <img style={{ width: "60px" }} src="./sakislogo.jpeg" alt="" />
      </a>

      <div className="buttons">
        <button onClick={() => scrollTo("About")}> About</button>
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
