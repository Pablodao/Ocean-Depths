class SpecialGuest {
  constructor(yParam) {
    console.log("entrando en constructor de special guest ")
    // Background image
    this.specialGuestImage = new Image();
    this.specialGuestImage.src = "./images/bonus-guest.png";

    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix
    this.w = 70; // Width
    this.h = 70; // height

    this.speed = 9;
  }

  drawSpecialGuest = () => {
    ctx.drawImage(this.specialGuestImage, this.x, this.y, this.w, this.h);
  };

  specialGuestMovement = () => {
    this.x = this.x - this.speed;
  };
}
