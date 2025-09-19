let tamañoArray = prompt("Inserte el tamaño del array");

let array = [];

let stressDisplay = document.getEelementById("stresstestdisplay");

for (let i = 0; i < tamañoArray; i++) {
  let numero = parseInt(
    prompt("Inserte el numero que quiere en el indice " + i)
  );

  array.push(numero);
  console.log(numero);

}

let arrayDisplay = document.getElementById("array");

arrayDisplay.innerHTML = array.toString();
