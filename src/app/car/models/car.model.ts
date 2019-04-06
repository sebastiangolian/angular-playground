import { Car } from '../interfaces/car.interface';

export class CarModel implements Car {
    id: number;
    name: string;
    type: string;
    cost: number;
    active: boolean;

    constructor(id:number, name:string, type:string, cost:number, active:boolean) { 
        this.id = id;
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.active = active;
    }
}
