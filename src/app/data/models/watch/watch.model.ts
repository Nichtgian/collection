import { IdService } from "../../services/util/id.service";
import { WatchStatusType } from "../../types/enums/watch-status.type";
/*import { WatchStatusType } from "../../types/enums/watch-status.type";
import { Album } from "../assets/album.model";
import { WatchAsset } from "../assets/watch-asset.model";*/

export class Watch {
    id: string;

    /* basic general information */
    brand: string;
    subbrand: string;
    model: string;
    reference: string;
    serial: string;
    numberedEdition: string;
    title: string;

    /* status */
    isMarked: boolean = false;
    status: string = WatchStatusType.InCollection;
    set: string[] = []; // WatchSet single custom
    certification: string[] = []; // WatchCertification custom

    /* dates */
    manufacturingDateFrom: Date = null;
    manufacturingDateTo: Date = null;

    /* case */
    caseDiameter: number = null;
    caseLugToLug: number = null;
    caseThickness: number = null;
    caseLugWidth: number = null;
    caseMaterial: string[] = []; // WatchMaterial custom
    bezelMaterial: string[] = []; // WatchMaterial custom
    crystal: string[] = []; // WatchCrystal single custom
    waterResistance: number; // min 0 max 120 ATM

    /* dial */
    dialColor: string[] = []; // WatchDialColor custom
    dialMaterial: string[] = []; // WatchDialMaterial custom
    dialType: string[] = []; // WatchDialType custom
    dialNumerals: string[] = []; // WatchDialNumeral single custom

    /* functions & features */
    functions: string[] = []; // WatchFunctions custom
    features: string[] = []; // WatchFeatures custom

    /* caliber */
    caliber: string;
    caliberBase: string;
    caliberType: string[]; // WatchMovement single
    caliberPowerReserve: number; // min 0 max 150 h
    caliberJewels: number; // min 0 max 100 jewels
    caliberFrequency: string[] = []; // WatchCaliberFrequency custom

    /* assets */
    /* temp */
    primaryAsset: string = "https://i1.wp.com/www.neueuhren.de/wp-content/uploads/2019/01/410.-Tudor-Black-Bay-Chrono.jpg";
    lumeshotAsset: string = "https://static.watchtime.com/wp-content/uploads/2018/04/Tudor_Heritage_BlackBay_Chronograph_lume_1000.jpg";

    /*
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

    constructor(brand: string, model: string, id: string = null) {
        this.brand = brand;
        this.model = model;

        if (id == null) {
            this.id = IdService.generateId();
        }
        else {
            this.id = id;
        }
    }
}