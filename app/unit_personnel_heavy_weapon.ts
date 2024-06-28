import { HeavyWeapon } from "./heavy_weapon";
import { UnitPersonnelHeavyWeaponInterface } from "./interfaces";
import { Personnel } from "./personnel";
import { UnitUpgradeCard } from "./unit_upgrade_card";
import { UpgradeCard } from "./upgrade_card";
import { Weapon } from "./weapon";

export class UnitPersonnelHeavyWeapon extends UnitUpgradeCard {
  protected heavyWeapon: HeavyWeapon | undefined;
  protected personnel: Personnel | undefined;
  protected heavyWeaponDefeated: boolean;

  constructor(
    unitPersonnelHeavyWeaponInterface?: UnitPersonnelHeavyWeaponInterface,
    name?: string,
    numberOfMinis?: number,
    woundsPerMini?: number,
    courage?: number,
    weapon?: Weapon[],
    heavyWeapon?: HeavyWeapon | undefined,
    personnel?: Personnel | undefined,
    movementSpeed?: number,
    defenceDie?: string,
    unitType?: string,
    surgeToDefend: boolean = false,
    surgeToHit: boolean = false,
    surgeToCrit: boolean = false,
    upgradeCards?: UpgradeCard[]
  ) {
    if (unitPersonnelHeavyWeaponInterface) {
      super(unitPersonnelHeavyWeaponInterface.unitUpgradeCard);
      if (unitPersonnelHeavyWeaponInterface.heavyWeapon)
        this.heavyWeapon = new HeavyWeapon(
          unitPersonnelHeavyWeaponInterface.heavyWeapon
        );
      if (unitPersonnelHeavyWeaponInterface.personnel)
        this.personnel = new Personnel(
          unitPersonnelHeavyWeaponInterface.personnel
        );
      this.heavyWeaponDefeated =
        unitPersonnelHeavyWeaponInterface.heavyWeaponDefeated;
    } else {
      super(
        undefined,
        name,
        numberOfMinis,
        woundsPerMini,
        courage,
        weapon,
        movementSpeed,
        defenceDie,
        unitType,
        surgeToDefend,
        surgeToHit,
        surgeToCrit,
        upgradeCards
      );
      this.heavyWeapon = heavyWeapon;
      this.personnel = personnel;
      if (personnel) this.baseMinis = this.baseMinis + 1;
      this.currentBaseMinis = this.baseMinis;
      this.heavyWeaponDefeated = false;
    }
  }

  public getHeavyWeapon(): HeavyWeapon | undefined {
    return this.heavyWeapon;
  }
  public setHeavyWeaponDefeated(value: boolean) {
    this.heavyWeaponDefeated = value;
  }

  public getHeavyWeaponDefeated(): boolean {
    return this.heavyWeaponDefeated;
  }
  public toInterface(): UnitPersonnelHeavyWeaponInterface {
    return {
      type: "PersonnelHeavyWeapon",
      heavyWeapon: this.heavyWeapon?.toHeavyWeaponInterface(),
      personnel: this.personnel?.toPersonnelInterface(),
      heavyWeaponDefeated: this.heavyWeaponDefeated,
      unitUpgradeCard: super.toUnitUpgradeCardInterface(),
    };
  }
}
