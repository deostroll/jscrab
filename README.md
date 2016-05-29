JScrab - Fast Scrabble(TM) type Game in JavaScript
==================================================

This project is a fork of [jscrab](https://github.com/amnond/jscrab) with the objective of debugging and understanding the game engine.

All source is now moved into a `www` folder. Support for hosting as a local web app with live-reload capabilities is done. The original shuffle logic is modified to generate the same sequence every time the game is first started (i.e. when browser refreshed).

You need to node/npm installed. You also need to install `grunt-cli`. To run the project, install all depedencies (`npm install`) and then, simply type `grunt`. Open a browser and browse to `http://localhost:3000/src/index.html` to access the game.

For the original game visit: http://amnond.github.io/jscrab

Happy debugging.
