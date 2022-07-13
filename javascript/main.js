// State management and DOM manipulation

// * GLOBAL VARIABLES

// Canvas & ctx section
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// DOM elements

const startScreenDOM = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreenDOM = document.querySelector("#game-over-screen");
const restartBtn = document.querySelector("#restart-btn");
const gameScreenDOM = document.querySelector("#game-screen");
const pauseBtn = document.querySelector("#pause-btn");
const scoreDOM = document.querySelector(".score");
const oxigenDOM = document.querySelector(".oxigen");

// Game global variables
let game; // create the game globally so all my code can access it

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("triying to start the game");

  startScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";
  gameScreenDOM.style.display = "block";
  canvas.style.display = "block";

  // Game starts
  game = new Game();
  console.log(game);
  game.gameLoop();
};

const pauseGame = () => {
  if (game.isGamePaused === false) {
    game.isGamePaused = true;
  } else {
    game.isGamePaused = false;
    game.gameLoop();
  }
};

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
pauseBtn.addEventListener("click", pauseGame);

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.player.keyPressed.upKey = true;
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    console.log("s key pressed");
    game.player.keyPressed.downKey = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.player.keyPressed.upKey = false;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    console.log("s key pressed");
    game.player.keyPressed.downKey = false;
  }
});
