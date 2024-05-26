import {games} from "./store";

export const logger = () => {
    setTimeout(()=>{
        console.log(games);
    },2000);
}

