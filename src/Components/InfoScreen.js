import React, { useContext, useEffect, useState, useRef } from "react";
import "./InfoScreen.sass";
import InfoGraphic from "./InfoGraphic";
import Screen from "./Screen";
import FruiteEmissionGraph from "./FruiteEmissionGraph";

import { userContext } from "../context/userContext";

const InfoScreen = () => {
	const {
		selection,
		getEmissionOfFruite,
		getEmissionPerKGArray,
		getMonthDisplayName,
	} = useContext(userContext);

	const [emissionsMonthArray, setEmissionsMonthArray] = useState(undefined);
	const [selectedMonths, setSelectedMonths] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
	]);

	useEffect(() => {
		//getEmissionofFruite returns an object with Season as key and emission as value

		const emissionArray = getEmissionPerKGArray(selection);
		//emissionarray is an array of emission per kg per month as integer
		//like [0,0,0,0,0,0,0,0,0,0,0,0]

		//getMonthDisplayName(month) returns the month name as string
		// like month 1 returns "January"

		const months = [];
		for (let i = 0; i < 12; i++) {
			months.push(getMonthDisplayName(i + 1));
		}

		//make an array of 12 months as objects with month name and emission as value
		const monthsWithEmission = months.map((month, index) => {
			return {
				month: month,
				emission: emissionArray[index],
			};
		});

		console.log(monthsWithEmission, "Month Emissions");
		setEmissionsMonthArray(monthsWithEmission);
	}, [selection]);

	const graphContainerRef = useRef();

	return (
		<Screen name={"infoScreen"}>
			<div className="infoScreen">
				<div className="headingAndButtonsContainer">
					<h1 className="screenHeader">
						Vergleiche den CO2 Verbrauch zu anderen Zeiten
					</h1>

					<div className="dynamicGraph" ref={graphContainerRef}>
						{emissionsMonthArray && selectedMonths ? (
							<FruiteEmissionGraph
								passed={{ emissionsMonthArray, selectedMonths }}
							/>
						) : (
							<div>
								<p>Bitte wähle einen Fruite aus um eine Graphik zu sehen.</p>
							</div>
						)}
					</div>
					<div className="buttonsContainer">
						<div>
							<button
								className="seasonSwitchButton"
								onClick={() => {
									setSelectedMonths([3, 4, 5]);
								}}
							>
								Frühling
							</button>
						</div>

						<div>
							<button
								className="seasonSwitchButton"
								onClick={() => setSelectedMonths([6, 7, 8])}
							>
								Sommer
							</button>
						</div>

						<div>
							<button
								className="seasonSwitchButton"
								onClick={() => setSelectedMonths([9, 10, 11])}
							>
								Herbst
							</button>
						</div>

						<div>
							<button
								className="seasonSwitchButton"
								onClick={() => setSelectedMonths([12, 1, 2])}
							>
								Winter
							</button>
						</div>

						<div>
							<button
								className="seasonSwitchButton"
								onClick={() =>
									setSelectedMonths([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
								}
							>
								Jahr
							</button>
						</div>
					</div>
				</div>

				<div className="infoGraphicContainer">
					<InfoGraphic name={selection.name} />
				</div>
			</div>
		</Screen>
	);
};

export default InfoScreen;
