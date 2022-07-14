class BraveFish {
  constructor(yParam, imgFacingDirection) {
    // Background image
    this.braveFishImage = new Image();
    this.braveFishImage.src = "./images/braveFishRight.png";

    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix
    this.w = 100; // Width
    this.h = 100; // height

    this.speed = 4;
  }
  drawBraveFish = () => {
    ctx.drawImage(this.braveFishImage, this.x, this.y, this.w, this.h);
  };

  braveFishLeftMovement = () => {
    this.x = this.x - this.speed;
    
  };

  braveFishRightMovement = () => {
    this.x = this.x + this.speed;
  };

  braveFishDownMovement = () => {
    this.y = this.y + this.speed;
  };

  braveFishUpMovement = () => {
    this.y = this.y - this.speed;
  };

}
