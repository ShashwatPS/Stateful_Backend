interface Game{
    id: String;
    whitePlayer: String;
    blackPlayer: String;
    moves: String[];
}

export class GameManager {
    private games: Game[] = [];

    public addGame(game: Game){
        this.games.push(game);
    }

    public getGame(): Game[]{
        return this.games;
    }

    public addMove(gameid: String, move: String){
        const game: Game| undefined = this.games.find(game => game.id === gameid);
        if(game){
            game.moves.push(move);
        } else {
            console.log("Game dosent Exists");
        }
    }

    public logState(){
        console.log(this.games);
    }
}