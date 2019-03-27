import { Hydra } from '../../hydra-api/interfaces/hydra';

export interface Comment extends Hydra{
    '@id': string;
    '@type': string;
    id: number;
    name: string,
    email: string,
    body: string,
    post: string
}
