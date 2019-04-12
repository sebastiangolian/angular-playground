import { Car } from '../interfaces/car.interface';

export class CarModel implements Car {
    id: number;
    name: string;
    type: string;
    cost: number = 0;
    active: boolean = true;

    constructor(id:number, name:string, type:string, cost:number, active:boolean) { 
        this.id = id;
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.active = active;
    }

    toString():string
    {
        return this.id + "-" + this.name + "-" + this.type + "-" + this.cost + "-" + this.active;
    }
}
