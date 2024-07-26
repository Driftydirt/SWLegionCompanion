import { CommandCard } from "@/app/command_card";

export class LeadFromTheFront extends CommandCard {
  constructor() {
    super(
      undefined,
      "Lead From The Front",
      "When building a command hand, treat this card as though it has 2 pips. After a friendly commander is issued an order by this card, choose up to 3 other friendly units at range 1 of the commander unit. Each chosen unit gains 1 aim or 1 dodge token.",

      1,
      "1 Commander Unit"
    );
  }
}
