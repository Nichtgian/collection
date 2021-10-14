import { Asset } from "./asset.model";

export class Cutout extends Asset {
    originalSrc: string;
    fade: number = 0;
    path: Point[] = [];
}
// in settings set bg to header/toolbar and slot to content bg