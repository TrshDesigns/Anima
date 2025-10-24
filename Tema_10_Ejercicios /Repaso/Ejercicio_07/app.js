let boolarray = [
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  false,
  false,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
];

let ntrue = 0;
let nfalse = 0;
for (boolean of boolarray){
    if (boolean === true){
        ntrue++;
        console.log("procesado valor " + boolean + " ahora el contador esta en " + ntrue + " valores verdaderos")
    } else {
        nfalse++;

        console.log("procesado valor " + boolean + " ahora contador esta en " + nfalse+ " valores falsos")
    }
}

console.log("__________*_____________*___________")
console.log("El numero de valores verdaderos en el array es " + ntrue);
console.log("El numero de valores falsos en el array es " + nfalse);