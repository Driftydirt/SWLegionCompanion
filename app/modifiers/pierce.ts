import { Modifier } from "../modifier";

export class Pierce extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Pierce",
      `If an attacking unit attacks with a weapon with the Pierce X keyword 
      it may cancel up to X block results during the Modify Defence Dice step.`,
      amount
    );
  }
}
