import { Modifier } from "../modifier";

export class Exemplar extends Modifier {
  constructor() {
    super(
      undefined,

      "Exemplar",
      "While attacking or defending, if a friendly unit is at 2 and in LOS of one or more friendly units that have the Exemplar keyword and that share the same faction or afliation as that attacking or defending unit, that attacking or defending unit may spend one aim, dodge, or surge token belonging to one of those units with Exemplar as if that attacking or defending unit had the token."
    );
  }
}
