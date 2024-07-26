import { CommandCard } from "@/app/command_card";

export class MasterOfEvil extends CommandCard {
  constructor() {
    super(
      undefined,
      "Master Of Evil",
      "When Darth Vader is issued an order, he gains 1 dodge token. When Darth Vader activates, each enemy trooper unit at range 1-2 of him gains 3 suppression tokens.",

      3,
      "Darth Vader and 2 Units"
    );
  }
}
