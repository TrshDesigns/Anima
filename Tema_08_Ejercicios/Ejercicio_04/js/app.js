let arrayDisplay = document.getElementById("array");

let marcas = [];

arrayDisplay.innerHTML += marcas.toString() + "<br>";
console.log(marcas);

marcas.push("VW", "Audi", "Volvo", "Fiat");

arrayDisplay.innerHTML += marcas.toString() + "<br>";
console.log(marcas);

marcas.shift();

arrayDisplay.innerHTML += marcas.toString() + "<br>";
console.log(marcas);

marcas.splice(1, 1);

arrayDisplay.innerHTML += marcas.toString() + "<br>";
console.log(marcas);

marcas.unshift("Kia");
arrayDisplay.innerHTML += marcas.toString() + "<br>";
