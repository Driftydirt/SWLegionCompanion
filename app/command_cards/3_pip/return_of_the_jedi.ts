import { CommandCard } from "@/app/command_card";

export class ReturnOfTheJedi extends CommandCard {
  constructor() {
    super(
      undefined,
      "Return of the Jedi",
      "When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper unit at range 1-3 of him may remove 1 suppression token.",

      3,
      "Darth Vader and 2 Units"
    );
  }
}
