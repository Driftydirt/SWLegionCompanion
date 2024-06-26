import { UpgradeCard } from "@/app/upgrade_card";

export class Vigilance extends UpgradeCard {
  constructor() {
    super(
      undefined,

      "Vigilance",
      "During the End Phase, choose either 1 friendly trooper unit at range 1-2 or up to 2 friendly corps trooper units at range 1-2. Each chosen unit does not remove 1 dodge token.",
      false,
      []
    );
  }
}
