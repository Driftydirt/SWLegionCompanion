import { Modifier } from "../modifier";

export class ImmunePierce extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Immune: Pierce",
      `While a unit with the Immune: Pierce keyword is defending, 
      the attacker cannot use the Pierce X weapon keyword to cancel block results
      on defence dice during the Modify Defence Dice step.`,
      amount
    );
  }
}
