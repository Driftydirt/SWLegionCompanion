import { CommandCard } from "@/app/command_card";

export class IAmAJedi extends CommandCard {
  constructor() {
    super(
      undefined,
      "I Am A Jedi",
      "Luke Skywalker gains surge to defend and cannot perform attacks. When he is issued an order, he may choose up to 2 enemy trooper units at range 1. Those units cannot perform attacks.",

      3,
      "3 Units"
    );
  }
}
