function edadpromedioclase(array){
    let sum = 0;
    for (age of array){
        sum += age;
    }
    return sum / array.length;
}