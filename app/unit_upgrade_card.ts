import { Unit } from "./unit";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitUpgradeCard extends Unit {
  protected upgradeCards: UpgradeCard[] | undefined;
  protected hasUpgradeCards: boolean;
  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    movementSpeed: number,
    defenceDie: string,
    unitType: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,

    upgradeCards?: UpgradeCard[]
  ) {
    super(
      name,
      numberOfMinis,
      woundsPerMini,
      courage,
      weapon,
      movementSpeed,
      defenceDie,
      unitType,
      surgeToDefend,
      surgeToHit,
      surgeToCrit
    );
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
