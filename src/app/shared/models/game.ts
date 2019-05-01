export class GameModel {
    id: number = 0;
    title: string = "";
    price: number = 0;

    constructor(id?: number, title?: string, price?: number) { 
        this.id = id;
        this.title = title;
        this.price = price;
    }
}