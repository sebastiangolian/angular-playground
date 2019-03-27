import { Comment } from './comment';
import { HydraCollection } from '../../hydra-api/interfaces/hydra-collection';
import { HydraPartialCollectionView } from '../../hydra-api/interfaces/hydra-partial-collection-view';

export interface CommentCollection extends HydraCollection{
    '@context': string;
    '@id': string;
    '@type': string;
    'hydra:member': Comment[];
    'hydra:totalItems': number;
    'hydra:view': HydraPartialCollectionView;
}
