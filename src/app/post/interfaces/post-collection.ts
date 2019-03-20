import { Post } from './post';
import { HydraCollection } from '../../hydra-api/interfaces/hydra-collection';
import { HydraPartialCollectionView } from '../../hydra-api/interfaces/hydra-partial-collection-view';

export interface PostCollection extends HydraCollection{
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': Post[];
    'hydra:totalItems': number;
    'hydra:view': HydraPartialCollectionView;
}
