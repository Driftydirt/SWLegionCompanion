import { useEffect, useState } from "react";
import { MinisPerWeapon } from "./helpers";
import { Weapon } from "./weapon";
import { ListGroup } from "react-bootstrap";
import WeaponViewer from "./weapon_viewer";
import { HeavyWeapon } from "./heavy_weapon";
import HeavyWeaponViewer from "./heavy_weapon_viewer";

type WeaponOverviewProps = {
  weapons: Weapon[];
  heavyWeapon: HeavyWeapon | undefined;
  maxMinis: number;
  minisPerWeapon: MinisPerWeapon;
  heavyWeaponDefeated: boolean;
};
//updates minis per weapon for using in generating attack pool
export default function WeaponOverview({
  weapons,
  heavyWeapon,
  maxMinis,
  minisPerWeapon,
  heavyWeaponDefeated,
}: WeaponOverviewProps) {
  let allocatedMinis = 0;
  minisPerWeapon.forEach((minis) => (allocatedMinis = allocatedMinis + minis));
  const [freeMinis, setFreeMinis] = useState<number>(maxMinis - allocatedMinis);
  const handleChangingMinisPerWeapon = (weapon: Weapon, minis: number) => {
    minisPerWeapon.set(weapon, minis);
    let allocatedMinis = 0;
    minisPerWeapon.forEach(
      (minis) => (allocatedMinis = allocatedMinis + minis)
    );
    setFreeMinis(maxMinis - allocatedMinis);
  };

  return (
    <>
      <h2>Weapons:</h2>
      <ListGroup>
        {weapons.map((weapon) => (
          <ListGroup.Item>
            <WeaponViewer
              weapon={weapon}
              maxMinis={maxMinis}
              initCurrentMinis={minisPerWeapon.get(weapon)}
              freeMinis={freeMinis}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></WeaponViewer>
          </ListGroup.Item>
        ))}
        {heavyWeapon ? (
          <ListGroup.Item>
            <HeavyWeaponViewer
              weapon={heavyWeapon}
              initCurrentMinis={minisPerWeapon.get(heavyWeapon)}
              freeMinis={freeMinis}
              heavyWeaponDefeated={heavyWeaponDefeated}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></HeavyWeaponViewer>
          </ListGroup.Item>
        ) : null}
      </ListGroup>
    </>
  );
}
