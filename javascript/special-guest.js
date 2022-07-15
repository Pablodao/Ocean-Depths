class SpecialGuest {
  constructor(yParam) {

    // Background image
    this.specialGuestImage = new Image();
    this.specialGuestImage.src = "./images/bonus-guest.png";
   
    // Position
    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix
   
    // Size
    this.w = 70; // Width
    this.h = 70; // height
    
    // Movement speed
    this.speed = 9;
  }

  drawSpecialGuest = () => {
    ctx.drawImage(this.specialGuestImage, this.x, this.y, this.w, this.h);
  };

  specialGuestMovement = () => {
    this.x = this.x - this.speed;
  };
}
