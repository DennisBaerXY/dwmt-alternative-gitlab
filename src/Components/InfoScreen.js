import React, { useContext, useEffect, useState } from "react";
import "./InfoScreen.sass";
import InfoGraphic from "./InfoGraphic";

import { userContext } from "../context/userContext";

const InfoScreen = () => {
  const { selection, getEmissionOfFruite } = useContext(userContext);
  const [emissionSeason, setEmissionSeason] = useState({});

  useEffect(() => {
    const emission = getEmissionOfFruite(selection);

    setEmissionSeason(emission);
  }, [selection]);

  return (
    <div className='infoScreen'>
      <div className='headingAndButtonsContainer'>
        <h1 className='screenHeader'>
          Vergleiche den CO2 Verbrauch zu anderen Zeiten
        </h1>

        <div className='buttonsContainer'>
          <div>
            <button className='seasonSwitchButton'>Frühling</button>
            <p>{emissionSeason.Frühling}</p>
          </div>

          <div>
            <button className='seasonSwitchButton'>Sommer</button>
            <p>{emissionSeason.Sommer}</p>
          </div>

          <div>
            <button className='seasonSwitchButton'>Herbst</button>
            <p>{emissionSeason.Herbst}</p>
          </div>

          <div>
            <button className='seasonSwitchButton'>Winter</button>
            <p>{emissionSeason.Winter}</p>
          </div>
        </div>
      </div>

      <div className='infoGraphicContainer'>
        <InfoGraphic name={selection.name} />
      </div>
    </div>
  );
};

export default InfoScreen;
