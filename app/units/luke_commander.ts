import { Charge } from "../modifiers/charge";
import { Deflect } from "../modifiers/deflect";
import { ImmunePierce } from "../modifiers/immune_pierce";
import { Jump } from "../modifiers/jump";
import { UnitForce } from "../unit_force";
import { UpgradeCard } from "../upgrade_card";
import { anakinLightsaber } from "../weapons/anakin's_lightsaber";
import { lukeBlaster } from "../weapons/luke's_blaster";

export class LukeCommander extends UnitForce {
  constructor(forceUpgrades: UpgradeCard[]) {
    super(
      undefined,

      "Luke Skywalker",
      1,
      6,
      3,
      [anakinLightsaber, lukeBlaster],
      2,
      "Red",
      "Trooper",
      false,
      false,
      true,
      forceUpgrades
    );

    this.modifiers = [
      new Jump(1),
      new Charge(),
      new Deflect(),
      new ImmunePierce(),
    ];
  }
}
