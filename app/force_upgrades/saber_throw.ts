import { UpgradeCard } from "../upgrade_card";

export class SaberThrow extends UpgradeCard {
  constructor() {
    super(
      undefined,

      "Saber Throw",
      "Action: Choose 1 of your melee weapons. Perform a ranged attack with that weapon against an enemy unti at range 1-2, using half of that weapons dice, rounded up. This is treated as an attack action.",
      false,
      undefined
    );
  }
}
