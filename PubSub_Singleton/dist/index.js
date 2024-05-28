"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubSub_Manager_1 = require("./PubSub_Manager");
PubSub_Manager_1.PubSub_Manager.getInstance().userSubscribe(Math.random().toString(), "APPL");
