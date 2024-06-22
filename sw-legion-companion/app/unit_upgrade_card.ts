import { Unit } from "./unit";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitUpgradeCard extends Unit {
  protected upgradeCards: UpgradeCard[] | undefined;
  protected hasUpgradeCards: boolean;
  constructor(
    name: string,
    baseMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    upgradeCards?: UpgradeCard[]
  ) {
    super(name, baseMinis, woundsPerMini, courage, weapon);
    this.upgradeCards = upgradeCards;
    this.hasUpgradeCards = upgradeCards != undefined;
  }
  public getHasUpgradeCards() {
    return this.hasUpgradeCards;
  }
  public getUpgradeCards() {
    return this.upgradeCards;
  }
}
