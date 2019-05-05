import { Game } from '../interfaces/game.interface';

export class GameModel implements Game {
    id: number = 0;
    title: string = "";
    price: number = 0;

    constructor(id?: number, title?: string, price?: number) { 
        this.id = id;
        this.title = title;
        this.price = price;
    }

    public toString(): string {
        return this.id + "-" + this.title + "-" + this.price;
    }
}