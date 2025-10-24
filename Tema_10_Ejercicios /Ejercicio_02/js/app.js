const alumnos = [
  {
    Edad: 29,
    Curso: "Matematica aplicada",
  },
  {
    Edad: 23,
    Curso: "Tectonica de placas",
  },
  {
    Edad: 28,
    Curso: "Bioinformatica",
  },
  {
    Edad: 21,
    Curso: "Memetica avanzada",
  },
  {
    Edad: 22,
    Curso: "Paleontologia",
  },
];

function returnEachAlumn() {
  for (alumn of alumnos) {
    console.log(alumn.Curso + " " + alumn.Edad);
  }
}

returnEachAlumn();

