"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    addGame(game) {
        this.games.push(game);
    }
    getGame() {
        return this.games;
    }
    addMove(gameid, move) {
        const game = this.games.find(game => game.id === gameid);
        if (game) {
            game.moves.push(move);
        }
        else {
            console.log("Game dosent Exists");
        }
    }
    logState() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
