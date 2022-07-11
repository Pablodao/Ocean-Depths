class Game {

    constructor() {

        // Game properties 

        // in-game background 
        this.bg = new Image()
        this.bg.src = "./images/deep-sea-background.png"

        //player
        this.player = new Player();

        this.isGameOn = true;
    }

    // Game methods and functions

    gameLoop = () => {
        //console.log("game is running")

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Movement & actions

        // Draw elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
        this.player.drawPlayer();
        // Recursion effect 
        if ( this.isGameOn === true) {

            requestAnimationFrame(this.gameLoop);

        }

    }

}