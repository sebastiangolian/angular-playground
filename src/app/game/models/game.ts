import { Game } from '../interfaces/game.interface';

export class GameModel implements Game {
    id: number = null;
    title: string = null;
    price: number = null;

    constructor(id?: number, title?: string, price?: number) { 
        if(id) this.id = id;
        if(title) this.title = title;
        if(price) this.price = price;
    }

    public toString(): string {
        return this.id + "-" + this.title + "-" + this.price;
    }
}