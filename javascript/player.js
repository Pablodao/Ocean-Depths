class Player {
  constructor() {
    
    // Background image
    this.playerImage = new Image();
    this.playerImage.src = "./images/player.png";

    // Position
    this.x = 100; // X-Axix
    this.y = 100; // Y-Axix

    // Size
    this.w = 175; // Width
    this.h = 150; // height

    // Movement speed
    this.speed = 7;

    // Movement
    this.keyPressed = {
      upKey: false,
      downKey: false,
    };
  }

  drawPlayer = () => {
    ctx.drawImage(this.playerImage, this.x, this.y, this.w, this.h);
  };

  playerUpMovement = () => {
    if (this.y >= 100 && this.keyPressed.upKey === true) {
      this.y -= this.speed;
    }
  };

  playerDownMovement = () => {
    if (this.y <= canvas.height - 190 && this.keyPressed.downKey === true) {
      this.y += this.speed;
    }
  };
}
