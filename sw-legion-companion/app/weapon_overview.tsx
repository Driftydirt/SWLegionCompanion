import { useEffect, useState } from "react";
import {
  AttackPool,
  MinisPerWeapon,
  displayAttackPool,
  generateAttackPool,
} from "./helpers";
import { Weapon } from "./weapon";
import { Button, ListGroup } from "react-bootstrap";
import WeaponViewer from "./weapon_viewer";
import { HeavyWeapon } from "./heavy_weapon";
import HeavyWeaponViewer from "./heavy_weapon_viewer";

type WeaponOverviewProps = {
  weapons: Weapon[];
  heavyWeapon: HeavyWeapon | undefined;
  maxMinis: number;
  heavyWeaponDefeated: boolean;
  unitDefeated: boolean;
};
//updates minis per weapon for using in generating attack pool
export default function WeaponOverview({
  weapons,
  heavyWeapon,
  maxMinis,
  heavyWeaponDefeated,
  unitDefeated,
}: WeaponOverviewProps) {
  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [hasAttackPool, setHasAttackPool] = useState<boolean>();
  const [minisPerWeapon, setMinisPerWeapon] = useState<MinisPerWeapon>();
  let allocatedMinis = 0;
  minisPerWeapon &&
    minisPerWeapon.forEach(
      (minis) => (allocatedMinis = allocatedMinis + minis)
    );
  const [freeMinis, setFreeMinis] = useState<number>(maxMinis - allocatedMinis);
  const handleChangingMinisPerWeapon = (weapon: Weapon, minis: number) => {
    if (minisPerWeapon === undefined) return;
    minisPerWeapon.set(weapon, minis);
    let allocatedMinis = 0;
    minisPerWeapon.forEach(
      (minis) => (allocatedMinis = allocatedMinis + minis)
    );
    setMinisPerWeapon(minisPerWeapon);
    setFreeMinis(maxMinis - allocatedMinis);
  };

  useEffect(() => {
    if (!minisPerWeapon) setMinisPerWeapon(new Map());
  }, [minisPerWeapon]);
  useEffect(() => {
    setHasAttackPool(attackPool != undefined);
  }, [attackPool]);

  return (
    <>
      <h2>Weapons:</h2>
      <ListGroup>
        {weapons.map((weapon) => (
          <ListGroup.Item>
            <WeaponViewer
              weapon={weapon}
              maxMinis={maxMinis}
              initCurrentMinis={minisPerWeapon && minisPerWeapon.get(weapon)}
              freeMinis={freeMinis}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></WeaponViewer>
          </ListGroup.Item>
        ))}
        {heavyWeapon ? (
          <ListGroup.Item>
            <HeavyWeaponViewer
              weapon={heavyWeapon}
              initCurrentMinis={
                minisPerWeapon && minisPerWeapon.get(heavyWeapon)
              }
              freeMinis={freeMinis}
              heavyWeaponDefeated={heavyWeaponDefeated}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></HeavyWeaponViewer>
          </ListGroup.Item>
        ) : null}
      </ListGroup>
      {!unitDefeated && freeMinis != maxMinis ? (
        <div>
          <Button
            onClick={() => {
              setAttackPool(generateAttackPool(minisPerWeapon));
            }}
          >
            Generate Attack Pool!
          </Button>{" "}
          {hasAttackPool ? (
            <div>
              {" "}
              {attackPool && displayAttackPool(attackPool)}
              <Button variant="danger" onClick={() => setAttackPool(undefined)}>
                Clear Attack Pool
              </Button>
            </div>
          ) : null}{" "}
        </div>
      ) : null}
    </>
  );
}
