class BraveFish {
  constructor(yParam, imgFacingDirection) {
    
    // Background image
    this.braveFishImage = new Image();
    this.braveFishImage.src = "./images/braveFishRight.png";

    // Position
    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix

    // Size
    this.w = 100; // Width
    this.h = 100; // height

    // Movement speed
    this.speed = 4;
  }

  drawBraveFish = () => {
    ctx.drawImage(this.braveFishImage, this.x, this.y, this.w, this.h);
  };

  braveFishMovement = () => {
    this.x = this.x - this.speed;
  };
}
