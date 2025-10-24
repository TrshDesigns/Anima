function existeElemento(arraydepalabras,palabra){
    for (iteraciondepalabra of arraydepalabras){
        if (iteraciondepalabra === palabra){
            console.log("La palabra " + palabra + " Coincide en el array");
            return true; 
        } else {
            console.log("La palabra " + palabra + " No coincide en el array");
            return false;
        }
    }
}