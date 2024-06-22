import { HeavyWeapon } from "./heavy_weapon";
import { Personnel } from "./personnel";
import { Unit } from "./unit";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitPersonnelHeavyWeapon extends UnitUpgradeCard {
  protected heavyWeapon: HeavyWeapon | undefined;
  protected personnel: Personnel | undefined;
  protected heavyWeaponDefeated: boolean;

  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],
    heavyWeapon: HeavyWeapon | undefined,
    personnel: Personnel | undefined,
    upgradeCards?: UpgradeCard[]
  ) {
    super(name, numberOfMinis, woundsPerMini, courage, weapon, upgradeCards);
    this.heavyWeapon = heavyWeapon;
    this.personnel = personnel;
    if (personnel) this.baseMinis = this.baseMinis + 1;
    this.currentBaseMinis = this.baseMinis;
    this.heavyWeaponDefeated = false;
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public setHeavyWeaponDefeated(value: boolean) {
    this.heavyWeaponDefeated = value;
  }

  public getHeavyWeaponDefeated(): boolean {
    return this.heavyWeaponDefeated;
  }
}
