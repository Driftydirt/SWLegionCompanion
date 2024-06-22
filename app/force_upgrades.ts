import { Modifier } from "./modifier";
import { UpgradeCard } from "./upgrade_card";

export class ForceUpgrade extends UpgradeCard {
  constructor(
    name: string,
    description: string,
    exhaustable: boolean,
    modifiers: Modifier[] | undefined
  ) {
    super(name, description, exhaustable, modifiers);
  }
}
