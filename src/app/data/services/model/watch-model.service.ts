import { Injectable } from '@angular/core';
import { Watch } from '../../models/watch/watch.model';
import { StorageKey } from '../../types/enums/storage-key.type';
import { KeyValueStorageService } from '../storage/key-value.storage.service';
import { ModelService } from './model.service';

@Injectable({
  providedIn: 'root'
})

export class WatchModelService extends ModelService<Watch> {

  constructor(storage: KeyValueStorageService) {
    super(storage, StorageKey.Watches);
    this.setData({
      "101010": new Watch("Tudor", "Black Bay Chrono", "101010"),
      "101011": new Watch("Tudor", "Black Bay 58", "101011"),
      "101012": new Watch("Vostok", "Amphibia 120", "101012")
    });
  }

  getAllGroupByBrand(): Object {
    const watches = this.getAll();
    let grouped = {};
    watches.forEach(watch => {
      if (grouped[watch.brand] == undefined) {
        grouped[watch.brand] = [watch];
      } else {
        grouped[watch.brand].push(watch);
      }
    });

    return grouped;
  }

  getPlaceholder(): Watch {
    const examples: Watch[] = [
      <Watch> {
        brand: "Seiko",
        subbrand: "5 Sports",
        model: "Seiko Arabic Dial 5",
        reference: "SNK063J5",
        title: "Eastern arabic dial - daydate"
      }
    ]

    return examples[Math.floor(Math.random() * examples.length)];
  }

}
