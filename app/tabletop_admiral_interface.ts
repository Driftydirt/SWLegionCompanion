export interface TabletopAdmiralInterface {
  listname: string;
  points: number;
  faction: string;
  units: TTAUnitInterface[];
}

export interface TTAUnitInterface {
  name: string;
  upgrades: string[];
  loadout: string[];
}
