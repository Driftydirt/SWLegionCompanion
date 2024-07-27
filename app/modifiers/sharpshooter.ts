import { Modifier } from "../modifier";

export class Sharpshooter extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Sharpshooter",
      `During the Determine Cover step, a unit with the Sharpshooter X keyword subtracts X 
      from the numerical value of the defender’s cover.`,
      amount
    );
  }
}
