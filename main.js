const currentCubeSide = document.getElementById("rubiksCube");

let c = document.getElementById("rubiksCube");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, 350, 350);
ctx.stroke();

const cube  = [1, 2, 3, 4, 5, 6];

let lastFrontFace = -1;

function setface() {
  const currentFrontFace = cube[0];
  if (lastFrontFace !== -1) {
      currentCubeSide.classList.remove(`face${lastFrontFace}`);
  }
  currentCubeSide.classList.add(`face${currentFrontFace}`);
  lastFrontFace = currentFrontFace;
}

function leftOperation(cube) {
  cube.splice(3,0,cube.shift());
  setface();
}

function rightOperation(cube) {
  cube.splice(0,0,cube.splice(3,1)[0]);
  setface();
}
  
function topOperation(cube) {
  swap(cube, 2, 5);
  swap(cube, 2, 0);
  swap(cube, 2, 4);
  setface();
}
  
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bottomOperation(cube) {
  swap(cube, 2, 4);
  swap(cube, 2, 0);
  swap(cube, 2, 5);
  setface();
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
