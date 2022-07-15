


# OCEAN DEPTHS


## [See the Game](https://pablodao.github.io/Ocean-Depths/)

# Description
Ocean Depths is a game where the player moves vertically a submariner who has a oxygen  thats slowly decreases with time. He needs to avoid the blowfish and brave fish that decreses the oxygen and pick up the Oxygen bottles to refill it. The game ends when your Oxygen empties completely.


# Main Functionalities

- Game has one submariner in the left side of the screen that moves vertically with w/s keys or with up/down arrows
- The oxygen decrese slowly by time 
- Blowfish decrease your Oxygen when collision 
- Oxygen bottle refill your Oxygen when picked
- The special guest multiplier your score by 2 during a few seconds
- Brave fish follow player movement and if collides you lose a lot of oxygen and some score 
- You can pause the game and the music with the pause button or with esc key
# Backlog Functionalities

- Better Oxygen bar
- Player dodge movement
- Save high scores 

# Proyect Structure

## main.js

- game sounds 
- startGame()
- pauseGame ()

## game.js

- Game () {
    this.player;
}
- gameLoop () {}
- checkCollisions () {}

## player.js 

- Player () {
    this.playerImage;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawPlayer () {}
- playerUpMovement () {}
- playerDownMovement () {}

## oxygen-bottle.js 
- oxygen-bottle () {
    this.oxygenImage;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawOxygen-bottle () {}
- moveOxygen-bottle () {}

## blowfish.js
- blowfish () {
    this.blowfishImage;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawBlowfish () {}
- moveBlowfish () {}

## braveFish.js
- braveFish () {
    this.braveFishImage;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawbraveFish () {}
- movebraveFisht() {}

## special-guest.js
- special-guest () {
    this.specialGuestImage;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- drawSpecial-guest () {}
- moveSpecial-guest() {}



# States and Transitions

- Start screen
- Game screen
- Game over screen 

# Extra Links (The links can be added later when available)

### Slides
[Link](https://docs.google.com/presentation/d/1czpCXU009OCjnGHi75b4aK_k6FwQJdyX5-lYHONL-pU/edit?usp=sharing)