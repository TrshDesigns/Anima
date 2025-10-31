let isGreen = true;

function changeColor() {
  const body = document.body;
  isGreen = !isGreen;
  body.style.backgroundColor = isGreen ? "#00E676" : "#F50057";
}