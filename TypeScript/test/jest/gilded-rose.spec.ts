import { GildedRose } from "@/gilded-rose";
import { UpdateBundleProject } from "typescript";
import { BackstagePasses } from "../../app/models/backstage-passes.model";
import { Item } from "../../app/models/item.model";
import { UpdatableItemFactory } from "../../app/models/updatable-item.factory";
import { UpdatableItem } from "../../app/models/updatable-item.model";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const whateverItem = new Item("foo", 0, 0);
    const updatableItem: UpdatableItem =
    UpdatableItemFactory.updatableItem(whateverItem);
    const gildedRose = new GildedRose([updatableItem]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should sellIn value decreased ", () => {
    const whateverItem = new Item("whatever", 10, 0);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(whateverItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(whateverItem.sellIn).toBe(9);
  });

  it("should quality value decreased ", () => {
    const whateverItem = new Item("whatever", 1, 10);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(whateverItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(whateverItem.quality).toBe(9);
  });

  it("should quality twice as much when sellby is passes ", () => {
    const whateverItem = new Item("whatever", 0, 10);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(whateverItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(whateverItem.quality).toBe(8);
  });

  it("should quality is never negative", () => {
    const whateverItem = new Item("whatever", 0, 0);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(whateverItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(whateverItem.quality).toBe(0);
  });

  it("should AgedBrieIncreasesQualityWithAge", () => {
    const agedBrieItem = new Item("Aged Brie", 5, 1);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(agedBrieItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(agedBrieItem.quality).toBe(2);
  });

  it("should QualityNeverIncreasesPastFifty", () => {
    const agedBrieItem = new Item("Aged Brie", 5, 50);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(agedBrieItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(agedBrieItem.quality).toBe(50);
  });

  it("should SulfurasNeverChanges", () => {
    const sulfurasItem = new Item("Sulfuras, Hand of Ragnaros", 0, 25);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(sulfurasItem);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(sulfurasItem.quality).toBe(25);
    expect(sulfurasItem.sellIn).toBe(0);
  });

  it("should BackstagePass Increases Quality By One If SellBy Greater Than Ten", () => {
    const backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(backstagePasses);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(21);
  });

  it("should BackstagePass Increases Quality By Two If SellBy Smaller Than Ten", () => {
    const backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(backstagePasses);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(22);
  });

  it("should BackstagePass Increases Quality By Three If SellBy Smaller Than 5", () => {
    const backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(backstagePasses);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(23);
  });

  it("should BackstagePass Loses Value After Sell By Passes", () => {
    const backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    const updatableItem: UpdatableItem =
      UpdatableItemFactory.updatableItem(backstagePasses);

    const gildedRose = new GildedRose([updatableItem]);
    gildedRose.updateQuality();
    expect(backstagePasses.quality).toBe(0);
  });
});
