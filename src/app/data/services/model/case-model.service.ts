import { Injectable } from '@angular/core';
import { Case } from '../../models/Case/Case.model';
import { Layer } from '../../models/case/layer.model';
import { RowCountType, SlotCountType } from '../../types/basic/number.type';
import { StorageKey } from '../../types/enums/storage-key.type';
import { KeyValueStorageService } from '../storage/key-value.storage.service';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root'
})

export class CaseModelService extends ModelService<Case> {

  constructor(storage: KeyValueStorageService) {
    super(storage, StorageKey.Cases);
    this.setData({
      "202020": <Case> {
        id: "202020",
        title: "Main storage",
        brand: "Pelicase",
        rowsCount: 2,
        slotsCount: 5,
        icon: "",
        size: "2x5",
        name: "",
        isMarked: false,
        layers: [
          <Layer> {
            title: "Storage",
            rowsCount: 2,
            slotsCount: 5,
            watchIds: ["101010", null, null, "101011", null, null, "101013", null, null]
          },
          <Layer> {
            title: "Accessoires",
            rowsCount: 1,
            slotsCount: 5,
            watchIds: ["101010", null, null, null, null]
          },
          <Layer> {
            title: "Tools",
            rowsCount: 0,
            slotsCount: 0,
            watchIds: []
          }
        ]
      },
      "202021": <Case> {
        id: "202021",
        title: "Travel pouch",
        brand: "Patek Philippe",
        rowsCount: 1,
        slotsCount: 1,
        icon: "",
        size: "1x1",
        name: "",
        isMarked: false,
        layers: [
          <Layer> {
            title: "Cushion",
            watchIds: ["101010"]
          }
        ]
      }
    });
  }
}

/*

        layers: <Layer> {
          title: "Top",
          watchIds: ["101010", null, null, "101011"]
        }
        */