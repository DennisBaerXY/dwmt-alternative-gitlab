import "./NavBar.sass";
import React from "react";
import Logo from "./Logo.js";

const navBar = () => {
  return (
    <div className='TopBar'>
      <div className='TopBar_Logo'>
        <Logo width={"10rem"} />
      </div>
      <div className='TopBar_Nav'>
        <ul className='TopBar_Nav_ul_seasons'>
          <li>Spring</li>
          <li>Summer</li>
          <li>Autumn</li>
          <li>Winter</li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
