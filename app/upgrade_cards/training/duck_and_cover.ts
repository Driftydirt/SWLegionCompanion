import { Tactical } from "@/app/modifiers/tactical";
import { UpgradeCard } from "@/app/upgrade_card";

export class DuckAndCover extends UpgradeCard {
  constructor() {
    super(
      "Duck And Cover",
      "While defending against a ranged attack, during the Apply Dodge and Cover step, you may gain 1 suppression token.",
      true,
      undefined
    );
  }
}
