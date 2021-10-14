import { RowCountType, SlotCountType } from "../../types/basic/number.type";

export class Layer {
    title: string = "Default"

    rowsCount: RowCountType;
    slotsCount: SlotCountType;
    watchIds: string[] = [];

    constructor(title: string, rowsCount: RowCountType, slotsCount: SlotCountType) {
        this.rowsCount = rowsCount;
        this.slotsCount = slotsCount;
        this.watchIds.fill(null, 0, rowsCount * slotsCount);
    }
}