import { AgedBrie } from "./aged-brie.model";
import { BackstagePasses } from "./backstage-passes.model";
import { Item } from "./item.model";
import { StandardItem } from "./standard.model";
import { Sulfur } from "./sulfur.model";

const AGED_BRIE = "Aged Brie";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
const SULFURAS = "Sulfuras, Hand of Ragnaros";

export class UpdatableItemFactory {
  static updatableItem(item: Item) {
    switch (item.name) {
      case AGED_BRIE:
        return new AgedBrie(item);
      case BACKSTAGE_PASSES:
        return new BackstagePasses(item);
      case SULFURAS:
        return new Sulfur(item);
      default:
        return new StandardItem(item);
    }
  }
  static updatableItemList(itemList: Item[]) {
    return itemList.forEach(item => UpdatableItemFactory.updatableItem(item))
  }
}