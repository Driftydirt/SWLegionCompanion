import { Weapon } from "./weapon";

export type AttackPool = {
  whiteDice: number | undefined;
  blackDice: number | undefined;
  redDice: number | undefined;
};

export class Unit {
  private numberOfMinis: number;
  private name: string;
  private woundsPerMini: number;
  private courage: number;
  private weapon: Weapon;

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
  }
  public getNumberOfMinis(): number {
    return this.numberOfMinis;
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
    const individualAttackPool = this.weapon.getAttackPool();
    const attackPool: AttackPool = {
      whiteDice: individualAttackPool.whiteDice
        ? this.numberOfMinis * individualAttackPool.whiteDice
        : undefined,
      blackDice: individualAttackPool.blackDice
        ? this.numberOfMinis * individualAttackPool.blackDice
        : undefined,
      redDice: individualAttackPool.redDice
        ? this.numberOfMinis * individualAttackPool.redDice
        : undefined,
    };
    return attackPool;
  }
}
