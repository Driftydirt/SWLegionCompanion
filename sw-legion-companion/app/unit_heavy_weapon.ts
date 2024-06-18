import { HeavyWeapon } from "./heavy_weapon";
import { AttackPool } from "./helpers";
import { Unit } from "./unit";
import { Weapon } from "./weapon";

export class UnitHeavyWeapon extends Unit {
  protected heavyWeapon: HeavyWeapon | undefined;
  protected heavyWeaponDefeated: boolean;
  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon,
    heavyWeapon: HeavyWeapon | undefined
  ) {
    super(name, numberOfMinis, woundsPerMini, courage, weapon);
    this.heavyWeapon = heavyWeapon;
    this.heavyWeaponDefeated = false;
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public setHeavyWeaponDefeated(value: boolean) {
    this.heavyWeaponDefeated = value;
  }
  public generateAttackPool(): AttackPool {
    const baseAttackPool = super.generateAttackPool();
    const heavyWeaponAttackPool = this.heavyWeapon?.getWeapon().getAttackPool();
    if (!heavyWeaponAttackPool || this.heavyWeaponDefeated)
      return baseAttackPool;
    baseAttackPool.whiteDice =
      baseAttackPool.whiteDice + heavyWeaponAttackPool.whiteDice;
    baseAttackPool.blackDice + heavyWeaponAttackPool.blackDice;
    baseAttackPool.redDice + heavyWeaponAttackPool.redDice;
    return baseAttackPool;
  }
}
