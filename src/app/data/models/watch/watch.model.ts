import { IdService } from "../../services/id.service";
/*import { WatchStatusType } from "../../types/enums/watch-status.type";
import { Album } from "../assets/album.model";
import { WatchAsset } from "../assets/watch-asset.model";*/

export class Watch {
    id: string;
    brand: string; //suggest
    model: string;
    reference: string;

    isMarked: boolean = false;

    /* temp */
    primaryAsset: string = "https://i1.wp.com/www.neueuhren.de/wp-content/uploads/2019/01/410.-Tudor-Black-Bay-Chrono.jpg";
    lumeshotAsset: string = "https://static.watchtime.com/wp-content/uploads/2018/04/Tudor_Heritage_BlackBay_Chronograph_lume_1000.jpg";

    /*status: WatchStatusType;

    primaryAsset: WatchAsset;
    lumeshotAsset: WatchAsset;
    albums: Album[];

    features: TextSuggestion[];

    watchEvents: WatchEvent[];
    accessoires: WatchAccessoire[];
    conditionReport: WatchCondition[];
    linkedWatches: WatchRelation[];

    ratingGrade: RatingGradeType;
    ratingDescription: string;*/

    constructor(brand: string, model: string) {
        this.id = IdService.generateId();
        this.brand = brand;
        this.model = model;
    }
}