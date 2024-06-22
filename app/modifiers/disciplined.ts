import { Modifier } from "../modifier";

export class Disciplined extends Modifier {
  constructor(amount: number) {
    super(
      "Disciplined",
      "After a unit with the Disciplined X keyword is issued an order, it may remove up to X suppression tokens.",
      amount
    );
  }
}
