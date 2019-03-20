import { HydraPartialCollectionView } from './hydra-partial-collection-view';
import { Hydra } from './hydra';

export interface HydraCollection extends Hydra  {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': Hydra[];
    'hydra:totalItems': number;
    'hydra:view': HydraPartialCollectionView;
}
