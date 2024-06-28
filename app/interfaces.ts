import { AttackPool } from "./ui/helpers";
import { UnitForce } from "./unit_force";
import { UnitHeavyWeapon } from "./unit_heavy_weapon";
import { UnitNoExtra } from "./unit_no_extra";
import { UnitPersonnel } from "./unit_personnel";
import { UnitPersonnelHeavyWeapon } from "./unit_personnel_heavy_weapon";
import { UnitUpgradeCard } from "./unit_upgrade_card";

export type Unit =
  | UnitForce
  | UnitHeavyWeapon
  | UnitPersonnel
  | UnitPersonnelHeavyWeapon
  | UnitNoExtra;

export interface ArmyInterface {
  id: string;
  units: UnitInterface[];
}

export type UnitInterface =
  | UnitForceInterface
  | UnitHeavyWeaponInterface
  | UnitPersonnelInterface
  | UnitPersonnelHeavyWeaponInterface
  | UnitNoExtraInterface;

export interface UnitForceInterface {
  type: "Force";
  unitUpgradeCard: UnitUpgradeCardInterface;
}
export interface UnitNoExtraInterface {
  type: "NoExtra";
  unitUpgradeCard: UnitUpgradeCardInterface;
}

export interface UnitUpgradeCardInterface {
  upgradeCards: UpgradeCardInterface[] | undefined;
  hasUpgradeCards: boolean;
  baseUnitInterface: BaseUnitInterface;
}

export interface UpgradeCardInterface {
  name: string;
  description: string;
  exhaustable: boolean;
  exhausted: boolean | undefined;
  hasModifiers: boolean;
  modifiers: ModifierInterface[] | undefined;
}

export interface ForceUpgradeInterface {
  upgradeCard: UpgradeCardInterface;
}

export interface ModifierInterface {
  name: string;
  description: string;
  amount?: number;
}

export interface BaseUnitInterface {
  baseMinis: number;
  currentBaseMinis: number;
  name: string;
  woundsPerMini: number;
  courage: number;
  weapons: WeaponInterface[];
  modifiers: ModifierInterface[] | undefined;
  defeated: boolean;
  defenceDie: string;
  surgeToCrit: boolean | undefined;
  surgeToHit: boolean | undefined;
  surgeToDefend: boolean | undefined;
  movementSpeed: number;
  unitType: string;
}

export interface WeaponInterface {
  name: string;
  attackPool: AttackPool;
  minRange: number;
  maxRange: number;
  modifiers: ModifierInterface[] | undefined;

  exhausted: boolean | undefined;
  exhaustable: boolean;
}

export interface UnitHeavyWeaponInterface {
  type: "HeavyWeapon";

  heavyWeapon: HeavyWeaponInterface | undefined;
  heavyWeaponDefeated: boolean;
  unitUpgradeCard: UnitUpgradeCardInterface;
}

export interface HeavyWeaponInterface {
  health: number;
  cardModifiers: ModifierInterface[] | undefined;
  leader: boolean;
  weapon: WeaponInterface;
}

export interface UnitPersonnelInterface {
  type: "Personnel";

  personnel: PersonnelInterface | undefined;
  unitUpgradeCard: UnitUpgradeCardInterface;
}

export interface PersonnelInterface {
  name: string;
  health: number;
  modifiers: ModifierInterface[] | undefined;
}

export interface UnitPersonnelHeavyWeaponInterface {
  type: "PersonnelHeavyWeapon";

  heavyWeapon: HeavyWeaponInterface | undefined;
  personnel: PersonnelInterface | undefined;
  heavyWeaponDefeated: boolean;
  unitUpgradeCard: UnitUpgradeCardInterface;
}
