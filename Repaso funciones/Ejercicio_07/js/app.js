function tienedosletrasseguidas(palabra) {
  for (let i = 0; i < palabra.length -1; i++) {
    if (palabra[i] === palabra[i + 1] ) {
      return true;
    }
  }
  return false;
}
