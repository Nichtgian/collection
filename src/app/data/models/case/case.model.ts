import { IdService } from "../../services/util/id.service";
import { RowCountType, SlotCountType } from "../../types/basic/number.type";
import { Layer } from "./layer.model";

export class Case {
    id: string;
    title: string;
    icon: string;
    size: string;

    brand: string;
    name: string;

    isMarked: boolean = false;
    
    layers: Layer[] = [];

    rowsCount: RowCountType;
    slotsCount: SlotCountType;

    /*

    bgSetting: ThemeSettingType;
    bgColor: string;
    bgImage: string;
    slotBgSetting: ThemeSettingType;
    slotBgColor: string;
    slotBgImage: string;
    */

    /*
    style_mainColor: string;
    style_mainImage: Asset;
    style_backgroundColor: string;
    style_backgroundImage: Asset;   
    style_slotColor: string;
    style_slotImage: Asset;
    style_shadowInversed: boolean = false;

    setting_slotHideLumeshot: boolean = false;
    setting_slotHideTitle: boolean = false;
    */

    constructor(title: string, brand: string, rows: RowCountType, slots: SlotCountType, id: string = null) {
        this.title = title;
        this.brand = brand;
        this.rowsCount = rows;
        this.slotsCount = slots;
        this.size = rows + "x" + slots;
        this.addLayer("Storage");

        if (id == null) {
            this.id = IdService.generateId();
        }
        else {
            this.id = id;
        }
    }

    addLayer(title: string, rowsCount: RowCountType = null, slotsCount: SlotCountType = null) {
        if (rowsCount == null) {
            rowsCount = this.rowsCount;
        }
        if (slotsCount == null) {
            slotsCount = this.slotsCount;
        }

        this.layers.push(new Layer(title, rowsCount, slotsCount));
    }
} 