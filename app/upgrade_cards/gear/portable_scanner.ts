import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export class PortableScanner extends UpgradeCard {
  constructor() {
    super("Portable Scanner", "You gain Take Cover 1", true, [
      new TakeCover(1),
    ]);
  }
}
