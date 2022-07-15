class Blowfish {
  constructor(yParam) {

    // Background image
    this.blowfishImage = new Image();
    this.blowfishImage.src = "./images/enemy.png";

    // Position
    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix

    // Size
    this.w = 130; // Width
    this.h = 130; // height

    // Movement speed
    this.speed = 3;
  }

  drawBlowfish = () => {
    ctx.drawImage(this.blowfishImage, this.x, this.y, this.w, this.h);
  };

  blowfishMovement = () => {
    this.x = this.x - this.speed;
  };
}
