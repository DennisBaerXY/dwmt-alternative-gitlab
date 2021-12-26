import React, { useContext, useState, useEffect } from "react";
import "./SelectionBox.sass";

import { userContext } from "../context/userContext";

/*
Example of the fruites array:
 {
    name: "Erbsen",
    months: [7],
    emission: 130,
    emissionUnit: "g/100g",
    color: "green",
    image: "erbsen.jpg",
  },

  


*/
const SelectionBox = ({ header, bodyText, inSeason }) => {
  const { month, fruiteInSeason, fruiteNotInSeason, setSelection } =
    useContext(userContext);

  const [fruiteToDisplay, setFruiteToDisplay] = useState([]);

  useEffect(() => {
    if (inSeason) {
      setFruiteToDisplay(fruiteInSeason);
    } else {
      setFruiteToDisplay(fruiteNotInSeason);
    }
  }, [month, fruiteInSeason, fruiteNotInSeason, inSeason]);

  function displayTheFruite(inSeason) {}
  return (
    <div className='selectionBox'>
      {/*
      <button className='selectVegtableRound'></button>

      <button className='selectVegtableRound'></button>

      <button className='selectVegtableRound'></button>
      */}
      <div className='fruiteButtonsScrollBox'>
        {fruiteToDisplay.length > 0 ? (
          fruiteToDisplay.map((fruite, index) => (
            <button
              key={index}
              className='selectVegtableRound'
              style={{ backgroundColor: fruite.color }}
              onClick={() => {
                setSelection(fruite);
              }}
            >
              {fruite.name}
            </button>
          )) //.map
        ) : (
          <div>No Fruites</div>
        )}
      </div>

      <h2 className='boxHeader'>{header}</h2>
      <p className='boxDescription'>{bodyText}</p>
    </div>
  );
};

export default SelectionBox;
