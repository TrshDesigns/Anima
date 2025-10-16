let saveInput = document.getElementById("saveInput");
let displayer;
let numberx2 = undefined;

displayer = document.getElementById("numberDisplay");

function saveNumber() {
  numberx2 = Number(saveInput.value);
  displayer = document.getElementById("numberDisplay");
  if (isNaN(numberx2)) {
    displayer.innerText = "Ingresa un numero valido";
    numberx2 = 0;
  } else {
    displayer.innerText = "\b El numero ingresado es " + numberx2 ;
  }
}

function doubleTheNumber() {
  numberx2 = numberx2 * 2;
  displayer.innerText = numberx2;
}
