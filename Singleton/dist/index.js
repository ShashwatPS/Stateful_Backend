"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameManager_1 = require("./GameManager");
setInterval(() => {
    GameManager_1.GameManager.getGame().addGame(Math.random().toString(), "Shashwat", "Harshit");
}, 2000);
setInterval(() => {
    GameManager_1.GameManager.getGame().logState();
}, 1000);
