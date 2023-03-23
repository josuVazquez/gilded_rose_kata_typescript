import { Item } from "./item.model";

const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;
const BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
const BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
const BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD = 0;
const DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case AGED_BRIE:
          this.decreaseSellIn(item);
          this.updateAgedBrieQuality(item);
          break;
        case BACKSTAGE_PASSES:
          this.decreaseSellIn(item);
          this.updateBackstagePassesQuality(item);
          break;
        case SULFURAS:
          break;
        default:
          this.decreaseSellIn(item);
          this.updateDefaultItemQuality(item);
          break;
      }
    }
    return this.items;
  }

  decreaseSellIn(item: Item) {
    item.sellIn -= 1;
  }

  updateAgedBrieQuality(item: Item) {
    this.increaseQuality(item);

    if (item.sellIn < AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
      this.increaseQuality(item);
    }
  }

  updateBackstagePassesQuality(item: Item) {
    this.increaseQuality(item);

    if (
      item.sellIn < BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(item);
    }

    if (
      item.sellIn < BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(item);
    }

    if (item.sellIn < BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD) {
      this.resetQuality(item);
    }
  }

  updateDefaultItemQuality(item: Item) {
    this.decreaseQuality(item);

    if (item.sellIn < DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
      this.decreaseQuality(item);
    }
  }

  resetQuality(item: Item) {
    item.quality = 0;
  }

  increaseQuality(item: Item) {
    if (item.quality < MAX_QUALITY) {
      item.quality += 1;
    }
  }

  decreaseQuality(item: Item) {
    if (item.quality > MIN_QUALITY) {
      item.quality -= 1;
    }
  }
}
