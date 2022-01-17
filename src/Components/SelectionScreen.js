import React, { useContext } from "react";
import Screen from "./Screen";
import SelectionBox from "./SelectionBox";
import "./SelectionScreen.sass";
import { userContext } from "../context/userContext";
import ChangeMonthToButton from "./Buttons/ChangeMonthToButton";

const SelectionScreen = () => {
	const { monthsInSeasion } = useContext(userContext);
	return (
		<Screen>
			<div className="selectionScreen" id="SelectionPos">
				<div className="flexContainerRow">
					<h1 className="selectionScreenHeader">Iss mit der Jahreszeit</h1>
					<div className="monthSelectionBox">
						<h1>Monatsauwahl</h1>
						<div>
							{monthsInSeasion.map((month, index) => (
								<ChangeMonthToButton key={index} month={month} />
							))}
						</div>
					</div>
				</div>
				<div className="flexContainerRow">
					<SelectionBox
						header={"Saisonale Produkte"}
						bodyText={
							"Saisonales Obst und Gemüse sind Produkte, die von Natur aus zu bestimmten Zeiten im Jahr reif sind und geerntet werden können. Gemeint sind hierbei Produkte, die auch aus der Region stammen, in der sie verkauft werden."
						}
						inSeason={true}
					/>
					<SelectionBox
						header={"Nicht Saisonale Produkte"}
						bodyText={
							"Wenn Lebensmittel zur einer bestimmten Zeit nicht  im Freiland wachsen können und so entweder importiert oder in beheitzten Gewächshäuser herangezüchtet werden müssen sind es nicht saisonale Produkte."
						}
						inSeason={false}
					/>
				</div>
			</div>
		</Screen>
	);
};

export default SelectionScreen;
