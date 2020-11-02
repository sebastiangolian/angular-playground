import { ApiBussinesLogic } from './api-bussines-logic';

export interface Api<T> {
    item: T;    
    businessLogic: ApiBussinesLogic[]
}