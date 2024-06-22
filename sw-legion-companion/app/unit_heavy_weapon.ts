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
    upgradeCards?: UpgradeCard[]
  ) {
    super(name, numberOfMinis, woundsPerMini, courage, weapon, upgradeCards);
    this.heavyWeapon = heavyWeapon;
    this.heavyWeaponDefeated = false;
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public setHeavyWeaponDefeated(value: boolean) {
    this.heavyWeaponDefeated = value;
  }
}
