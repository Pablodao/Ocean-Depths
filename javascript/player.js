class Player {
  constructor() {
    // Background image
    this.playerImage = new Image();
    this.playerImage.src = "./images/player.png";

    this.x = 100; // X-Axix
    this.y = 100; // Y-Axix
    this.w = 175; // Width
    this.h = 150; // height

    this.speed = 35;
  }

  // Player methods

  drawPlayer = () => {
    ctx.drawImage(this.playerImage, this.x, this.y, this.w, this.h);
  };

  playerUpMovement = () => {
    if (this.y >= 100) {
      this.y = this.y - this.speed;
    }
  };

  playerDownMovement = () => {

    if (this.y <= (canvas.height - 190)){
    this.y = this.y + this.speed;
  };
}

}