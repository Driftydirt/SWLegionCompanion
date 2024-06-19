"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button } from "react-bootstrap";

type WeaponViewerProps = {
  weapon: Weapon;
  initCurrentMinis: number | undefined;
  freeMinis: number;
  maxMinis: number;
  handleChangingMinisPerWeapon: (weapon: Weapon, minis: number) => void;
};

export default function WeaponViewer({
  weapon,
  initCurrentMinis,
  freeMinis,
  maxMinis,
  handleChangingMinisPerWeapon,
}: WeaponViewerProps) {
  const [name, setName] = useState<string>();
  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [minRange, setMinRange] = useState<number>();
  const [maxRange, setMaxRange] = useState<number>();
  const [modifiers, setModifiers] = useState<number>();
  const [currentMinis, setCurrentMinis] = useState(initCurrentMinis);

  const handleMaxMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(currentMinis + freeMinis);
  };

  const handleIncrementMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(currentMinis + 1);
  };

  const handleDecrementMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(currentMinis - 1);
  };
  const handleMinimumMinis = () => {
    if (currentMinis != undefined) setCurrentMinis(0);
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
    if (currentMinis === undefined) setCurrentMinis(0);
    currentMinis && handleChangingMinisPerWeapon(weapon, currentMinis);
    if (currentMinis && currentMinis > maxMinis) {
      setCurrentMinis(maxMinis);
    }
  }, [maxMinis]);

  return (
    <>
      <div>
        <h4>{name}</h4>
        <p>
          {currentMinis}/{maxMinis}
        </p>
        <Row>
          <Col>
            <Button
              className="btn-half"
              disabled={freeMinis === 0}
              onClick={() => handleMaxMinis()}
            >
              All Available
            </Button>
          </Col>
          <Col>
            <Button
              className="btn-half"
              disabled={freeMinis === 0}
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
          <Col>
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => handleMinimumMinis()}
            >
              Min
            </Button>
          </Col>
        </Row>
        {attackPool && displayAttackPool(attackPool)}
      </div>
    </>
  );
}
