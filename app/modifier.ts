import { ModifierInterface } from "./interfaces";

export class Modifier {
  constructor(
    modifierInterface?: ModifierInterface,
    name?: string,
    description?: string,
    amount?: number
  ) {
    if (modifierInterface) {
      this.name = modifierInterface.name;
      this.description = modifierInterface.description;
      this.amount = modifierInterface.amount;
    } else {
      this.name = name ? name : "";
      this.description = description ? description : "";
      this.amount = amount;
    }
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

  public toInterface(): ModifierInterface {
    return {
      name: this.name,
      description: this.description,
      amount: this.amount,
    };
  }
}
