let displayer = document.getElementById("displayer"); //Obtenemos elemento displayer para mostrar resultados de numeros multiplos del numero insertado
let numberinput = document.getElementById("numberInput"); //input que nos permite colocar el numero que quieramos
let obtainednumber; //numbero que se obtendra del number input.value to int
let numbers = []; //el array que almacenara cada uno de estos numeros uno por uno 

function saveNumber() { //save number se ejecuta on change de el input value
  obtainednumber = parseInt(numberinput.value);  //el numero obtenido viene del numberinput value to int
  console.log(obtainednumber); //lo logeamos 
}

function fillArrayto(obtainednumber) { //fill arrayto se ejecuta antes de comenzar a contar los numeros con la condicion de modulo 4
  if (obtainednumber < 0) { //si el numero es menor a 0 o negativo se coloca un aviso de que trabajamos solo los numeros positivos
    displayer.innerText = "Insert a positive value";
  } else { // si el numbero que nos dio el input value transformado a int es mayor a 0 o 0
    numbers = [];// reseteamos el array numbers
    for (let i = 0; i <= obtainednumber; i++) { //inicializamos a 0 el contador y loopeamos hasta el numero obtenido
      numbers.push(i); //metemos el numero al array
    }
  }
  return numbers; //la funcion devuelve el array numbers
}

function startCounting() {
    displayer.innerText = ""; //el texto del displayer debe estar vacio cuando comenzamos a contar por si se habia corrido antes el programa
    saveNumber(); //guardamos el numero ingresado cuando le damos al startcounting btn
    fillArrayto(obtainednumber); //llenamos el array con los numeros
  for (number of numbers) { //para cada numero que evaluaremos de el array numeros
    if (number % 4 === 0) { //evaluaremos que su modulo cuando se divida entre 4 sea 0
      console.log(number + "its multiple of 4"); //en caso de que lo sea lo mostramos con el mensaje de que ese numero si es multiplo
      displayer.innerText += number + "\n"; //lo mismo en el displayer
    } else { //en caso de que el modulo sea diferente de 0
      console.log(number + "its not multiple of 4"); //logeamos que no es un multiplo sin mostrarlo en el displayer
    }
  }
}
