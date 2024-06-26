import { Modifier } from "../modifier";

export class Guardian extends Modifier {
  constructor(amount: number) {
    super(
      undefined,

      "Guardian",
      "While a friendly trooper unit at range 1 and in LOS of a unit that has the Guardian X keyword is defending against a ranged attack, it may cancel up to X hit Hit Symbol results during the Modify Attack Dice step of the attack sequence. For each hit Hit Symbol result canceled in this way, the unit with the Guardian X keyword rolls a defense die matching the one on its Unit Card. After converting any defense surge Defense surge Symbol results according to its surge chart or by using surge tokens, the unit with the Guardian X keyword suffers one wound for each blank result. A defending unit that has the Guardian X keyword used on it gains a suppression token as normal."
    );
  }
}
