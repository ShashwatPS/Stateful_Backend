"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        //Since it is private, a new instance cannot be created
    }
    static getGame() {
        if (!GameManager.game) {
            GameManager.game = new GameManager();
        }
        return GameManager.game;
    }
    addGame(id, whitePlayer, blackPlayer) {
        this.games.push({
            id: id,
            whitePlayer: whitePlayer,
            blackPlayer: blackPlayer,
            moves: [],
        });
    }
    addMove(gameID, move) {
        const game = this.games.find(game => game.id == gameID);
        if (!game) {
            console.log("This particular game dosent exists");
        }
        else {
            game.moves.push(move);
        }
    }
    logState() {
        console.log(this.games);
    }
    getAllGames() {
        return this.games;
    }
}
exports.GameManager = GameManager;
