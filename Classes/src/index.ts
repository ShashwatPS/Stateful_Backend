import {GameManager} from "./store";

const g1 = new GameManager();

var cnt = 0;

g1.addGame({
    id: '1',
    blackPlayer: "Shashwat",
    whitePlayer: "Singh",
    moves: []
})

setInterval(()=>{
    g1.addMove('1',cnt.toString());
    cnt++;
},1000);

setTimeout(()=>{
    g1.logState();
},4000)


