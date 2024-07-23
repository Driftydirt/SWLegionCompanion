export interface TabletopAdmiralInterface {
  listname: string;
  points: number;
  faction: "empire" | "republic" | "rebel";
  units: TTAUnitInterface[];
}

export interface TTAUnitInterface {
  name: string;
  upgrades: string[];
  loadout: string[];
}
