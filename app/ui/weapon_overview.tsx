import { useEffect, useState } from "react";
import {
  AttackPool,
  MinisPerWeapon,
  displayAttackPool,
  generateAttackPool,
} from "./helpers";
import { Button, Col, Row } from "react-bootstrap";
import WeaponViewer from "./weapon_viewer";
import HeavyWeaponViewer from "./heavy_weapon_viewer";
import { HeavyWeapon } from "../heavy_weapon";
import { Weapon } from "../weapon";
import { AttackDiceRoller } from "./attack_dice_roller";

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
  const [weaponSelected, setWeaponSelected] = useState<boolean>();
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
    setWeaponSelected(allocatedMinis > 0);
    setFreeMinis(maxMinis - allocatedMinis);
  };

  const clearSelection = () => {
    if (minisPerWeapon === undefined) return;
    setAttackPool(undefined);
    weapons.forEach((weapon) => minisPerWeapon.set(weapon, 0));
    if (heavyWeapon) minisPerWeapon.set(heavyWeapon, 0);
    setWeaponSelected(false);
  };

  useEffect(() => {
    if (!minisPerWeapon) setMinisPerWeapon(new Map());
  }, [minisPerWeapon]);
  useEffect(() => {
    setHasAttackPool(attackPool != undefined);
  }, [attackPool]);

  useEffect(() => {
    let allocatedMinis = 0;
    minisPerWeapon &&
      minisPerWeapon.forEach(
        (minis) => (allocatedMinis = allocatedMinis + minis)
      );
    if (maxMinis - allocatedMinis <= 0) setFreeMinis(0);
    else setFreeMinis(maxMinis - allocatedMinis);
  }, [maxMinis]);
  return (
    <>
      <Row>
        {weapons.map((weapon) => (
          <Col key={weapon.getName()}>
            <WeaponViewer
              weapon={weapon}
              maxMinis={maxMinis}
              initCurrentMinis={minisPerWeapon && minisPerWeapon.get(weapon)}
              freeMinis={freeMinis}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></WeaponViewer>
          </Col>
        ))}
        {heavyWeapon ? (
          <Col>
            {" "}
            <HeavyWeaponViewer
              weapon={heavyWeapon}
              initCurrentMinis={
                minisPerWeapon && minisPerWeapon.get(heavyWeapon)
              }
              freeMinis={freeMinis}
              heavyWeaponDefeated={heavyWeaponDefeated}
              handleChangingMinisPerWeapon={handleChangingMinisPerWeapon}
            ></HeavyWeaponViewer>
          </Col>
        ) : null}
      </Row>
      {!unitDefeated && weaponSelected ? (
        <div>
          <Button onClick={() => clearSelection()}>Clear Selection</Button>
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
              {attackPool ? (
                <AttackDiceRoller attackPool={attackPool}></AttackDiceRoller>
              ) : null}
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
