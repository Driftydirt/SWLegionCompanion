import { UnitUpgradeCardInterface, UpgradeCardInterface } from "./interfaces";
import { Unit } from "./unit";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitUpgradeCard extends Unit {
  protected upgradeCards: UpgradeCard[] | undefined;
  protected hasUpgradeCards: boolean;
  constructor(
    unitUpgradeInterface?: UnitUpgradeCardInterface,
    name?: string,
    numberOfMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],
    movementSpeed?: number,
    defenceDie?: "white" | "red",
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,
    upgradeCards?: UpgradeCard[]
  ) {
    if (unitUpgradeInterface) {
      super(unitUpgradeInterface.baseUnitInterface);
      const interfaceUpgradeCars: UpgradeCard[] = [];
      unitUpgradeInterface.upgradeCards?.forEach((upgrade) =>
        interfaceUpgradeCars.push(new UpgradeCard(upgrade))
      );
      this.upgradeCards = interfaceUpgradeCars;
    } else {
      super(
        undefined,
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
    }

    this.hasUpgradeCards =
      this.upgradeCards != undefined && this.upgradeCards.length > 0;
  }
  public getHasUpgradeCards() {
    return this.hasUpgradeCards;
  }
  public getUpgradeCards() {
    return this.upgradeCards;
  }

  public toUnitUpgradeCardInterface(): UnitUpgradeCardInterface {
    const upgradeCardsInterfaces: UpgradeCardInterface[] = [];
    this.upgradeCards &&
      this.upgradeCards.forEach((card) =>
        upgradeCardsInterfaces.push(card.toInterface())
      );
    return {
      upgradeCards: upgradeCardsInterfaces,
      hasUpgradeCards: this.hasUpgradeCards,
      baseUnitInterface: super.toBaseUnitInterface(),
    };
  }
}
