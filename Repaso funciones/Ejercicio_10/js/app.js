function deleteArrayValue(array, value) {
  return array.filter((item) => item !== value); //filtra el array creando un nuevo array
  //que cumpla con la condicion de que todos sus elementos sean diferentes del valor especificado
}
