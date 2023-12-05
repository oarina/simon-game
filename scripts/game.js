let game = { 
    score: 0,
    currentGame: [], // needed to add this to pass the 2nd test
    playerMoves: [],
    choises: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.currentGame = [];
    game.playerMoves = [];
    game.score = 0;
    showScore();
}

function showScore() {
    document.getElementById("score").innerText = game.score;
}

// define the game to pass the test
// after game fail do one just to pass the test

// !!!!!it will not pass till we export the game and import it into our test file!!!!!!
module.exports = { game, newGame, showScore }; // curly braces is because we'll be exporting more than one object and function from this file so we need {} for that
