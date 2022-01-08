const rInput = document.querySelector("#rInput");
const gInput = document.querySelector("#gInput");
const bInput = document.querySelector("#bInput");
const boxColor = document.querySelector("#boxColor");
const boxColorH3 = document.querySelector("#boxColor h3");
const copyBtn = document.querySelector("#copyBtn");
const title = document.querySelector(".title");
let hexColor = document.querySelector("#hexColor");

document.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 || e.which === 13) {
    const nColor = rgb(
      parseInt(rInput.value),
      parseInt(gInput.value),
      parseInt(bInput.value)
    );
    hexColor.textContent = nColor;
    boxColor.style.background = `#${nColor}`;
    checker(nColor);
  }
});

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

// Checker
const checker = (cc) => {
  if (cc === "000000") {
    boxColorH3.style.color = "#FFFFFF";
  }
  if (cc === "FFFFFF") {
    boxColorH3.style.color = "#000000";
  }
};

copyBtn.addEventListener("click", () => {
  // Copying the hex color to clipboard including the #
  navigator.clipboard.writeText(`#${hexColor.textContent}`);

  copyBtn.textContent = "Copied";
  copyBtn.style.background = "#27AE60";
  copyBtn.style.color = "#FFFFFF";
  setTimeout(() => {
    copyBtn.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
        ></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>
      `;
    copyBtn.style.background = "#FFFFFF";

    // Generating new color for the copy button
    const nColor = rgb(
      parseInt(rInput.value),
      parseInt(gInput.value),
      parseInt(bInput.value)
    );
    hexColor.textContent = nColor;
    copyBtn.style.color = `#${nColor}`;
    checker(nColor);

    // Choosing new color after copying the previous color
    randomColor();
  }, 1500);
});

// Random Color
const randomColor = () => {
  rInput.value = Math.floor(Math.random(0) * 255);
  gInput.value = Math.floor(Math.random(0) * 255);
  bInput.value = Math.floor(Math.random(0) * 255);
  const nColor = rgb(
    parseInt(rInput.value),
    parseInt(gInput.value),
    parseInt(bInput.value)
  );
  hexColor.textContent = nColor;
  boxColor.style.background = `#${nColor}`;
  checker(nColor);
};

title.addEventListener("click", randomColor);

randomColor();
