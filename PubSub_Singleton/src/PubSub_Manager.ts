import { createClient, RedisClientType } from "redis";

export class PubSub_Manager{
    private static instance: PubSub_Manager;
    private redisClient: RedisClientType;
    private subscription: Map<string, string[]>;

    private constructor() {
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscription = new Map();
    }

    public static getInstance(): PubSub_Manager {
        if (!this.instance) {
            this.instance = new PubSub_Manager();
        }
        return this.instance;
    }

    public userSubscribe(userId: string, stock: string){
        if(!this.subscription.has(stock)){
            this.subscription.set(stock,[]);
        }
        this.subscription.get(stock)?.push(userId);

        if(this.subscription.get(stock)?.length === 1){
            this.redisClient.subscribe(stock, (message)=>{
                this.handleMessage(stock, message);
            })
            console.log(`Subscribed to Redis Channel: ${stock}`);
        }
    }

    public userUnsubscribe(userId: string, stock: string){
        this.subscription.set(stock, this.subscription.get(stock)?.filter((sub)=> sub!==userId)||[]);
        if(this.subscription.get(stock)?.length ===0 ){
            this.redisClient.unsubscribe(stock);
            console.log(`Unsubscribed from the Redis Channel: ${stock}`);
        }
    }

    private handleMessage(stock: string, message: string) {
        console.log(`Message received on channel ${stock}: ${message}`);
        this.subscription.get(stock)?.forEach((sub)=>{
            console.log(`Sending message to the user: ${sub}`);
        })
    }

    public async disconnect(){
        await this.redisClient.quit();
    }
}