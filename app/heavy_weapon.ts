import { HeavyWeaponInterface, ModifierInterface } from "./interfaces";
import { Modifier } from "./modifier";
import { Weapon } from "./weapon";

export class HeavyWeapon extends Weapon {
  private health: number;
  private cardModifiers: Modifier[] | undefined;
  protected leader: boolean;
  constructor(
    heavyWeaponInterface?: HeavyWeaponInterface,
    name?: string,
    health?: number,
    whiteDice?: number,
    blackDice?: number,
    redDice?: number,
    minRange?: number,
    maxRange?: number,
    cardModifiers?: Modifier[] | undefined,
    weaponModifiers?: Modifier[] | undefined,
    leader: boolean = false
  ) {
    if (heavyWeaponInterface) {
      const interfaceModifier: Modifier[] = [];
      heavyWeaponInterface.cardModifiers?.forEach((modifier) =>
        interfaceModifier.push(new Modifier(modifier))
      );
      super(heavyWeaponInterface.weapon);
      this.health = heavyWeaponInterface.health;
      this.cardModifiers = interfaceModifier;
      this.leader = heavyWeaponInterface.leader;
    } else {
      super(
        undefined,
        name,
        whiteDice,
        blackDice,
        redDice,
        minRange,
        maxRange,
        weaponModifiers
      );
      this.health = health = 0;
      this.cardModifiers = cardModifiers = [];
      this.leader = leader = false;
    }
  }

  public getHealth(): number {
    return this.health;
  }

  public getCardModifiers(): Modifier[] | undefined {
    return this.cardModifiers;
  }
  public isLeader() {
    return this.leader;
  }
  public toHeavyWeaponInterface(): HeavyWeaponInterface {
    const cardModifiersInterfaces: ModifierInterface[] = [];
    this.cardModifiers &&
      this.cardModifiers.forEach((modifier) =>
        cardModifiersInterfaces.push(modifier.toInterface())
      );
    return {
      health: this.health,
      cardModifiers: cardModifiersInterfaces,
      leader: this.leader,
      weapon: super.toWeaponInterface(),
    };
  }
}
