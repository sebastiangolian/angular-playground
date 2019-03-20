import { Post } from './post';
import { HydraCollection } from './hydra-collection';
import { HydraPartialCollectionView } from './hydra-partial-collection-view';

export interface Posts extends HydraCollection{
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': Post[];
    'hydra:totalItems': number;
    'hydra:view': HydraPartialCollectionView;
}
