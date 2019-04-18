import { Car } from '../interfaces/car.interface';

export class CarModel implements Car {
    id: number;
    name: string;
    type: string;
    price: number = 0;
    previousPrice: number = 0;
    active: boolean = true;

    constructor(id: number, name: string, type: string, price: number, active: boolean) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.active = active;
    }

    public isPositiveChange(): boolean {
        return this.price >= this.previousPrice;
    }

    public toString(): string {
        return this.id + "-" + this.name + "-" + this.type + "-" + this.price + "-" + this.active;
    }
}
