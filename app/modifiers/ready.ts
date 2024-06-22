import { Modifier } from "../modifier";

export class Ready extends Modifier {
  constructor(amount?: number) {
    super(
      "Ready",
      "After a unit with the Ready X keyword performs a standby action, it gains X aim tokens.",
      amount
    );
  }
}
