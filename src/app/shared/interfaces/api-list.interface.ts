import { ApiBussinesLogic } from './api-bussines-logic';

export interface ApiList<T> {
    items: T[];
    total: number;
    bussinesLogic: ApiBussinesLogic[];
}