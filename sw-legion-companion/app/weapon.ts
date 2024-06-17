import { AttackPool } from "./unit";

export class Weapon {
  private name: string;
  private attackPool: AttackPool;

  private minRange: number;
  private maxRange: number;
  private modifiers: Modifier[] | undefined;
  constructor(
    name: string,
    whiteDice: number | undefined,
    blackDice: number | undefined,
    redDice: number | undefined,
    minRange: number,
    maxRange: number,
    modifiers: Modifier[] | undefined
  ) {
    this.name = name;
    this.attackPool = { whiteDice, blackDice, redDice };
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.modifiers = modifiers;
  }
  public getName(): string {
    return this.name;
  }

  public getMinRange(): number {
    return this.minRange;
  }

  public getMaxRange(): number {
    return this.maxRange;
  }

  public getModifiers(): Modifier[] | undefined {
    return this.modifiers;
  }
  public getAttackPool(): AttackPool {
    return this.attackPool;
  }
}
