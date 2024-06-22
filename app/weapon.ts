import { Modifier } from "./modifier";
import { AttackPool } from "./ui/helpers";

export class Weapon {
  private name: string;
  private attackPool: AttackPool;
  protected exhausted: boolean | undefined;
  protected exhaustable: boolean;

  private minRange: number;
  private maxRange: number;
  private modifiers: Modifier[] | undefined;
  constructor(
    name: string,
    whiteDice: number,
    blackDice: number,
    redDice: number,
    minRange: number,
    maxRange: number,
    modifiers: Modifier[] | undefined,
    exhaustable: boolean = false
  ) {
    this.name = name;
    this.attackPool = { whiteDice, blackDice, redDice };
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.modifiers = modifiers;
    this.exhaustable = exhaustable;
    if (exhaustable) this.exhausted = false;
  }

  public isExhaustable() {
    return this.exhaustable;
  }

  public getExhausted() {
    return this.exhausted;
  }
  public setExhausted(value: boolean) {
    this.exhausted = value;
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
