"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const g1 = new store_1.GameManager();
var cnt = 0;
g1.addGame({
    id: '1',
    blackPlayer: "Shashwat",
    whitePlayer: "Singh",
    moves: []
});
setInterval(() => {
    g1.addMove('1', cnt.toString());
    cnt++;
}, 1000);
setTimeout(() => {
    g1.logState();
}, 4000);
