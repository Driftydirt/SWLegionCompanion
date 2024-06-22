import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export const portableScanner = new UpgradeCard(
  "Portable Scanner",
  "You gain Take Cover 1",
  false,
  [new TakeCover(1)]
);
