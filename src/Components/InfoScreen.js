import React, { useContext, useEffect } from "react";
import "./InfoScreen.sass";
import InfoGraphic from "./InfoGraphic";

import { userContext } from "../context/userContext";

const InfoScreen = () => {
  const { selection } = useContext(userContext);

  return (
    <div className='infoScreen'>
      <div className='headingAndButtonsContainer'>
        <h1 className='screenHeader'>
          Vergleiche den CO2 Verbrauch zu anderen Zeiten
        </h1>

        <div className='buttonsContainer'>
          <button className='seasonSwitchButton'>Frühling</button>
          <button className='seasonSwitchButton'>Sommer</button>
          <button className='seasonSwitchButton'>Herbst</button>
          <button className='seasonSwitchButton'>Winter</button>
        </div>
      </div>

      <div className='infoGraphicContainer'>
        <InfoGraphic name={selection.name} />
      </div>
    </div>
  );
};

export default InfoScreen;
