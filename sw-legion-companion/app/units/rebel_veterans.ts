import { HeavyWeapon } from "../heavy_weapon";
import { Modifier } from "../modifier";
import { Personnel } from "../personnel";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { a280 } from "../weapons/a280";
import { unarmed } from "../weapons/unarmed";

export class RebelVeterans extends UnitPersonnelHeavyWeapon {
  constructor(
    heavyWeapon: HeavyWeapon | undefined,
    personnel: Personnel | undefined
  ) {
    super("Rebel Veterans", 4, 1, 1, [unarmed, a280], heavyWeapon, personnel);

    this.modifiers = [
      new Modifier(
        "Defend 1",
        "After a unit with the Defend X keyword is issued an order, it gains X dodge tokens."
      ),
      new Modifier(
        "Coordinate: Emplacement Trooper",
        "After a unit with the Coordinate keyword is issued an order, it may issue an order to a friendly unit at range 1 that has the unit name or unit type specified. A unit that has one or more unit names or unit types listed can only choose one of these listed unit names or unit types to issue an order to using the Coordinate keyword. If a unit already has the Coordinate keyword and gains another instance of the keyword, the unit may choose which targets to issue an order to from the two instances of the keyword; it does not issue two orders."
      ),
    ];
  }
}
