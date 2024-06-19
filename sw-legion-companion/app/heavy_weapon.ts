import { Modifier } from "./modifier";
import { Weapon } from "./weapon";

export class HeavyWeapon extends Weapon {
  private health: number;
  private cardModifiers: Modifier[] | undefined;
  constructor(
    name: string,
    health: number,
    whiteDice: number,
    blackDice: number,
    redDice: number,
    minRange: number,
    maxRange: number,
    cardModifiers: Modifier[] | undefined,
    weaponModifiers: Modifier[] | undefined
  ) {
    super(
      name,
      whiteDice,
      blackDice,
      redDice,
      minRange,
      maxRange,
      weaponModifiers
    );
    this.health = health;
    this.cardModifiers = cardModifiers;
  }

  public getHealth(): number {
    return this.health;
  }

  public getCardModifiers(): Modifier[] | undefined {
    return this.cardModifiers;
  }
}
