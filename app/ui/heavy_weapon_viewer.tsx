"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button } from "react-bootstrap";
import { Weapon } from "../weapon";

type HeavyWeaponViewerProps = {
  weapon: Weapon;
  initCurrentMinis: number | undefined;
  freeMinis: number;
  heavyWeaponDefeated: boolean;
  handleChangingMinisPerWeapon: (weapon: Weapon, minis: number) => void;
};

export default function HeavyWeaponViewer({
  weapon,
  initCurrentMinis,
  freeMinis,
  heavyWeaponDefeated,

  handleChangingMinisPerWeapon,
}: HeavyWeaponViewerProps) {
  const [name, setName] = useState<string>();
  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [minRange, setMinRange] = useState<number>();
  const [maxRange, setMaxRange] = useState<number>();
  const [modifiers, setModifiers] = useState<number>();
  const [currentMinis, setCurrentMinis] = useState(initCurrentMinis);

  const handleIncrementMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(currentMinis + 1);
  };

  const handleDecrementMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(currentMinis - 1);
  };

  useEffect(() => {
    setName(weapon.getName());
    setAttackPool(weapon.getAttackPool());
    setMinRange(weapon.getMinRange());
    setMaxRange(weapon.getMaxRange());
  }, [weapon]);

  useEffect(() => {
    if (currentMinis === undefined) setCurrentMinis(0);
    currentMinis != undefined &&
      handleChangingMinisPerWeapon(weapon, currentMinis);
  }, [currentMinis]);

  useEffect(() => {
    if (heavyWeaponDefeated && weapon) {
      setCurrentMinis(0);
      handleChangingMinisPerWeapon(weapon, 0);
    }
  }, [heavyWeaponDefeated]);

  return (
    <>
      <div>
        <p>{name}</p>
        <p>
          {currentMinis}/{heavyWeaponDefeated ? 0 : 1}
        </p>
        <Row>
          <Col>
            <Button
              className="btn-half"
              disabled={
                freeMinis === 0 ||
                (currentMinis && currentMinis >= 1) ||
                heavyWeaponDefeated
              }
              onClick={() => handleIncrementMinis()}
            >
              +
            </Button>
          </Col>
          <Col>
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => handleDecrementMinis()}
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
