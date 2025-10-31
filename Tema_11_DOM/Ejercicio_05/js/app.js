function formatp() {
  let allp = document.querySelectorAll("p");
  console.log(allp);
  for (p of allp) {
    p.style.fontSize = "2rem";
    p.style.color = "green";
  }
}

function lorem() {
  let allp = document.querySelectorAll("p");
  for (p of allp) {
    p.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  }
}

function alertRepetido(s, n) {
  for (let i = 0; i < n; i++) {
    alert(s);
  }
}

function alarma() {
  const body = document.body;
  let rojo = true;
  let veces = 0;
  const max = 10;

  const intervalo = setInterval(() => {
    body.style.backgroundColor = rojo ? "red" : "white";
    rojo = !rojo;
    veces++;

    if (veces >= max) {
      clearInterval(intervalo);
      body.style.backgroundColor = "white";
    }
  }, 500);
}
