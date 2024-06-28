import {
  BaseUnitInterface,
  ModifierInterface,
  UnitInterface,
  WeaponInterface,
} from "./interfaces";
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
    baseUnitInterface?: BaseUnitInterface,

    name?: string,
    baseMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],

    movementSpeed?: number,
    defenceDie?: string,
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false
  ) {
    if (baseUnitInterface) {
      const interfaceWeapon: Weapon[] = [];
      baseUnitInterface.weapons?.forEach((weapon) =>
        interfaceWeapon.push(new Weapon(weapon))
      );
      this.name = baseUnitInterface.name;
      this.woundsPerMini = baseUnitInterface.woundsPerMini;
      this.courage = baseUnitInterface.courage;
      this.weapon = interfaceWeapon;
      this.baseMinis = baseUnitInterface.baseMinis;
      this.currentBaseMinis = baseUnitInterface.currentBaseMinis;
      this.defeated = baseUnitInterface.defeated;
      this.surgeToDefend = baseUnitInterface.surgeToDefend;
      this.surgeToCrit = baseUnitInterface.surgeToCrit;
      this.surgeToHit = baseUnitInterface.surgeToHit;
      this.movementSpeed = baseUnitInterface.movementSpeed;
      this.defenceDie = baseUnitInterface.defenceDie;
      this.unitType = baseUnitInterface.unitType;
    } else {
      this.name = name ?? "";
      this.woundsPerMini = woundsPerMini ? woundsPerMini : 0;
      this.courage = courage ? courage : 0;
      this.weapon = weapon ? weapon : [];
      this.baseMinis = baseMinis ? baseMinis : 0;
      this.currentBaseMinis = this.baseMinis;
      this.defeated = false;
      this.surgeToDefend = surgeToDefend;
      this.surgeToCrit = surgeToCrit;
      this.surgeToHit = surgeToHit;
      this.movementSpeed = movementSpeed ? movementSpeed : 0;
      this.defenceDie = defenceDie ? defenceDie : "";
      this.unitType = unitType ? unitType : "";
    }
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

  public toBaseUnitInterface(): BaseUnitInterface {
    const weaponInterfaces: WeaponInterface[] = [];
    this.weapon.forEach((weapon) =>
      weaponInterfaces.push(weapon.toWeaponInterface())
    );
    const modifierInterfaces: ModifierInterface[] = [];
    this.modifiers &&
      this.modifiers.forEach((modifier) =>
        modifierInterfaces.push(modifier.toInterface())
      );
    return {
      baseMinis: this.baseMinis,
      currentBaseMinis: this.currentBaseMinis,
      name: this.name,
      woundsPerMini: this.woundsPerMini,
      courage: this.courage,
      movementSpeed: this.movementSpeed,
      unitType: this.unitType,
      weapons: weaponInterfaces,
      modifiers: modifierInterfaces,
      defeated: this.defeated,
      defenceDie: this.defenceDie,
      surgeToCrit: this.surgeToCrit,
      surgeToHit: this.surgeToHit,
      surgeToDefend: this.surgeToDefend,
    };
  }
}
