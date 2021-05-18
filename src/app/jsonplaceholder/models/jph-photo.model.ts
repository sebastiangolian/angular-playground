import { JphPhoto } from '../interfaces/jph-photo';

export class JphPhotoModel implements JphPhoto {
  id = 0;
  albumId = 0;
  title = '';
  url = '';
  thumbnailUrl = '';
  description?: string = undefined;
}
