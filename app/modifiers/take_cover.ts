import { Modifier } from "../modifier";

export class TakeCover extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Take Cover",
      "As a card action, a unit with the Take Cover X keyword can choose up to X friendly units at 2. Each chosen unit gains one dodge token",
      amount
    );
  }
}
