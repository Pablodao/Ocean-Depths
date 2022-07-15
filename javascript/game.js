class Game {
  constructor() {
    // * GAME PROPERTIES

    // In-game background
    this.bg = new Image();
    this.bg.src = "./images/deep-sea-background.png";

    // Elements
    this.player = new Player();
    this.blowFishArr = [];
    this.oxygenArr = [];
    this.specialGuestArr = [];
    this.braveFishArr = [];

    // Score and Resource
    this.score = 0;
    this.oxygen = 100;

    // Counters
    this.bonusCounter = 0;
    this.framesCounter = 0;

    // Game status
    this.isGameOn = true;
    this.isGamePaused = false;
  }

  // * FUNCTIONS AND METHODS

  // Blowfish

  removeBlowfishFromArray = () => {
    if (this.blowFishArr[0].x + this.blowFishArr[0].w < 0) {
      this.blowFishArr.shift();
    }
  };

  spawnBlowfish = () => {
    if (
      this.blowFishArr.length === 0 ||
      this.blowFishArr[this.blowFishArr.length - 1].x < canvas.width * 0.45
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newBlowfish = new Blowfish(randomPositionY);
      this.blowFishArr.push(newBlowfish);
    }
  };

  playerBlowfishCollision = () => {
    this.blowFishArr.forEach((eachBlowfish) => {
      // Check if each of the blowfish collides with player

      if (
        eachBlowfish.x < this.player.x + this.player.w * 0.8 &&
        eachBlowfish.x + eachBlowfish.w * 0.8 > this.player.x &&
        eachBlowfish.y < this.player.y + this.player.h / 2 &&
        eachBlowfish.h / 2 + eachBlowfish.y > this.player.y
      ) {
        this.oxygen -= 20;
        oxygenDOM.innerText = this.oxygen;
        this.blowFishArr.shift(eachBlowfish);
        blowfishAudio.play();
      }
    });
  };

  // BraveFish

  removeBraveFishFromArray = () => {
    this.braveFishArr.forEach((eachBraveFish) => {
      if (eachBraveFish.x + eachBraveFish.w < 0) {
        this.braveFishArr.shift(eachBraveFish);
      } else if (this.braveFishArr[0].x + this.braveFishArr[0].w < 0) {
        this.braveFishArr.shift(eachBraveFish);
      }
    });
  };

  spawnBraveFish = () => {
    if (
      this.braveFishArr.length === 0 &&
      this.framesCounter % 600 === 0 &&
      this.framesCounter !== 0
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newBraveFish = new BraveFish(randomPositionY);
      this.braveFishArr.push(newBraveFish);
    }
  };

  braveFishMovesToPlayer = () => {
    this.braveFishArr.forEach((eachBraveFish) => {
      if (eachBraveFish.y > this.player.y) {
        eachBraveFish.y = eachBraveFish.y - 1.5;
      } else if (eachBraveFish.y < this.player.y) {
        eachBraveFish.y = eachBraveFish.y + 1.5;
      }
    });
  };

  playerBraveFishCollision = () => {
    this.braveFishArr.forEach((eachBraveFish) => {
      // Check if the brave Fish collides with player

      if (
        eachBraveFish.x < this.player.x + this.player.w * 0.8 &&
        eachBraveFish.x + eachBraveFish.w * 0.8 > this.player.x &&
        eachBraveFish.y < this.player.y + this.player.h / 2 &&
        eachBraveFish.h / 2 + eachBraveFish.y > this.player.y
      ) {
        this.braveFishArr.shift(eachBraveFish);
        this.bonusCounter = 0;
        this.score -= 300;
        scoreDOM.innerText = this.score;
        this.oxygen -= 30;
        oxygenDOM.innerText = this.oxygen;
        screamAudio.play();
      }
    });
  };

  // Oxygen Bottle

  removeOxygenFromArray = () => {
    if (this.oxygenArr[0].x + this.oxygenArr[0].w < 0) {
      this.oxygenArr.shift();
    }
  };

  spawnOxygen = () => {
    if (
      this.oxygenArr.length === 0 ||
      this.oxygenArr[this.oxygenArr.length - 1].x < canvas.width * 0.52
    ) {
      let randomPositionY = Math.random() * (canvas.height - 300);
      let newOxygen = new Oxygen(randomPositionY);
      this.oxygenArr.push(newOxygen);
    }
  };

  playerOxygenCollision = () => {
    this.oxygenArr.forEach((eachOxygen) => {
      // Check if each of the oxygen-bottles collides with player

      if (
        eachOxygen.x < this.player.x + this.player.w * 0.8 &&
        eachOxygen.x + eachOxygen.w * 0.8 > this.player.x &&
        eachOxygen.y < this.player.y + this.player.h / 2 &&
        eachOxygen.h / 2 + eachOxygen.y > this.player.y
      ) {
        this.oxygen += 15;
        oxygenDOM.innerText = this.oxygen;
        this.oxygenArr.shift(eachOxygen);
        oxygenBottleAudio.play();

        if (this.oxygen >= 100) {
          this.oxygen = 100;
          oxygenDOM.innerText = this.oxygen;
          oxygenBottleAudio.play();
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
      // Check if the special guest collides with player

      if (
        eachSpecialGuest.x < this.player.x + this.player.w * 0.8 &&
        eachSpecialGuest.x + eachSpecialGuest.w * 0.8 > this.player.x &&
        eachSpecialGuest.y < this.player.y + this.player.h / 2 &&
        eachSpecialGuest.h / 2 + eachSpecialGuest.y > this.player.y
      ) {
        this.specialGuestArr.shift(eachSpecialGuest);
        this.bonusCounter += 4;
        specialGuestAudio.play();
      }
    });
  };

  // Game functions

  updateOxygen = () => {
    // Update the oxygen value each second
    if (this.framesCounter % 60 === 0 && this.framesCounter !== 0) {
      this.oxygen -= 5;

      oxygenDOM.innerText = this.oxygen;
    }
  };

  updateScore = () => {
    // Update the score value each 4 seconds
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
    if (this.oxygen <= 0 || this.score < 0) {
      this.isGameOn = false;
      startScreenDOM.style.display = "none";
      gameOverScreenDOM.style.display = "flex";
      gameScreenDOM.style.display = "none";
      gameAudio.pause();
    }
  };

  gameLoop = () => {

    //* Clear canvas

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //* Movement & actions

    this.blowFishArr.forEach((eachBlowfish) => {
      eachBlowfish.blowfishMovement();
    });
    this.braveFishArr.forEach((eachBraveFish) => {
      eachBraveFish.braveFishMovement();
    });
    this.oxygenArr.forEach((eachOxygen) => {
      eachOxygen.oxygenMovement();
    });

    this.specialGuestArr.forEach((eachSpecialGuest) => {
      eachSpecialGuest.specialGuestMovement();
    });

    // Player collision
    this.playerBlowfishCollision();
    this.playerOxygenCollision();
    this.playerSpecialGuestCollision();
    this.playerBraveFishCollision();

    // Player movemment
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

    // BraveFish
    this.spawnBraveFish();
    this.braveFishMovesToPlayer();
    this.braveFishArr.forEach((eachBraveFish) => {
      eachBraveFish.drawBraveFish();
    });
    this.removeBraveFishFromArray();

    // Oxygen Bottle
    this.spawnOxygen();
    this.oxygenArr.forEach((eachOxygen) => {
      eachOxygen.drawOxygen();
    });
    this.removeOxygenFromArray();

    // Special Guest
    this.spawnSpecialGuest();
    this.specialGuestArr.forEach((eachSpecialGuest) => {
      eachSpecialGuest.drawSpecialGuest();
    });
    this.removeSpecialGuestFromArray();
    
    this.updateOxygen();
    this.updateScore();

    this.framesCounter++;
    this.gameOver();

    //* Recursion effect
    if (this.isGameOn === true && this.isGamePaused === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
