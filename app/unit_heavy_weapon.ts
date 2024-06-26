import { HeavyWeapon } from "./heavy_weapon";
import { UnitHeavyWeaponInterface } from "./interfaces";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitHeavyWeapon extends UnitUpgradeCard {
  protected heavyWeapon: HeavyWeapon | undefined;
  protected heavyWeaponDefeated: boolean;
  constructor(
    unitHeavyWeaponInterface?: UnitHeavyWeaponInterface,
    name?: string,
    numberOfMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],
    heavyWeapon?: HeavyWeapon | undefined,
    movementSpeed?: number,
    defenceDie?: string,
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,
    upgradeCards?: UpgradeCard[]
  ) {
    if (unitHeavyWeaponInterface) {
      super(unitHeavyWeaponInterface.unitUpgradeCard);
      this.heavyWeapon = new HeavyWeapon(unitHeavyWeaponInterface.heavyWeapon);
      this.heavyWeaponDefeated = unitHeavyWeaponInterface.heavyWeaponDefeated;
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
        surgeToCrit,
        upgradeCards
      );
      this.heavyWeapon = heavyWeapon;
      this.heavyWeaponDefeated = false;
    }
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public getHeavyWeaponDefeated(): boolean {
    return this.heavyWeaponDefeated;
  }
  public setHeavyWeaponDefeated(value: boolean) {
    this.heavyWeaponDefeated = value;
  }
  public toInterface(): UnitHeavyWeaponInterface {
    return {
      type: "HeavyWeapon",
      heavyWeapon: this.heavyWeapon?.toHeavyWeaponInterface(),
      heavyWeaponDefeated: this.heavyWeaponDefeated,
      unitUpgradeCard: super.toUnitUpgradeCardInterface(),
    };
  }
}
