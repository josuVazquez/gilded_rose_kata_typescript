import { Item } from "./item.model";

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export abstract class UpdatableItem extends Item {
    protected item: Item;

    constructor(item: Item) {
        super(item.name, item.sellIn, item.quality);
        this.item = item;
    }

    abstract update();

    decreaseSellIn() {
        this.item.sellIn -= 1;
    }

    increaseQuality() {
        if (this.item.quality < MAX_QUALITY) {
            this.item.quality += 1;
        }
    }

    decreaseQuality() {
        if (this.item.quality > MIN_QUALITY) {
            this.item.quality -= 1;
        }
    }

    resetQuality() {
        this.item.quality = 0;
    }
}