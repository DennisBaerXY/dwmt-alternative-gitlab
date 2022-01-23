import React, { useEffect, useState } from "react";
import FrutieData from "../data/fruites";

const userContext = React.createContext({});
const UserContext = (props) => {
	let [seasion, setSeasion] = useState("");
	let [month, setMonth] = useState(1);
	let [selection, setSelection] = useState({});

	let [fruites, setfruites] = useState([]);

	let [fruiteInSeason, setFruiteInSeason] = useState([]);
	let [fruiteNotInSeason, setFruiteNotInSeason] = useState([]);

	useEffect(() => {
		//Init the data
		setfruites(FrutieData);

		//Clean up
		return () => {
			setfruites([]);
		};
	}, []);

	useEffect(() => {
		//Init the data
		setFruiteInSeason(
			fruites.filter((fruite) => fruite.inSeason.months.includes(month))
		);
		setFruiteNotInSeason(
			fruites.filter((fruite) => !fruite.inSeason.months.includes(month))
		);

		//Clean up
		return () => {
			setFruiteInSeason([]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [month]);

	//All the Months in the given seasion of the Northern Hemisphere
	const [monthsInSeasion, setmonthsInSeasion] = useState([]);

	//Checks if the Fruite is in the given seasion
	/**
	 * Checks if the selected month is in the given seasion
	 *
	 * @param {Object} fruite a fruite object
	 * @returns {Boolean} true if the fruite is in the selected seasion
	 */
	function isFruiteInSeason(fruite) {
		return fruite.inSeason.months.includes(month);
	}

	//Calculates the Emissions per 1kg of the given fruite
	/**
	 * Calculates the Emissions per 1kg of the given fruite
	 * and returns the correct emission in seasonal or non-seasonal
	 *
	 *
	 * @param {object} fruite a fruite object
	 * @returns {number} the emissions per 1kg of the given fruite
	 */

	function getEmissionPerKG(fruite) {
		return fruite.carbonEmissionPerMonthPerKG;
	}

	function getEmissionPerKGArray(fruite) {
		let emissions = [];
		for (let month in fruite.carbonEmissionPerMonthPerKG) {
			emissions.push(fruite.carbonEmissionPerMonthPerKG[month]);
		}
		return emissions;
	}

	function getMonthNameFromIndex(index) {
		switch (index) {
			case 1:
				return "January";
			case 2:
				return "February";
			case 3:
				return "March";
			case 4:
				return "April";
			case 5:
				return "May";
			case 6:
				return "June";
			case 7:
				return "July";
			case 8:
				return "August";
			case 9:
				return "September";
			case 10:
				return "October";
			case 11:
				return "November";
			case 12:
				return "December";
			default:
				return "";
		}
	}

	/**
	 *
	 * @param {*} fruite
	 * @param {string} month the month of the year as index (1-12)
	 * @returns
	 */

	function getEmissionPerKGMonth(fruite, month) {
		return fruite.carbonEmissionPerMonthPerKG[getMonthNameFromIndex(month)];
	}

	//Calculates the Emissions per 1kg of the given fruite
	//fruite has a property carbonEmissionPerMonthPerKG with every month as key and the emission as value

	function changeSeasion(newSeasion) {
		setSeasion(newSeasion);
		setmonthsInSeasion(getMonthsInSeasion(newSeasion));
		setMonth(getFirstMonthInSeasion(newSeasion));
	}

	//Returns the Months of a given season
	/**
	 *
	 * @param {string} seasion gets all the Months of a given season
	 * @returns {array} of all the Months of a given season
	 */
	function getMonthsInSeasion(seasion) {
		switch (seasion) {
			case "Frühling":
				return [3, 4, 5];
			case "Sommer":
				return [6, 7, 8];
			case "Herbst":
				return [9, 10, 11];
			case "Winter":
				return [12, 1, 2];

			default:
				return [];
		}
	}

	/**
	 *
	 * @param {string} seasion A string like "Frühling" or "Herbst"
	 * @returns {number} The first month of the given seasion
	 */
	function getFirstMonthInSeasion(seasion) {
		switch (seasion) {
			case "Frühling":
				return 3;
			case "Sommer":
				return 6;
			case "Herbst":
				return 9;
			case "Winter":
				return 12;

			default:
				return 1;
		}
	}

	//Parameter month is a number from 1 to 12
	/**
	 * Returns the associated month of the given number
	 *
	 * @param {number} month number from 1 to 12
	 * @returns {string} the associated month of the given number
	 */
	function getMonthDisplayName(month) {
		let monthNames = [
			"Januar",
			"Februar",
			"März",
			"April",
			"Mai",
			"Juni",
			"Juli",
			"August",
			"September",
			"Oktober",
			"November",
			"Dezember",
		];

		return monthNames[month - 1];
	}

	/**
	 * Changes the month to the given month and sets the seasion to the
	 * seasion of the given month if its needed
	 *
	 * @param {number} newMonth month to change to
	 * @returns {void} changes the month to the given month
	 */
	function changeMonth(newMonth) {
		//Check in what season the month is
		setMonth(newMonth);

		if (newMonth >= 3 && newMonth <= 5) {
			setSeasion("Frühling");
		} else if (newMonth >= 6 && newMonth <= 8) {
			setSeasion("Sommer");
		} else if (newMonth >= 9 && newMonth <= 11) {
			setSeasion("Herbst");
		} else if (newMonth === 12 || newMonth === 1 || newMonth === 2) {
			setSeasion("Winter");
		}
	}

	/**
	 *Gets all the Emissions for a given fruite and each season emission as a Object
	 *
	 * @param {Object} fruite a fruite object
	 * @returns {Object} returns a Object with the average emissions per kg in that seasson
	 */
	function getEmissionOfFruite(fruite) {
		let emissionsPerMonth = [];
		for (let monthKey in fruite.carbonEmissionPerMonthPerKG) {
			emissionsPerMonth.push(fruite.carbonEmissionPerMonthPerKG[monthKey]);
		}

		let seasonEmissions = {
			Frühling: emissionsPerMonth.slice(2, 4).reduce((a, b) => a + b),
			Sommer: emissionsPerMonth.slice(5, 7).reduce((a, b) => a + b),
			Herbst: emissionsPerMonth.slice(8, 10).reduce((a, b) => a + b),
			Winter: emissionsPerMonth
				.slice(0, 1)
				.concat(emissionsPerMonth[11])
				.reduce((a, b) => a + b),
		};

		return seasonEmissions;
	}

	//Is the Value of the Context so it can be used by other components that are wrapped by the Provider
	let options = {
		seasion,
		month,
		selection,
		setSelection,
		changeSeasion,
		changeMonth,
		getMonthDisplayName,
		monthsInSeasion,
		fruiteInSeason,
		fruiteNotInSeason,
		getEmissionPerKG,
		isFruiteInSeason,
		getEmissionOfFruite,
		getEmissionPerKGMonth,
		getEmissionPerKGArray,
	};

	return (
		<userContext.Provider value={options}>
			{/* <App /> */}
			{props.children}
		</userContext.Provider>
	);
};

export { UserContext, userContext };
export default UserContext;
