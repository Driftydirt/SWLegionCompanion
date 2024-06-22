import { Modifier } from "./modifier";

export class UpgradeCard {
  protected name: string;
  protected description: string;
  protected exhaustable: boolean;
  protected hasModifiers: boolean;
  protected modifiers: Modifier[] | undefined;

  protected exhausted: boolean | undefined;
  constructor(
    name: string,
    description: string,
    exhaustable: boolean,
    modifiers: Modifier[] | undefined
  ) {
    this.name = name;
    this.description = description;
    this.exhaustable = exhaustable;
    this.modifiers = modifiers;
    this.hasModifiers = modifiers != undefined;
    if (this.exhaustable) this.exhausted = false;
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
}
