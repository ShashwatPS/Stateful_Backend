import { games } from "./store"
import { logger} from "./logger";

logger();

setInterval(()=>{
    games.push({
        whitePlayer: "Shashwat",
        blackPlayer: "Some Random Player",
        moves: ["1","2"],
    })
    logger();
},1000);