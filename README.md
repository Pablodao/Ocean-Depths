


# OCEAN DEPTHS


## [See the Game](www.your-url-here.com)
NOTE: above link will be added later

# Description
Ocean Depths is a game where the player moves vertically a submariner who has a oxigen bar thats slowly decreases with time. He needs to avoid the blowfish that decreses the oxigen bar and pick up the Oxigen bottles to refill it. The game ends when your Oxigen bar empties completely.

Add here a simple description of your game.

# Main Functionalities

- Game has one submariner in the left side of the screen that moves vertically
- The oxygen bar decrese slowly by time 
- Blowfish decrease your Oxigen bar when collision 
- Oxigen bottle refill your Oxigen bar when picked


# Backlog Functionalities

- Special guest appears and double your score multiplier a certain amount of time 
- Better Oxigen bar

# Proyect Structure

- List here the JS files you think you might need. 
- One main.js to manage DOM elements, one for Game class and one for each other class.
- Recommended: Inside each file you can list the functions, clases, properties and methods you will need.


## main.js

- startGame()

## game.js

- Game () {
    this.player;
}
- gameLoop () {}
- checkCollisions () {}

## player.js 

- Player () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawPlayer () {}
- movePlayer () {}

## oxigen-bottle.js 
- oxigen-bottle () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawOxigen-bottle () {}
- moveOxigen-bottle () {}

## blowfish.js
- blowfish () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawBlowfish () {}
- moveBlowfish () {}

## special-guest.js
- special-guest () {
    this.x;
    this.y;
    this.w;
    this.h;
}
- drawSpecial-guest () {}
- moveSpecial-guest() {}

# States and Transitions

- Start screen
- Game screen
- Game over screen 

# Extra Links (The links can be added later when available)

### Trello
[Link](www.your-url-here.com)

### Slides
[Link](www.your-url-here.com)