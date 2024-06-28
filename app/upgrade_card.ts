import { ModifierInterface, UpgradeCardInterface } from "./interfaces";
import { Modifier } from "./modifier";

export class UpgradeCard {
  protected name: string;
  protected description: string;
  protected exhaustable: boolean;
  protected hasModifiers: boolean;
  protected modifiers: Modifier[] | undefined;

  protected exhausted: boolean | undefined;
  constructor(
    upgradeCardInterface?: UpgradeCardInterface,
    name?: string,
    description?: string,
    exhaustable?: boolean,
    modifiers?: Modifier[] | undefined
  ) {
    if (upgradeCardInterface) {
      const interfacesModifers: Modifier[] = [];
      upgradeCardInterface.modifiers?.forEach((modifier) =>
        interfacesModifers.push(new Modifier(modifier))
      );
      this.name = upgradeCardInterface.name;
      this.description = upgradeCardInterface.description;
      this.exhaustable = upgradeCardInterface.exhaustable;
      this.exhausted = upgradeCardInterface.exhausted;
      this.modifiers = interfacesModifers;
    } else {
      this.name = name ? name : "";
      this.description = description ? description : "";
      this.exhaustable = exhaustable ? exhaustable : false;
      this.modifiers = modifiers ? modifiers : [];
    }

    this.hasModifiers = modifiers != undefined;
    if (this.exhaustable && this.exhausted === undefined)
      this.exhausted = false;
  }
  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public isExhaustable(): boolean {
    return this.exhaustable;
  }

  public getExhausted(): boolean | undefined {
    return this.exhausted;
  }
  public getModifiers(): Modifier[] | undefined {
    return this.modifiers;
  }
  public getHasModifiers(): boolean {
    return this.hasModifiers;
  }

  public setExhausted(value: boolean) {
    this.exhausted = value;
  }

  public toInterface(): UpgradeCardInterface {
    const modifierInterfaces: ModifierInterface[] = [];
    this.modifiers &&
      this.modifiers.forEach((modifier) =>
        modifierInterfaces.push(modifier.toInterface())
      );
    return {
      name: this.name,
      description: this.description,
      exhaustable: this.exhaustable,
      exhausted: this.exhausted,
      hasModifiers: this.hasModifiers,
      modifiers: modifierInterfaces,
    };
  }
}
