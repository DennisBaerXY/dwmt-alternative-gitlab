/*

Data for fruits.
Juli: 
Erbsen
Karotten
Paprika


Oktober:
Rosenkohl
Quitte
Lauch


Mai:
Erdbeere
champignon



*/

//Mockup Data

/*

  Data format:
  {
    "name": "",
    "description": "",
    "image": "", //# if no image is given, the name will be used
	"infographic": "",
    "color": "",
    
    inSeason: 
      {
        "season": "",
        "months": [
          1,4,7,10
        ]
      }
    ,
    cabonEmissionPerMonthPerKG: {
      January: 20,
      February:60,
      March: 80,
      April: 30,
      May: 40,
      June: 50,
      July: 60,
      August: 70,
      September: 80,
      October: 90,
      November: 70,
      December: 40
    },

      
      



*/

let fruites = [
	{
		name: "Erbsen",
		description: "",
		image: "erbsen.jpg",
		infographic: "#",
		color: "green",
		infoGraphic: "Info_Erbse.jpg",
		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 90,
			February: 90,
			March: 80,
			April: 75,
			May: 60,
			June: 30,
			July: 30,
			August: 40,
			September: 70,
			October: 75,
			November: 80,
			December: 90,
		},
	},
	{
		name: "Karotten",
		description: "",
		image: "karotten.jpg",
		color: "yellow",
		infoGraphic: "Info_Karotte.jpg",

		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 80,
			March: 75,
			April: 60,
			May: 50,
			June: 30,
			July: 20,
			August: 20,
			September: 30,
			October: 30,
			November: 60,
			December: 75,
		},
	},
	{
		name: "Paprika",
		description: "",
		image: "paprika.jpg",
		color: "red",
		infoGraphic: "Info_Paprika.jpg",

		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 90,
			March: 80,
			April: 75,
			May: 70,
			June: 60,
			July: 35,
			August: 20,
			September: 20,
			October: 30,
			November: 55,
			December: 70,
		},
	},
	{
		name: "Rosenkohl",
		description: "",
		image: "Rosenkohl.jpg",
		color: "green",
		infoGraphic: "Info_Rosenkohl.jpg",

		inSeason: {
			season: "Autumn",
			months: [10, 11],
		},
		carbonEmissionPerMonthPerKG: {
			January: 20,
			February: 30,
			March: 35,
			April: 50,
			May: 70,
			June: 75,
			July: 90,
			August: 80,
			September: 60,
			October: 35,
			November: 30,
			December: 20,
		},
	},
	{
		name: "Quitte",
		description: "",
		image: "quitten.jpg",
		color: "green",
		infoGraphic: "Info_Quitte.jpg",

		inSeason: {
			season: "Autumn",
			months: [10, 11],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 100,
			March: 90,
			April: 85,
			May: 85,
			June: 75,
			July: 70,
			August: 40,
			September: 20,
			October: 20,
			November: 30,
			December: 60,
		},
	},
	{
		name: "Lauch",
		description: "",
		image: "lauch.jpg",
		color: "green",
		infoGraphic: "Info_Lauch.jpg",

		inSeason: {
			season: "Autumn",
			months: [8, 9, 10],
		},
		carbonEmissionPerMonthPerKG: {
			January: 40,
			February: 35,
			March: 25,
			April: 30,
			May: 40,
			June: 35,
			July: 35,
			August: 40,
			September: 25,
			October: 35,
			November: 30,
			December: 40,
		},
	},
	{
		name: "Erdbeere",
		description: "",
		image: "erdbeere.jpg",
		color: "red",
		infoGraphic: "Info_Erdbeere.jpg",
		inSeason: {
			season: "Spring",
			months: [4, 5, 6],
		},
		carbonEmissionPerMonthPerKG: {
			January: 90,
			February: 80,
			March: 70,
			April: 50,
			May: 20,
			June: 20,
			July: 20,
			August: 40,
			September: 50,
			October: 70,
			November: 90,
			December: 100,
		},
	},
	{
		name: "champignon",
		description: "",
		image: "champion.jpg",
		color: "green",
		infoGraphic: "Info_Champignon.jpg",

		inSeason: {
			season: "Spring",
			months: [5, 6, 7],
		},
		carbonEmissionPerMonthPerKG: {
			January: 35,
			February: 40,
			March: 25,
			April: 30,
			May: 20,
			June: 20,
			July: 20,
			August: 25,
			September: 40,
			October: 30,
			November: 35,
			December: 40,
		},
	},
];

export default fruites;
