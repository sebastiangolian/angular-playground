import { Hydra } from './hydra';

export interface HydraPartialCollectionView extends Hydra {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:first': string;
    'hydra:last': string;
    'hydra:next': string;
}
