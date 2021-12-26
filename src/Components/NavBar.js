import "./NavBar.sass";
import React from "react";
import Logo from "./Logo.js";

const navBar = ({ displaySeason }) => {
  return (
    <div className='TopBar'>
      <div className='TopBar_Logo'>
        <Logo width={"10rem"} />
      </div>
      <div className='TopBar_Nav'>
        {displaySeason ? (
          <p className='NormalDisplayText'>
            <span
              style={{
                fontSize: "1.3em",
                marginLeft: "1em",
              }}
            >
              {displaySeason}
            </span>
          </p>
        ) : (
          <>
            <p className='NormalDisplayText'>Choose a season:</p>
            <ul className='TopBar_Nav_ul_seasons'>
              <li>Frühling</li>
              <li>Sommer</li>
              <li>Herbst</li>
              <li>Winter</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default navBar;
