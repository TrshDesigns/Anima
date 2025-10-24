function contadordeletras(palabra){
    let contadordeletras = 0;
    if (typeof(palabra) === "string"){
        for (let i = 0; i<palabra.length; i++){
            if (palabra[i] !== " "){
                contadordeletras++;
            } else {
                console.log("spaces are not counted");
            }
        }
        return contadordeletras;
    } else {
     console.log("Utiliza un array")    
    }
}