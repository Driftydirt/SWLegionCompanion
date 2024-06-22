import { pierce } from "../modifiers/pierce";
import { Weapon } from "../weapon";
import { Modifier } from "../modifier";

export const impact = new Modifier(
  "Impact",
  "During the Modify Attack Dice step, if the defending unit has the Armor or Armor X keyword, a unit whose attack pool includes a weapon that has the Impact X keyword can modify up to X hit hit Hit Symbol results to critical Crit Symbol results for that attack."
);

export const anakinLightsaber = new Weapon(
  "Anakin's Lightsaber",
  0,
  6,
  0,
  0,
  0,
  [impact, pierce]
);
