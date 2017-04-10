import { Item } from "app/models/item.model";

export interface AppStore {
  items: Item[];
  selectedItem: Item;
};