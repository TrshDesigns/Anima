let arrayofcarsn2 = [
  {
    model: "Toyota",
    year: "2020",
    color: "blue",
    phrase: "Innovation for tomorrow",
  },
  { model: "Ford", year: "2015", color: "black", phrase: "Go further" },
  {
    model: "Honda",
    year: "2005",
    color: "silver",
    phrase: "The power of dreams",
  },
  {
    model: "BMW",
    year: "2023",
    color: "white",
    phrase: "The ultimate driving machine",
  },
  {
    model: "Fiat",
    year: "1999",
    color: "purple",
    phrase: "AGUANTANDOCAMIONE"
  },
];

function paintRedFiat(arrayofcars) {
  for (car of arrayofcars) {
    if (car.model === "Fiat") car.color = "red";
    console.log(car);
  }
}

paintRedFiat(arrayofcarsn2);
