let wordarray = ["Hormiga", "Tortuga", "Congelar", "Pez", "Guiso"];
let fivelettersarray = [];
for (word of wordarray) {
  if (word.length < 5) {
    fivelettersarray.push(word);
    console.log(word);
  }
}

