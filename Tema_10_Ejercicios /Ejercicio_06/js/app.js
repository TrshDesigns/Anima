const students = [
  { nombre: "Maria", apellido: "Seregni", calificaciones: [10, 9, 10, 5, 12] },

  { nombre: "Jose", apellido: "Antonio", calificaciones: [5, 7, 4, 2, 1] },
  {
    nombre: "Danilo",
    apellido: "Angeles",
    calificaciones: [12, 12, 12, 12, 12, 12],
  },
];


let studentcount = 0;
let suma = 0;
let studentnotes = [];

function studentpromedium(sumofvalues, amountofvalues) {
  return sumofvalues / amountofvalues;
}

function processnotes(arrayofstudents) {
  for (student of arrayofstudents) {
    console.log("Array de estudiante");
    console.log(student);

    let iteration = 0;
    for (grade of student.calificaciones) {
      suma += grade;
      console.log(
        "Iterando; iteracion n* " +
          iteration +
          " Total suma nota actual " +
          suma
      );
      iteration++;
    }
    console.log("Cantidad de notas registradas " + iteration);
    studentnotes.push({
      id: studentcount,
      totalnotes: suma,
      promedium: studentpromedium(suma, iteration),
    });
    suma -= suma;
    arrayofstudents[studentcount].processednotes = studentnotes[studentcount];
    console.log("STUDENT:" + arrayofstudents[studentcount].nombre.toUpperCase() + ":PROMEDIUM:" + arrayofstudents[studentcount].processednotes.promedium);
    studentcount++;
  }

  console.log("PROCESSED NOTES");
  console.log(studentnotes);
  console.log("INSERTING INTO THE STUDENT DATA");
  console.log(arrayofstudents);

}

processnotes(students);
