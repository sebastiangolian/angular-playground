export interface Car {
    id: number;
    name: string;
    type: string;
    price: number;
    previousPrice: number; 
    active: boolean;

    toString():string;
}
