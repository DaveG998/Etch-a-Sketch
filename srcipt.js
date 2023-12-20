const divContainer = document.querySelector(".container");
const containerWidth = 960;
let squaresPerSide = 16;

function createGrid(squaresPerSide) {
  const boxWidth = containerWidth * (1 / squaresPerSide);

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxWidth}px`;
    divContainer.appendChild(box);

    box.addEventListener("mouseover", () => {
      const rgb1 = Math.floor(Math.random() * 256);
      const rgb2 = Math.floor(Math.random() * 256);
      const rgb3 = Math.floor(Math.random() * 256);

      box.style.backgroundColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    });
  }
}

const btnSquarePerSide = document.querySelector("button");

btnSquarePerSide.addEventListener("click", () => {
  squaresPerSide = +prompt("Enter number of squares per side (max 100)", "");
  squaresPerSide = squaresPerSide > 100 ? 100 : squaresPerSide;

  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }
  createGrid(squaresPerSide);
});

createGrid(squaresPerSide);
