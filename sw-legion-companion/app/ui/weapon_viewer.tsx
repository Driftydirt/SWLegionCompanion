"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { Weapon } from "../weapon";

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
        <p>{name}</p>
        <p>
          {currentMinis}/{maxMinis}
        </p>
        <Row>
          <ButtonGroup>
            <Button
              className="btn-half"
              disabled={freeMinis === 0}
              onClick={() => handleMaxMinis()}
            >
              All
            </Button>
            <Button
              className="btn-half"
              disabled={freeMinis === 0}
              onClick={() => handleIncrementMinis()}
            >
              +
            </Button>
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => handleDecrementMinis()}
            >
              -
            </Button>
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => handleMinimumMinis()}
            >
              Min
            </Button>
          </ButtonGroup>{" "}
        </Row>
        {attackPool && displayAttackPool(attackPool)}
      </div>
    </>
  );
}
