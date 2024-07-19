import { Modifier } from "../modifier";

export class Guardian extends Modifier {
  constructor(amount: number) {
    super(
      undefined,

      "Guardian",
      "While a friendly trooper unit at 1 and in LOS of a unit that has the Guardian X keyword is defending against a ranged attack, it may cancel up to X hit a results during the Modify Attack Dice step of the attack sequence. For each hit a result canceled in this way, the unit with the Guardian X keyword rolls a defense die matching the one on its Unit Card. After converting any defense surge e results according to its surge chart or by using surge tokens, the unit with the Guardian X keyword sufers one wound for each blank result. A defending unit that has the Guardian X keyword used on it gains a suppression token as normal. A unit cannot use Guardian X if the defending unit also has the Guardian X keyword. If multiple friendly units can use the Guardian X keyword during an attack, the player who controls those units declares which unit is using the Guardian X keyword and resolves their ability before choosing whether to declare that another unit is using the Guardian X keyword. A unit cannot use Guardian X if it has a number of suppression tokens equal to or greater than its courage. Te Pierce X keyword can be used to cancel block d results on defense dice rolled by a unit using Guardian X; treat canceled block d results as blank results. Afer using Pierce X in this way, any unused Pierce X value can still be used to cancel block d results rolled by the defending unit. Additionally, a unit with the Guardian X keyword cannot beneft from backup and ignores the m rank requirement to provide backup."
    );
  }
}
