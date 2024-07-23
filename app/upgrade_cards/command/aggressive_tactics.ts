import { UpgradeCard } from "@/app/upgrade_card";

export class Vigilance extends UpgradeCard {
  constructor() {
    super(
      undefined,

      "Aggressive Tactics",
      "During the Command Phase, if you were nominated, after issuing orders choose up to 4 friendly units with faceup order tokens. Each chosen unit gains 1 surge token.",
      false,
      []
    );
  }
}
