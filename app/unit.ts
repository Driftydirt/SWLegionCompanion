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
  protected defenceDie: string;
  protected surgeToCrit: boolean | undefined;
  protected surgeToHit: boolean | undefined;
  protected surgeToDefend: boolean | undefined;
  protected movementSpeed: number;
  protected unitType: string;

  constructor(
    name: string,
    baseMinis: number,
    woundsPerMini: number,
    courage: number,
    weapon: Weapon[],

    movementSpeed: number,
    defenceDie: string,
    unitType: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false
  ) {
    this.name = name;
    this.woundsPerMini = woundsPerMini;
    this.courage = courage;
    this.weapon = weapon;
    this.baseMinis = baseMinis;
    this.currentBaseMinis = this.baseMinis;
    this.defeated = false;
    this.surgeToDefend = surgeToDefend;
    this.surgeToCrit = surgeToCrit;
    this.surgeToHit = surgeToHit;
    this.movementSpeed = movementSpeed;
    this.defenceDie = defenceDie;
    this.unitType = unitType;
  }

  public getMovementSpeed(): number {
    return this.movementSpeed;
  }

  public setMovementSpeed(movementSpeed: number): void {
    this.movementSpeed = movementSpeed;
  }

  public getUnitType(): string {
    return this.unitType;
  }

  public setUnitType(unitType: string): void {
    this.unitType = unitType;
  }

  public getDefenceDie(): string {
    return this.defenceDie;
  }

  public getSurgeToCrit(): boolean | undefined {
    return this.surgeToCrit;
  }

  public getSurgeToHit(): boolean | undefined {
    return this.surgeToHit;
  }

  public getSurgeToDefend(): boolean | undefined {
    return this.surgeToDefend;
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
