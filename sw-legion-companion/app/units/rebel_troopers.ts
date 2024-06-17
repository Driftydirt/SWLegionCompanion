import { HeavyWeapon } from "../heavy_weapon";
import { AttackPool } from "../helpers";
import { Modifier } from "../modifier";
import { Personnel } from "../personnel";
import { Unit } from "../unit";
import { a280 } from "../weapons/a280";

export class RebelTroopers extends Unit {
  private heavyWeapon: HeavyWeapon | undefined;
  private personnel: Personnel | undefined;
  constructor(
    heavyWeapon: HeavyWeapon | undefined,
    personnel: Personnel | undefined
  ) {
    super("Rebel Troopers", 4, 1, 1, a280);
    this.heavyWeapon = heavyWeapon;
    this.personnel = personnel;
    if (heavyWeapon) this.numberOfMinis = this.numberOfMinis + 1;
    if (personnel) this.numberOfMinis = this.numberOfMinis + 1;
    this.currentMinis = this.numberOfMinis;
    this.modifiers = [
      new Modifier(
        "Nimble",
        "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token."
      ),
    ];
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public getPersonnel(): Personnel | undefined {
    return this.personnel;
  }
  public generateAttackPool(): AttackPool {
    const unitAttackPool = this.weapon.getAttackPool();
    const heavyWeaponAttackPool = this.heavyWeapon?.getWeapon().getAttackPool();
    let minis = this.currentMinis;
    if (this.heavyWeapon) minis = this.currentMinis - 1;
    const attackPool: AttackPool = {
      whiteDice: minis * unitAttackPool.whiteDice,

      blackDice: minis * unitAttackPool.blackDice,

      redDice: minis * unitAttackPool.redDice,
    };
    if (!heavyWeaponAttackPool) return attackPool;
    attackPool.whiteDice =
      attackPool.whiteDice + heavyWeaponAttackPool.whiteDice;
    attackPool.blackDice + heavyWeaponAttackPool.blackDice;
    attackPool.redDice + heavyWeaponAttackPool.redDice;
    return attackPool;
  }
}
