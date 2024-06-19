import { Modifier } from "./modifier";
import { Weapon } from "./weapon";

export class Unit {
  protected baseMinis: number;
  protected currentBaseMinis: number;
  protected name: string;
  protected woundsPerMini: number;
  protected courage: number;
  protected weapon: Weapon[];
  protected modifiers: Modifier[] | undefined;
  protected defeated: boolean;

  constructor(
    name: string,
    baseMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[]
  ) {
    this.name = name;
    this.woundsPerMini = woundsPerMini;
    this.courage = courage;
    this.weapon = weapon;
    this.baseMinis = baseMinis;
    this.currentBaseMinis = this.baseMinis;
    this.defeated = false;
  }
  public getNumberOfMinis(): number {
    return this.baseMinis;
  }

  public getCurrentMinis(): number {
    return this.currentBaseMinis;
  }

  public setCurrentMinis(value: number) {
    this.currentBaseMinis = value;
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

  public getWeapon(): Weapon[] {
    return this.weapon;
  }

  public getModifiers(): Modifier[] | undefined {
    return this.modifiers;
  }

  public setDefeated(value: boolean) {
    this.defeated = value;
  }
}
