/**
 * @jest-environment jsdom
 */


// importing test files! 
const { game, newGame, showScore } = require("../game"); // this is importat - make sure you click .. adn then / to find the filepath as they are in the environment
// a new function add to this constant!

beforeAll(() => {
    let fs = require("fs"); // installing fs library which is part of node's default standard library
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContent);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choises key exists", () => {
        expect("choises" in game).toBe(true);
    });
    test("choise contain correct ids", () => {
        expect(game.choises).toEqual(["button1", "button2", "button3", "button4"]);
    })
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });   
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });
});