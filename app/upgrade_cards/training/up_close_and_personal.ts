import { Tactical } from "@/app/modifiers/tactical";
import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export class UpCloseAndPersonal extends UpgradeCard {
  constructor() {
    super(
      undefined,
      "Up Close and Personal",
      "After you perform a ranged attack at range 1-2, gain 1 dodge token.",
      false
    );
  }
}
