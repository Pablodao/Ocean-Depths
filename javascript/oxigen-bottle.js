class Oxigen{

    constructor( yParam) {

         // Background image
    this.oxigenImage = new Image();
    this.oxigenImage.src = "./images/oxigen.png";

    this.x = canvas.width; // X-Axix
    this.y = yParam + 100; // Y-Axix
    this.w = 50; // Width
    this.h = 50; // height

    this.speed = 2.5;


    }

    drawOxigen = () => {
        ctx.drawImage(this.oxigenImage, this.x, this.y, this.w, this.h);
    }

    oxigenMovement = () => {
        this.x = this.x - this.speed;
    }

}
