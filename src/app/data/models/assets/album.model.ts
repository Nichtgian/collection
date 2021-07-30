import { Asset } from "./asset.model";

export class Album {
    name: string;
    category: TextSuggestion;
    icon: IconSelection;
    assets: Asset[];
}
