import { UpdatableItem } from "./models/updatable-item.model";
export class GildedRose {
  items: Array<UpdatableItem>;

  constructor(items = [] as Array<UpdatableItem>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.update());
    return this.items;
  }
}
