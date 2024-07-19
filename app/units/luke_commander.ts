import { Block } from "../modifiers/block";
import { Charge } from "../modifiers/charge";
import { Deflect } from "../modifiers/deflect";
import { ImmunePierce } from "../modifiers/immune_pierce";
import { Inspire } from "../modifiers/inspire";
import { Jump } from "../modifiers/jump";
import { Sharpshooter } from "../modifiers/sharpshooter";
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
      new Block(),
      new Charge(),
      new ImmunePierce(),
      new Inspire(2),
      new Sharpshooter(1),
    ];
  }
}
