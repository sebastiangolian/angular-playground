import { Hydra } from './hydra';
import { HydraPartialCollectionView } from './hydra-partial-collection-view';

export interface HydraCollection extends Hydra  {
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': Hydra[];
    'hydra:totalItems': number;
    'hydra:view': HydraPartialCollectionView;
}
