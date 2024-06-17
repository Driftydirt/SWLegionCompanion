export class Modifier {
  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
  private name: string;

  private description: string;

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }
}
