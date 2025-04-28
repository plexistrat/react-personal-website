import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = ({ scrollTo }) => {
  const [isBurgeOn, setIsBurgerOn] = useState(false);

  const handleClick = () => {
    setIsBurgerOn(true);
  };

  // if (!setIsBurgerOn)
  //   return (
  //     <div>
  //       <a href="/">Home</a>
  //       <a href="/About">About</a>
  //       <a href="">Projects</a>
  //       <a href="">Contract</a>
  //     </div>
  //   );

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
      {/* <button className="burger" onClick={handleClick} style={{}}>
        <CiMenuBurger />
      </button> */}
    </div>
  );
};

export default Navbar;
