import { Scout } from "@/app/modifiers/scout";
import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export class ReconIntel extends UpgradeCard {
  constructor() {
    super(undefined, "Recon Intel", "You gain Scout 1", false, [new Scout(1)]);
  }
}
