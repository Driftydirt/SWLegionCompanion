import { Modifier } from "../modifier";

export class FireSupport extends Modifier {
  constructor() {
    super(
      undefined,

      "Fire Support",
      "When another friendly unit performs a ranged attack, during the Form Attack Pools step an unengaged unit with the Fire Support keyword that has a faceup order token may choose to add one eligible weapon to the attack pool, including any weapon keywords, for each miniature in the unit that has LOS to at least one miniature in the enemy unit. After using the Fire Support keyword, turn that unit’s faceup order token facedown."
    );
  }
}
