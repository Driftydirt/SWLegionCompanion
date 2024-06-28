"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { Weapon } from "../weapon";
import { Modifier } from "../modifier";
import ModifierViewer from "./modifier_viewer";

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
  const [modifiers, setModifiers] = useState<Modifier[]>();
  const [currentMinis, setCurrentMinis] = useState<number>();
  const [exhausted, setExhausted] = useState<boolean>();
  const [isExhaustible, setIsExhaustible] = useState<boolean>();

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
    setExhausted(weapon.getExhausted());
    setIsExhaustible(weapon.isExhaustable());
    setModifiers(weapon.getModifiers());
  }, [weapon]);

  useEffect(() => {
    if (exhausted === undefined) return;
    setCurrentMinis(0);
    weapon.setExhausted(exhausted);
  }, [exhausted]);

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

  useEffect(() => {
    if (initCurrentMinis === 0) setCurrentMinis(undefined);
  }, [initCurrentMinis]);

  return (
    <>
      <Col className={`${exhausted === true ? "exhausted" : null}`}>
        <Row>
          <Col>
            <p>{name}</p>
          </Col>
          <Col>
            <p>Range: </p>
            <p>
              {minRange}-{maxRange}
            </p>
          </Col>
        </Row>
        <p>
          {currentMinis}/{maxMinis}
        </p>
        <Row>
          <ButtonGroup>
            <Button
              className="btn-half"
              disabled={freeMinis === 0 || exhausted}
              onClick={() => handleMaxMinis()}
            >
              All
            </Button>
            <Button
              className="btn-half"
              disabled={freeMinis === 0 || exhausted}
              onClick={() => handleIncrementMinis()}
            >
              +
            </Button>
            <Button
              className="btn-half"
              disabled={currentMinis === 0 || exhausted}
              onClick={() => handleDecrementMinis()}
            >
              -
            </Button>
            <Button
              className="btn-half"
              disabled={currentMinis === 0 || exhausted}
              onClick={() => handleMinimumMinis()}
            >
              Min
            </Button>
          </ButtonGroup>{" "}
        </Row>
        {attackPool && displayAttackPool(attackPool)}
        {modifiers ? (
          <div className="center-text">
            <ModifierViewer modifiers={modifiers}></ModifierViewer>
          </div>
        ) : null}
        {isExhaustible && !exhausted ? (
          <Button onClick={() => setExhausted(true)}>Exhaust</Button>
        ) : null}
        {isExhaustible && exhausted ? (
          <Button onClick={() => setExhausted(false)}>Recover</Button>
        ) : null}
      </Col>
    </>
  );
}
