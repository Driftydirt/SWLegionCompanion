"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect, useState } from "react";
import { AttackPool, displayAttackPool } from "./helpers";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { Weapon } from "../weapon";
import { Modifier } from "../modifier";
import ModifierViewer from "./modifier_viewer";

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
  const [modifiers, setModifiers] = useState<Modifier[]>();
  const [currentMinis, setCurrentMinis] = useState(initCurrentMinis);
  const [exhausted, setExhausted] = useState<boolean>();
  const [isExhaustible, setIsExhaustible] = useState<boolean>();

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
    setExhausted(weapon.getExhausted());
    setIsExhaustible(weapon.isExhaustable());
    setModifiers(weapon.getModifiers());
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
          <p>
            {currentMinis}/{heavyWeaponDefeated ? 0 : 1}
          </p>
        </Row>
        <Row>
          <ButtonGroup>
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
            <Button
              className="btn-half"
              disabled={currentMinis === 0}
              onClick={() => handleDecrementMinis()}
            >
              -
            </Button>
          </ButtonGroup>
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
