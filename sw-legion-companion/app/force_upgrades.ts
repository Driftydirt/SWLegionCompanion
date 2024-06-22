export class ForceUpgrade {
  protected name: string;
  protected description: string;
  protected exhaustable: boolean;

  protected exausted: boolean | undefined;
  constructor(name: string, description: string, exhaustable: boolean) {
    this.name = name;
    this.description = description;
    this.exhaustable = exhaustable;
    if (this.exhaustable) this.exausted = false;
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

  public getExausted(): boolean | undefined {
    return this.exausted;
  }
}
