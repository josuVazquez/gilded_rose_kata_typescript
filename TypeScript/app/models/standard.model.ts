import { Item } from "./item.model";
import { UpdatableItem } from "./updatable-item.model";

const DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;

export class StandardItem extends UpdatableItem {
  update() {
    this.decreaseSellIn();

    this.decreaseQuality();

    if (this.item.sellIn < DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
      this.decreaseQuality();
    }
  }
}
