class Game {
  constructor() {
    // Game properties

    // in-game background
    this.bg = new Image();
    this.bg.src = "./images/deep-sea-background.png";

    //player
    this.player = new Player();

    this.blowFishArr = [];
    this.oxigenArr = [];
    this.specialGuestArr = [];

    this.score = 1;
    this.oxigen = 100;

    this.bonusCounter = 0;
    this.framesCounter = 0;

    this.isGameOn = true;
    this.isGamePaused = false;
  }

  // Game methods and functions

  // Blowfish

  removeBlowfishFromArray = () => {
    if (this.blowFishArr[0].x + this.blowFishArr[0].w < 0) {
      this.blowFishArr.shift();
    }
  };

  spawnBlowfish = () => {
    if (
      this.blowFishArr.length === 0 ||
      this.blowFishArr[this.blowFishArr.length - 1].x < canvas.width * 0.6
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newBlowfish = new Blowfish(randomPositionY);
      this.blowFishArr.push(newBlowfish);
    }
  };

  playerBlowfishCollision = () => {
    this.blowFishArr.forEach((eachBlowfish) => {
      // Check if each of the blowfish collision with player

      if (
        eachBlowfish.x < this.player.x + this.player.w * 0.8 &&
        eachBlowfish.x + eachBlowfish.w * 0.8 > this.player.x &&
        eachBlowfish.y < this.player.y + this.player.h / 2 &&
        eachBlowfish.h / 2 + eachBlowfish.y > this.player.y
      ) {
        this.oxigen -= 15;
        oxigenDOM.innerText = this.oxigen;
        this.blowFishArr.shift(eachBlowfish);
      }
    });
  };

  // Oxygen Bottle

  removeOxigenFromArray = () => {
    if (this.oxigenArr[0].x + this.oxigenArr[0].w < 0) {
      this.oxigenArr.shift();
    }
  };

  spawnOxigen = () => {
    if (
      this.oxigenArr.length === 0 ||
      this.oxigenArr[this.oxigenArr.length - 1].x < canvas.width * 0.5
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newOxigen = new Oxigen(randomPositionY);
      this.oxigenArr.push(newOxigen);
    }
  };

  playerOxigenCollision = () => {
    this.oxigenArr.forEach((eachOxigen) => {
      // Check if each of the oxigen-bottle collision with player
      // EachOxigen
      // This.player

      if (
        eachOxigen.x < this.player.x + this.player.w * 0.8 &&
        eachOxigen.x + eachOxigen.w * 0.8 > this.player.x &&
        eachOxigen.y < this.player.y + this.player.h / 2 &&
        eachOxigen.h / 2 + eachOxigen.y > this.player.y
      ) {
        this.oxigen += 15;
        oxigenDOM.innerText = this.oxigen;
        this.oxigenArr.shift(eachOxigen);

        if (this.oxigen >= 100) {
          this.oxigen = 100;
          oxigenDOM.innerText = this.oxigen;
        }
      }
    });
  };

  // Special Guest

  removeSpecialGuestFromArray = () => {
    this.specialGuestArr.forEach((eachSpecialGuest) => {
      if (eachSpecialGuest.x + eachSpecialGuest.w < 0) {
        this.specialGuestArr.shift(eachSpecialGuest);
      } else if (this.specialGuestArr[0].x + this.specialGuestArr[0].w < 0) {
        this.specialGuestArr.shift(eachSpecialGuest);
      }
    });
  };

  spawnSpecialGuest = () => {
    if (
      this.specialGuestArr.length === 0 &&
      this.framesCounter % 600 === 0 &&
      this.framesCounter !== 0
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newSpecialGuest = new SpecialGuest(randomPositionY);
      this.specialGuestArr.push(newSpecialGuest);
    }
  };

  playerSpecialGuestCollision = () => {
    this.specialGuestArr.forEach((eachSpecialGuest) => {
      // Check if the special guest  collision with player

      if (
        eachSpecialGuest.x < this.player.x + this.player.w * 0.8 &&
        eachSpecialGuest.x + eachSpecialGuest.w * 0.8 > this.player.x &&
        eachSpecialGuest.y < this.player.y + this.player.h / 2 &&
        eachSpecialGuest.h / 2 + eachSpecialGuest.y > this.player.y
      ) {
        this.specialGuestArr.shift(eachSpecialGuest);
        this.bonusCounter += 4;
      }
    });
  };

  // Game functions

  updateOxigen = () => {
    if (this.framesCounter % 90 === 0 && this.framesCounter !== 0) {
      this.oxigen -= 5;

      oxigenDOM.innerText = this.oxigen;
    }
  };

  updateScore = () => {
    console.log("BONUS COUNTER: ", this.bonusCounter);
    if (this.framesCounter % 240 === 0 && this.framesCounter !== 0) {
      if (this.bonusCounter > 0) {
        this.score += 150;
        scoreDOM.innerText = this.score;
        this.bonusCounter--;
      } else {
        this.score += 75;
        scoreDOM.innerText = this.score;
      }
    } else if (this.framesCounter === 0) {
      this.score = 0;
      scoreDOM.innerText = this.score;
    }
  };

  gameOver = () => {
    if (this.oxigen <= 0) {
      this.isGameOn = false;
      startScreenDOM.style.display = "none";
      gameOverScreenDOM.style.display = "flex";
      gameScreenDOM.style.display = "none";
    }
  };

  gameLoop = () => {
    //* Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //* Movement & actions

    this.blowFishArr.forEach((eachBlowfish) => {
      eachBlowfish.blowfishMovement();
    });
    this.oxigenArr.forEach((eachOxigen) => {
      eachOxigen.oxigenMovement();
    });

    this.specialGuestArr.forEach((eachSpecialGuest) => {
      eachSpecialGuest.specialGuestMovement();
    });

    // Player collision
    this.playerBlowfishCollision();
    this.playerOxigenCollision();
    this.playerSpecialGuestCollision();

    this.player.playerUpMovement();
    this.player.playerDownMovement();

    //* Draw elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    // Player
    this.player.drawPlayer();

    // Blowfish
    this.spawnBlowfish();
    this.blowFishArr.forEach((eachBlowfish) => {
      eachBlowfish.drawBlowfish();
    });
    this.removeBlowfishFromArray();

    // Oxigen Bottle
    this.spawnOxigen();
    this.oxigenArr.forEach((eachOxigen) => {
      eachOxigen.drawOxigen();
    });
    this.removeOxigenFromArray();

    // Special Guest
    this.spawnSpecialGuest();
    this.specialGuestArr.forEach((eachSpecialGuest) => {
      eachSpecialGuest.drawSpecialGuest();
    });
    this.removeSpecialGuestFromArray();

    this.updateOxigen();
    this.updateScore();

    this.framesCounter++;
    this.gameOver();

    // Recursion effect
    if (this.isGameOn === true && this.isGamePaused === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
