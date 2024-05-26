interface Game{
    id: String,
    whitePlayer: String,
    blackPlayer: String,
    moves: String[],
}

export class GameManager {
    private static game: GameManager
    private games: Game[] = []
    private constructor() {
        //Since it is private, a new instance cannot be created
    }

    public static getGame() : GameManager{
        if(!GameManager.game){
            GameManager.game = new GameManager();
        }
        return GameManager.game;
    }

    public addGame(id: String, whitePlayer: String, blackPlayer: String){
        this.games.push({
            id: id,
            whitePlayer: whitePlayer,
            blackPlayer: blackPlayer,
            moves: [],
        })
    }

    public addMove(gameID: String,move: String){
        const game = this.games.find(game=> game.id == gameID);
        if(!game){
            console.log("This particular game dosent exists");
        } else {
            game.moves.push(move);
        }
    }

    public logState(){
        console.log(this.games);
    }

    public getAllGames (){
        return this.games;
    }
}