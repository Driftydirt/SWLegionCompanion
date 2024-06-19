"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button } from "react-bootstrap";

type HeavyWeaponViewerProps = {
  weapon: Weapon;
  currentMinis: number | undefined;
  freeMinis: number;
  maxMinis: number;

  handleChangingMinisPerWeapon: (weapon: Weapon, minis: number) => void;
};

export default function HeavyWeaponViewer({
  weapon,
  currentMinis,
  freeMinis,
  maxMinis,

  handleChangingMinisPerWeapon,
}: HeavyWeaponViewerProps) {
  const [name, setName] = useState<string>();
  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [minRange, setMinRange] = useState<number>();
  const [maxRange, setMaxRange] = useState<number>();
  const [modifiers, setModifiers] = useState<number>();
  if (currentMinis === undefined) currentMinis = 0;

  useEffect(() => {
    setName(weapon.getName());
    setAttackPool(weapon.getAttackPool());
    setMinRange(weapon.getMinRange());
    setMaxRange(weapon.getMaxRange());
  }, [weapon]);

  return (
    <>
      <div>
        <h4>{name}</h4>
        <p>
          {currentMinis}/{1}
        </p>
        <Row>
          <Col>
            <Button
              className="btn-half"
              disabled={freeMinis === 0 || currentMinis >= 1}
              onClick={() => {
                currentMinis != undefined
                  ? (currentMinis = currentMinis + 1)
                  : (currentMinis = 0);
                handleChangingMinisPerWeapon(weapon, currentMinis);
              }}
            >
              +
            </Button>
          </Col>
          <Col>
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => {
                currentMinis != undefined
                  ? (currentMinis = currentMinis - 1)
                  : (currentMinis = 0);
                handleChangingMinisPerWeapon(weapon, currentMinis);
              }}
            >
              -
            </Button>
          </Col>
        </Row>
        {attackPool && displayAttackPool(attackPool)}
      </div>
    </>
  );
}
