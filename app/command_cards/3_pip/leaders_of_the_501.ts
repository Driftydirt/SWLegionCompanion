import { CommandCard } from "@/app/command_card";

export class LeadersOfThe501st extends CommandCard {
  constructor() {
    super(
      undefined,
      "Leaders Of The 501st",
      "Permanent. Friendly units at range 2 of a friendly Anakin Skywalker and/or a friendly Clone Captain Rex gain Indomitable.",

      3,
      "3 Special Forces or Corps Units"
    );
  }
}
