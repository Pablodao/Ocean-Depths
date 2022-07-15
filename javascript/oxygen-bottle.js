class Oxygen {
  constructor(yParam) {

    // Background image
    this.oxygenImage = new Image();
    this.oxygenImage.src = "./images/oxygen.png";
    
    // Position
    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix
    
    // Size
    this.w = 50; // Width
    this.h = 50; // height

    // Movement speed
    this.speed = 4;
  }

  drawOxygen = () => {
    ctx.drawImage(this.oxygenImage, this.x, this.y, this.w, this.h);
  };

  oxygenMovement = () => {
    this.x = this.x - this.speed;
  };
}
