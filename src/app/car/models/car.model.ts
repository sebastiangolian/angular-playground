import { Car } from '../interfaces/car.interface';

export class CarModel implements Car {
    id: number;
    name: string;
    type: string;
    cost: number;
    active: boolean;

    constructor(name:string, type:string) { 
        this.id = 1;
        this.name = name;
        this.type = type;
        this.cost = 0;
        this.active = true;
    }
}
