let notes = [1,4,8,10,2,6,9,1,6,5,10,3,7,8,3,1];

for (note of notes){
    if (note < 4){
        console.log("Reprobado tu nota es " + note);
    } else if (note > 4 && note < 6){
        console.log("Regular  tu nota es " + note);
    } else {
        console.log("Aprobado  tu nota es " + note);
    }
}