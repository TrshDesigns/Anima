let paragraph = document.querySelector("p");
let box = document.querySelector("div");
box.style.borderRadius = "10px";
box.style.padding = "5px";
let isHidden = false;

function switchbtn() {
  if (paragraph) {
  isHidden = !isHidden;
  paragraph.style.display = isHidden ? "none" : "block";
  box.style.border = isHidden ? "3px solid red": "1px solid green";
  }
}

switchbtn();