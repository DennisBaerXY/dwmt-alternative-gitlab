import React, { useContext, useState, useEffect } from "react";
import "./SelectionBox.sass";

import { userContext } from "../context/userContext";
import FruiteDisplayButton from "./FruiteDisplayButton";

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

	return (
		<div className="selectionBox">
			{/*
      <button className='selectVegtableRound'></button>

      <button className='selectVegtableRound'></button>

      <button className='selectVegtableRound'></button>
      */}
			<div className="fruiteButtonsScrollBox">
				{fruiteToDisplay.length > 0 ? (
					fruiteToDisplay.map((fruite, index) => {
						return (
							<FruiteDisplayButton
								key={index}
								fruite={fruite}
								setSelection={setSelection}
							/>
						);
					}) //.map
				) : (
					<div>No Fruites</div>
				)}
			</div>

			<h2 className="boxHeader">{header}</h2>
			<p className="boxDescription">{bodyText}</p>
		</div>
	);
};

export default SelectionBox;
