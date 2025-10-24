function esparoimpar(arraydenumeros){
    for (numero of arraydenumeros){
        if(numero % 2 === 0){
            console.log(numero + " Es par")
        } else {
            console.log(numero + " Es impar")
        }
    }
}