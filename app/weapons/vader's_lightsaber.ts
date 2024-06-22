import { Weapon } from "../weapon";
import { Impact } from "../modifiers/impact";
import { Pierce } from "../modifiers/pierce";

export const vadersLightsaber = new Weapon(
  "Vader's Lightsaber",
  0,
  0,
  6,
  0,
  0,
  [new Impact(3), new Pierce(3)]
);
