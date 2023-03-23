import { Item } from "./item.model";
import { UpdatableItem } from "./updatable-item.model";

const AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;

export class AgedBrie extends UpdatableItem {
  update() {
    this.decreaseSellIn();

    this.increaseQuality();

    if (this.item.sellIn < AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
      this.increaseQuality();
    }
  }
}
