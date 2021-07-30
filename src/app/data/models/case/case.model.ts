export class Case {
    title: string;
    icon: string;
    size: string;

    brand: string;
    name: string;

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

    constructor(title: string, brand: string, rows: number, slots: number) {
        this.title = title;
        this.brand = brand;
        //this.rowsCount = rows;
        //this.slotsCount = slots;
        this.size = rows + "x" + slots;
    }
} 