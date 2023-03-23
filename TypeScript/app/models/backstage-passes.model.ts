import { Item } from "./item.model";
import { UpdatableItem } from "./updatable-item.model";

const BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
const BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
const BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD = 0;

export class BackstagePasses extends UpdatableItem {
    
  update() {
    this.decreaseSellIn();

    this.increaseQuality();
    if (
      this.item.sellIn < BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality();
    }

    if (
      this.item.sellIn < BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality();
    }

    if (this.item.sellIn < BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD) {
      this.resetQuality();
    }
  }
}
