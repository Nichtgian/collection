import { StorageKey } from '../../types/enums/storage-key.type';
import { KeyValueStorageService } from '../storage/key-value.storage.service';

export abstract class ModelService<Model> {

  private _storage: KeyValueStorageService;
  private _key: StorageKey;
  private _data: Object = null;

  constructor(storage: KeyValueStorageService, key: StorageKey) {
    this._storage = storage;
    this._key = key;
    //this.initialize();
  }

  setData(data: Object): void {
    this._data = data;
  }

  async initialize(): Promise<any> {
    this._data = await this._storage.getObj(this._key);
  }

  set(id: string, model: Model): void {
    this._data[id] = model;
  }

  get(id: string): Model {
    return this._data[id];
  }

  getAll(): Model[] {
    return Object.values(this._data);
  }

  /*
  getBy(filter: function()): Model[] {
    const models = this.getAll();
    return models.filter(model => model)
  }
  */

  delete(id: string): void {
    delete this._data[id];
  }

  async save() {
    this._storage.setObj(this._key, this._data);
  }
}
