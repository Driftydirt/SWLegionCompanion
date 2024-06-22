import { TakeCover } from "@/app/modifiers/take_cover";
import { UpgradeCard } from "@/app/upgrade_card";

export const hqUplink = new UpgradeCard(
  "HQ Uplink",
  "During the Issue Orders step of the Command Phase, issue an order to yourself",
  true,
  undefined
);
