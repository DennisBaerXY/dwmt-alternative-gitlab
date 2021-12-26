import React, { useContext, useEffect } from "react";
import "./InfoScreen.sass";
import InfoGraphic from "./InfoGraphic";

import { userContext } from "../context/userContext";

const InfoScreen = () => {
  const { selection } = useContext(userContext);

  return (
    <div className='infoScreen'>
      <h1 className='screenHeader'>The largest community of vegtable eaters</h1>
      <div className='infoGraphicContainer'>
        <InfoGraphic name={selection.name} />
      </div>
    </div>
  );
};

export default InfoScreen;
