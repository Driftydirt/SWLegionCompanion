export class Modifier {
  constructor(name: string, description: string, amount?: number) {
    this.name = name;
    this.description = description;
    this.amount = amount;
  }
  private name: string;

  private description: string;

  private amount: number | undefined;

  public getAmount() {
    return this.amount;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public setAmount(value: number) {
    this.amount = value;
  }
}
