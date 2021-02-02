import { JphPhoto } from "../interfaces/jph-photo";

export class JphPhotoModel implements JphPhoto {
    id: number = 0;
    albumId: number = 0;
    title: string = '';
    url: string = '';
    thumbnailUrl: string = '';
}
