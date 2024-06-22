import { HeavyWeapon } from "./heavy_weapon";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitHeavyWeapon extends UnitUpgradeCard {
  protected heavyWeapon: HeavyWeapon | undefined;
  protected heavyWeaponDefeated: boolean;
  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    heavyWeapon: HeavyWeapon | undefined,
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
      surgeToCrit,
      upgradeCards
    );
    this.heavyWeapon = heavyWeapon;
    this.heavyWeaponDefeated = false;
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
}
