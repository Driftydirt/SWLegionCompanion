import { CompelTrooper } from "../modifiers/compel";
import { Deflect } from "../modifiers/deflect";
import { ImmunePierce } from "../modifiers/immune_pierce";
import { MasterOfTheForce } from "../modifiers/master_of_the_force";
import { Relentless } from "../modifiers/relentless";
import { UnitForce } from "../unit_force";
import { UpgradeCard } from "../upgrade_card";
import { vadersLightsaber } from "../weapons/vader's_lightsaber";

export class VaderCommander extends UnitForce {
  constructor(forceUpgrades?: UpgradeCard[]) {
    super(
      undefined,

      "Darth Vader",
      1,
      8,
      0,
      [vadersLightsaber],
      1,
      "Red",
      "Trooper",
      false,
      false,
      false,
      forceUpgrades
    );

    this.modifiers = [
      new CompelTrooper(),
      new Deflect(),
      new ImmunePierce(),
      new MasterOfTheForce(1),
      new Relentless(),
    ];
  }
}
