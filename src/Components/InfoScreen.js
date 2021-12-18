import React from "react";
import "./InfoScreen.sass";
import InfoGraphic from "./InfoGraphic";

const InfoScreen = () => {
  return (
    <div className='infoScreen'>
      <h1 className='screenHeader'>The largest community of vegtable eaters</h1>
      <div className='infoGraphicContainer'>
        <InfoGraphic name='Erdbeere' />
      </div>
    </div>
  );
};

export default InfoScreen;
