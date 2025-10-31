function play(decision) {
  let machineDecision = randomselection();
  let normalizedDecision = decision.toLowerCase();
  switch (normalizedDecision) {
    case "papel":
      switch (machineDecision) {
        case "papel":
          return "empate";
        case "piedra":
          return "ganaste";
        case "tijera":
          return "perdiste";
      }
    case "piedra":
      switch (machineDecision) {
        case "papel":
          return "perdiste";
        case "piedra":
          return "empate";
        case "tijera":
          return "ganaste";
      }
    case "tijera":
      switch (machineDecision) {
        case "papel":
          return "ganaste";
        case "piedra":
          return "perdiste";
        case "tijera":
          return "empate";
      }
  }
}

function randomselection() {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return "papel";
    case 1:
      return "piedra";
    case 2:
      return "tijera";
  }
}
