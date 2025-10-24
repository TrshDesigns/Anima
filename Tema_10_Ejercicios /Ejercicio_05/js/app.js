let personas = [
  {
    nombre: "Juan",
    apellido: "Bodoque",
    edad: 28,
  },
  {
    nombre: "Maria",
    apellido: "Antonienta",
    edad: 19,
  },
  {
    nombre: "Cachuflo",
    apellido: "Amarillista",
    edad: 77,
  },
];

let filteredarray = [];

function filtrarPorEdad(arraydepersonas) {
  for (persona of arraydepersonas) {
    if (persona.edad > 25) {
      filteredarray.push(arraydepersonas.pop(persona));
      console.log(filteredarray);
    }
  }
}

filtrarPorEdad(personas);
