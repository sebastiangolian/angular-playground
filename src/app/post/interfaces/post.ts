import { Hydra } from '../../hydra-api/interfaces/hydra';

export interface Post extends Hydra{
    '@id': string;
    '@type': string;
    id: number;
    title: string;
    body: string;
}
