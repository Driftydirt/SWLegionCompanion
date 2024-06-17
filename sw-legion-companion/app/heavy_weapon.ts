import { Weapon } from "./weapon";

export class HeavyWeapon {
  private weapon: Weapon;
  private name: string;
  private health: number;
  private modifiers: Modifier[] | undefined;
  constructor(
    weapon: Weapon,
    name: string,
    health: number,
    modifiers: Modifier[] | undefined
  ) {
    this.weapon = weapon;
    this.name = name;
    this.health = health;
    this.modifiers = modifiers;
  }

  public getWeapon(): Weapon {
    return this.weapon;
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public getModifiers(): Modifier[] | undefined {
    return this.modifiers;
  }
}
