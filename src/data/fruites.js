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
		color: "green",
		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 80,
			March: 80,
			April: 80,
			May: 80,
			June: 80,
			July: 60,
			August: 50,
			September: 50,
			October: 80,
			November: 80,
			December: 80,
		},
	},
	{
		name: "Karotten",
		description: "",
		image: "karotten.jpg",
		color: "yellow",
		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 80,
			March: 80,
			April: 80,
			May: 80,
			June: 80,
			July: 60,
			August: 50,
			September: 50,
			October: 80,
			November: 80,
			December: 80,
		},
	},
	{
		name: "Paprika",
		description: "",
		image: "paprika.jpg",
		color: "red",
		inSeason: {
			season: "Sommer",
			months: [7, 8, 9],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 80,
			March: 80,
			April: 80,
			May: 80,
			June: 80,
			July: 60,
			August: 50,
			September: 50,
			October: 80,
			November: 80,
			December: 80,
		},
	},
	{
		name: "Rosenkohl",
		description: "",
		image: "rosenkohl.jpg",
		color: "green",
		inSeason: {
			season: "Autumn",
			months: [10, 11],
		},
		carbonEmissionPerMonthPerKG: {
			January: 100,
			February: 100,
			March: 100,
			April: 100,
			May: 100,
			June: 100,
			July: 100,
			August: 100,
			September: 80,
			October: 30,
			November: 30,
			December: 80,
		},
	},
	{
		name: "Quitte",
		description: "",
		image: "quitte.jpg",
		color: "green",
		inSeason: {
			season: "Autumn",
			months: [10, 11],
		},
		carbonEmissionPerMonthPerKG: {
			January: 100,
			February: 100,
			March: 100,
			April: 100,
			May: 100,
			June: 100,
			July: 100,
			August: 100,
			September: 80,
			October: 30,
			November: 30,
			December: 80,
		},
	},
	{
		name: "Lauch",
		description: "",
		image: "lauch.jpg",
		color: "green",
		inSeason: {
			season: "Autumn",
			months: [8, 9, 10],
		},
		carbonEmissionPerMonthPerKG: {
			January: 80,
			February: 80,
			March: 80,
			April: 80,
			May: 80,
			June: 80,
			July: 80,
			August: 40,
			September: 40,
			October: 60,
			November: 90,
			December: 100,
		},
	},
	{
		name: "Erdbeere",
		description: "",
		image: "erdbeere.jpg",
		color: "red",
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
		image: "champignon.jpg",
		color: "green",
		inSeason: {
			season: "Spring",
			months: [5, 6, 7],
		},
		carbonEmissionPerMonthPerKG: {
			January: 60,
			February: 50,
			March: 50,
			April: 30,
			May: 20,
			June: 20,
			July: 20,
			August: 70,
			September: 100,
			October: 100,
			November: 90,
			December: 70,
		},
	},
];

export default fruites;
