import { AttackPool } from "./helpers";
import { Weapon } from "./weapon";

export class Unit {
  protected numberOfMinis: number;
  protected currentMinis: number;
  protected name: string;
  protected woundsPerMini: number;
  protected courage: number;
  protected weapon: Weapon;

  constructor(
    name: string,
    numberOfMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon
  ) {
    this.name = name;
    this.woundsPerMini = woundsPerMini;
    this.courage = courage;
    this.weapon = weapon;
    this.numberOfMinis = numberOfMinis;
    this.currentMinis = this.numberOfMinis;
  }
  public getNumberOfMinis(): number {
    return this.numberOfMinis;
  }

  public getCurrentMinis(): number {
    return this.currentMinis;
  }

  public setCurrentMinis(value: number) {
    this.currentMinis = value;
  }

  public getName(): string {
    return this.name;
  }

  public getWoundsPerMini(): number {
    return this.woundsPerMini;
  }

  public getCourage(): number {
    return this.courage;
  }

  public getWeapon(): Weapon {
    return this.weapon;
  }

  public generateAttackPool(): AttackPool {
    const unitAttackPool = this.weapon.getAttackPool();
    let minis = this.currentMinis;
    const attackPool: AttackPool = {
      whiteDice: minis * unitAttackPool.whiteDice,

      blackDice: minis * unitAttackPool.blackDice,

      redDice: minis * unitAttackPool.redDice,
    };
    return attackPool;
  }
}
