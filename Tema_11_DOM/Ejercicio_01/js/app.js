function searchTitle() {
  const h1 = document.querySelector("h1");
  if (h1) {
    alert("THERE IS AN H1 ELEMENT");
  } else {
    alert("THERE ISN'T AN H1 ELEMENT IN YOUR HTML");
  }
}

function insertTitle() {
  let div = document.getElementById("h1container");

  if (!div) {
    alert("Error: No se encontró el elemento con id='h1container'");
    return;
  }

  let h1 = document.createElement("h1");
  h1.innerText = "NYA";
  div.appendChild(h1);
}

function modifyTitle() {
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.style.fontFamily = "Times New Roman";
  } else {
    alert("No hay <h1> para modificar");
  }
}