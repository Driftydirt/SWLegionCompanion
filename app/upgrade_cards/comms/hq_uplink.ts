import { UpgradeCard } from "@/app/upgrade_card";

export class HqUplink extends UpgradeCard {
  constructor() {
    super(
      "HQ Uplink",
      "During the Issue Orders step of the Command Phase, issue an order to yourself",
      true,
      undefined
    );
  }
}
