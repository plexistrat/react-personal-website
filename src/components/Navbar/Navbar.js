import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ scrollTo }) => {
  const [isBurgerOn, setIsBurgerOn] = useState(false);

  function handleBurgerClick() {
    setIsBurgerOn(!isBurgerOn);
  }

  if (isBurgerOn) {
    return (
      <div className="burgerPage">
        <button className="closeButton" onClick={handleBurgerClick}>
          X
        </button>
        <button
          onClick={() => {
            scrollTo("About");
            handleBurgerClick();
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            scrollTo("projects");
            handleBurgerClick();
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            scrollTo("contact");
            handleBurgerClick();
          }}
        >
          Contact
        </button>
      </div>
    );
  }

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
      <button className="burger">
        <CiMenuBurger onClick={handleBurgerClick} />
      </button>
    </div>
  );
};

export default Navbar;
