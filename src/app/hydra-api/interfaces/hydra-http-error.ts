import { HydraError } from './hydra-error';

export interface HydraHttpError {
    'error': HydraError;
    'message': string;
    'name': string;
    'ok': boolean;
    'status': number;
    'statusText': string;
    'url': string;
}
