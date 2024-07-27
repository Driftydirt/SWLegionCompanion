import { Modifier } from "../modifier";

export class Impact extends Modifier {
  constructor(amount?: number) {
    super(
      undefined,

      "Impact",
      `During the Modify Attack Dice step,
       if the defending unit has the Armor X keyword, 
       a unit whose attack pool includes a weapon that has the 
       Impact X keyword can modify up to X hit results
       to critical results for that attack.`,
      amount
    );
  }
}
