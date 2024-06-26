import { ModifierInterface, WeaponInterface } from "./interfaces";
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
    weaponInterface?: WeaponInterface,
    name?: string,
    whiteDice?: number,
    blackDice?: number,
    redDice?: number,
    minRange?: number,
    maxRange?: number,
    modifiers?: Modifier[] | undefined,
    exhaustable: boolean = false
  ) {
    if (weaponInterface) {
      const interfacesModifers: Modifier[] = [];
      weaponInterface.modifiers?.forEach((modifier) =>
        interfacesModifers.push(new Modifier(modifier))
      );
      this.name = weaponInterface.name;
      this.attackPool = weaponInterface.attackPool;
      this.minRange = weaponInterface.minRange;
      this.maxRange = weaponInterface.maxRange;
      this.modifiers = interfacesModifers;
      this.exhaustable = weaponInterface.exhaustable;
      this.exhausted = weaponInterface.exhausted;
    } else {
      whiteDice === undefined ? (whiteDice = 0) : whiteDice;
      blackDice === undefined ? (blackDice = 0) : blackDice;
      redDice === undefined ? (redDice = 0) : redDice;

      const initAttackPool: AttackPool = { whiteDice, blackDice, redDice };
      this.name = name ? name : "";
      this.attackPool = initAttackPool;
      this.minRange = minRange ? minRange : 0;
      this.maxRange = maxRange ? maxRange : 0;
      this.modifiers = modifiers;
      this.exhaustable = exhaustable;
      if (exhaustable) this.exhausted = false;
    }
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

  public toWeaponInterface(): WeaponInterface {
    const modifierInterfaces: ModifierInterface[] = [];
    this.modifiers &&
      this.modifiers.forEach((modifier) =>
        modifierInterfaces.push(modifier.toInterface())
      );
    return {
      name: this.name,
      attackPool: this.attackPool,
      minRange: this.minRange,
      maxRange: this.maxRange,
      modifiers: modifierInterfaces,
      exhausted: this.exhausted,
      exhaustable: this.exhaustable,
    };
  }
}
