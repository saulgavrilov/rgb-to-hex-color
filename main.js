const rInput = document.querySelector("#rInput");
const gInput = document.querySelector("#gInput");
const bInput = document.querySelector("#bInput");
let hexColor = document.querySelector("#hexColor");
const boxColor = document.querySelector("#boxColor");
const boxColorH3 = document.querySelector("#boxColor h3");
const copyBtn = document.querySelector("#copyBtn");

copyBtn.textContent = "Copy";

document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    const nColor = rgb(
      parseInt(rInput.value),
      parseInt(gInput.value),
      parseInt(bInput.value)
    );
    hexColor.textContent = nColor;
    boxColor.style.background = `#${nColor}`;

    if (nColor === "000000") {
      boxColorH3.style.color = "#FFFFFF";
    }
    if (nColor === "FFFFFF") {
      boxColorH3.style.color = "#000000";
    }
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`#${hexColor.textContent}`);
  copyBtn.textContent = "Copied";
  setTimeout(() => {
    copyBtn.textContent = "Copy";
    console.log("c");
  }, 1500);
});

clearInterval();

const rgb = (r, g, b) => {
  const decToHex = (c) => {
    if (c > 255) {
      return "FF";
    } else if (c <= 0) {
      return "00";
    } else {
      return c.toString(16).padStart(2, "0").toUpperCase();
    }
  };

  return decToHex(r) + decToHex(g) + decToHex(b);
};
