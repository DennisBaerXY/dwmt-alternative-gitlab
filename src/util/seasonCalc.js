//Calculate in what season the month is

//Seasons of the Northern Hemisphere
//month is a number from 1 to 12

export function getSeasonOfMonth(month) {
  switch (true) {
    case month >= 3 && month <= 5:
      return "Frühling";
    case month >= 6 && month <= 8:
      return "Sommer";
    case month >= 9 && month <= 11:
      return "Herbst";
    case month === 12 || month === 1 || month === 2:
      return "Winter";

    default:
      return "";
  }
}
