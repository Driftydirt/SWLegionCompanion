import { CommandCard } from "@/app/command_card";

export class StandingOrders extends CommandCard {
  constructor() {
    super(
      undefined,
      "Standing Orders",
      "At the end of the Command Phase, return this card to your hand.",

      4,
      "1 units"
    );
  }
}
