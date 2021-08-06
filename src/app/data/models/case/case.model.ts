import { IdService } from "../../services/util/id.service";
import { Layer } from "./layer.model";

export class Case {
    id: string;
    title: string;
    icon: string;
    size: string;

    brand: string;
    name: string;

    isMarked: boolean = false;
    
    layers: Layer[];

    /*
    rowsCount: RowCountType;
    slotsCount: SlotCountType;
    layers: Layer[];

    bgSetting: ThemeSettingType;
    bgColor: string;
    bgImage: string;
    slotBgSetting: ThemeSettingType;
    slotBgColor: string;
    slotBgImage: string;
    */

    constructor(title: string, brand: string, rows: number, slots: number, id: string = null) {
        this.title = title;
        this.brand = brand;
        //this.rowsCount = rows;
        //this.slotsCount = slots;
        this.size = rows + "x" + slots;

        if (id == null) {
            this.id = IdService.generateId();
        }
        else {
            this.id = id;
        }
    }
} 