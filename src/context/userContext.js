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

  function isFruiteInSeason(fruite) {
    return fruite.months.includes(month);
  }

  function getEmissionPerKG(fruite) {
    let inSeason = isFruiteInSeason(fruite);
    if (inSeason) {
      return (fruite.inSeason.emission * 10) / 1000;
    } else {
      return (fruite.outOfSeason.emission * 10) / 1000;
    }
  }
  function changeSeasion(newSeasion) {
    setSeasion(newSeasion);
    setmonthsInSeasion(getMonthsInSeasion(newSeasion));
    setMonth(getFirstMonthInSeasion(newSeasion));
  }

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
