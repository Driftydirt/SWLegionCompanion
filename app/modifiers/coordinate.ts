import { Modifier } from "../modifier";

export class CoordinateEmplacement extends Modifier {
  constructor() {
    super(
      undefined,

      "Coordinate: Emplacement Trooper",
      "After a unit with the Coordinate keyword is issued an order, it may issue an order to a friendly unit at range 1 that has the unit name or unit type specified. A unit that has one or more unit names or unit types listed can only choose one of these listed unit names or unit types to issue an order to using the Coordinate keyword."
    );
  }
}
