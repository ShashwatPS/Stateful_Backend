import { GameManager} from "./GameManager";
setInterval(()=>{
    GameManager.getGame().addGame(Math.random().toString(),"Shashwat","Harshit");
},2000)

setInterval(()=>{
    GameManager.getGame().logState();
},1000)