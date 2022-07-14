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

// * SOUNDS

// Game music 
const gameAudio = new Audio("./sounds/AquaticAmbience.mp3");
gameAudio.volume = 0.1;
gameAudio.preload = "auto";
gameAudio.load();

// BraveFish Collision
const screamAudio = new Audio("./sounds/Scream.mp3");
screamAudio.volume = 0.2;
screamAudio.preload = "auto";
screamAudio.load();

// Splash 
const splashAudio = new Audio("./sounds/WaterSplash.mp3");
splashAudio.volume = 0.2;
splashAudio.preload = "auto";
splashAudio.load();

// Special Guest 

const specialGuestAudio = new Audio("./sounds/specialGuestSound.mp3");
specialGuestAudio.volume = 0.2;
specialGuestAudio.preload = "auto";
specialGuestAudio.load();

// Oxygen bottle pick-up
const oxygenBottleAudio = new Audio("./sounds/oxygenPickup.mp3");
oxygenBottleAudio.volume = 0.2;
oxygenBottleAudio.preload = "auto";
oxygenBottleAudio.load();

// Blowfish Collision
const blowfishAudio = new Audio("./sounds/blowfishCollisionSound.mp3");
blowfishAudio.volume = 0.2;
blowfishAudio.preload = "auto";
blowfishAudio.load();


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
  gameAudio.load();
  gameAudio.play();
  gameAudio.loop = true;


};

const pauseGame = () => {
  if (game.isGamePaused === false) {
    game.isGamePaused = true;
    gameAudio.pause();
  } else {
    game.isGamePaused = false;
    game.gameLoop();
    gameAudio.play();
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
    game.player.keyPressed.downKey = false;
  }
});
