export class Personnel {
  private name: string;
  private health: number;
  private modifiers: Modifier[] | undefined;

  constructor(name: string, health: number, modifiers: Modifier[] | undefined) {
    this.name = name;
    this.health = health;
    this.modifiers = modifiers;
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
