function random() {
  return Math.round(Number(Math.random() * 100));
}

function runaset() {
    let i = 0;
    while (i < 1000){
        i++;
        let currentnumber = random();
        console.log(currentnumber);
        if(currentnumber === 100){
            console.log("The number is 100 the function works properly");
            console.log("___________*__________*________*________")
            console.log("The number of iterations until found is " + i) ;
            break;
        }
    }
    console.log("Se generaron 100 numeros aleatorios");
}