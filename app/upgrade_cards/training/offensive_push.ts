import { Tactical } from "@/app/modifiers/tactical";
import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export class OffensivePush extends UpgradeCard {
  constructor() {
    super("Offensive Push", "While performing a move, gain Tactical 1", true, [
      new Tactical(1),
    ]);
  }
}
