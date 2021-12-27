import React from "react";

import { useState, useEffect } from "react";
import FrutieData from "../data/fruites";
const userContext = React.createContext({});
const UserContext = (props) => {
  let [seasion, setSeasion] = useState("");
  let [month, setMonth] = useState(1);
  let [selection, setSelection] = useState({});

  let [fruites, setfruites] = useState([]);

  let [fruiteInSeason, setFruiteInSeason] = useState([]);
  let [fruiteNotInSeason, setFruiteNotInSeason] = useState([]);

  const seasons = {
    Frühling: [3, 4, 5],
    Sommer: [6, 7, 8],
    Herbst: [9, 10, 11],
    Winter: [12, 1, 2],
  };
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
      fruites.filter((fruite) => fruite.months.includes(month))
    );
    setFruiteNotInSeason(
      fruites.filter((fruite) => !fruite.months.includes(month))
    );

    //Clean up
    return () => {
      setFruiteInSeason([]);
    };
  }, [month]);

  //All the Months in the given seasion of the Northern Hemisphere
  const [monthsInSeasion, setmonthsInSeasion] = useState([]);

  //Checks if the Fruite is in the given seasion
  function isFruiteInSeason(fruite) {
    return fruite.months.includes(month);
  }

  //Calculates the Emissions per 1kg of the given fruite

  function getEmissionPerKG(fruite) {
    let inSeason = isFruiteInSeason(fruite);
    if (inSeason) {
      // g/100g = kg/KG * 10 / 1000 -> 0.01
      return fruite.inSeason.emission * 0.01;
    } else {
      return fruite.outOfSeason.emission * 0.01;
    }
  }
  function getEmissionPerKGMonth(fruite, month) {
    if (fruite.months.includes(month)) {
      return fruite.inSeason.emission * 0.01;
    } else {
      return fruite.outOfSeason.emission * 0.01;
    }
  }
  function changeSeasion(newSeasion) {
    setSeasion(newSeasion);
    setmonthsInSeasion(getMonthsInSeasion(newSeasion));
    setMonth(getFirstMonthInSeasion(newSeasion));
  }

  //Returns the Months of a given season
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

  //Month as number from 1 to 12
  //season names in german

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

  //Calculates the Emissions of the Fruite in every season and returns an array
  function getEmissionOfFruite(fruite) {
    let emissionsPerMonth = [];

    for (let month = 1; month <= 12; month++) {
      emissionsPerMonth.push(getEmissionPerKGMonth(fruite, month));
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
