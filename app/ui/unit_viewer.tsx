"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AttackPool } from "./helpers";

import WeaponOverview from "./weapon_overview";
import ModifierViewer from "./modifier_viewer";
import { HeavyWeapon } from "../heavy_weapon";
import { Unit } from "../interfaces";
import { UnitHeavyWeapon } from "../unit_heavy_weapon";
import { UnitPersonnelHeavyWeapon } from "../unit_personnel_heavy_weapon";
import { Weapon } from "../weapon";
import { UpgradeCard } from "../upgrade_card";
import UpgradeCardViewer from "./upgrage_card_viewer";
import { Health } from "./icons/health";
import { Courage } from "./icons/courage";
import { DefenceDice } from "./icons/defence_dice";
import { DefenceViewer } from "./defence_viewer";
import { SurgeViewer } from "./surge_viewer";

type UnitViewerProps = {
  unit: Unit;
};

export default function UnitViewer({ unit }: UnitViewerProps) {
  const [numberOfMinis, setNumberOfMinis] = useState<number>();
  const [currentMinis, setCurrentMinis] = useState<number>();
  const [hasMaxMinis, setHasMaxMinis] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [woundsPerMini, setWoundsPerMini] = useState<number>();
  const [courage, setCourage] = useState<number>();
  const [weapons, setWeapons] = useState<Weapon[]>();
  const [unitDefeated, setUnitDefeated] = useState<boolean>(false);
  const [heavyWeaponDefeated, setHeavyWeaponDefeated] =
    useState<boolean>(false);
  const [hasHeavyWeapon, setHasHeavyWeapon] = useState<boolean>();
  const [heavyWeapon, setHeavyWeapon] = useState<HeavyWeapon>();
  const [heavyWeaponLeader, setHeavyWeaponLeader] = useState<boolean>();

  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [hasAttackPool, setHasAttackPool] = useState<boolean>(false);
  const [hasUpgradeCards, setHasUpgradesCards] = useState<boolean>();
  const [upgradeCards, setUpgradeCards] = useState<UpgradeCard[]>();
  const [unitType, setUnitType] = useState<string>();
  const [defenceDie, setDefenceDie] = useState<string>();
  const [movementSpeed, setMovementSpeed] = useState<number>();
  const [surgeToHit, setSurgeToHit] = useState<boolean>();
  const [surgeToDefend, setSurgeToDefend] = useState<boolean>();
  const [surgeToCrit, setSurgeToCrit] = useState<boolean>();

  const handleIncrementMinis = () => {
    setCurrentMinis((prev) => {
      if (currentMinis && numberOfMinis && currentMinis + 1 > numberOfMinis)
        return;
      if (prev != undefined) return prev + 1;
    });
  };

  const handleDecrementMinis = () => {
    setCurrentMinis((prev) => prev && prev - 1);
  };

  useEffect(() => {
    setNumberOfMinis(unit.getNumberOfMinis());
    setCurrentMinis(unit.getCurrentMinis());
    setName(unit.getName());
    setWoundsPerMini(unit.getWoundsPerMini());
    setCourage(unit.getCourage());
    setWeapons(unit.getWeapon());
    setUnitType(unit.getUnitType());
    setDefenceDie(unit.getDefenceDie());
    setMovementSpeed(unit.getMovementSpeed());
    setSurgeToHit(unit.getSurgeToHit());
    setSurgeToCrit(unit.getSurgeToCrit());
    setSurgeToDefend(unit.getSurgeToDefend());
    if ("heavyWeapon" in unit) {
      const heavyWep = unit.getHeavyWeapon();
      setHeavyWeapon(unit.getHeavyWeapon());
      setHasHeavyWeapon(unit.getHeavyWeapon() != undefined);
      setHeavyWeaponDefeated(unit.getHeavyWeaponDefeated());
      if (heavyWep) setHeavyWeaponLeader(heavyWep.isLeader());
    }

    setHasUpgradesCards(unit.getHasUpgradeCards());
    setUpgradeCards(unit.getUpgradeCards());
  }, [unit]);

  useEffect(() => {
    setHasAttackPool(attackPool != undefined);
  }, [attackPool]);

  useEffect(() => {
    if (currentMinis === undefined) return;

    if (unitDefeated && currentMinis === 0) return;

    setUnitDefeated(currentMinis === 0);
    numberOfMinis && setHasMaxMinis(numberOfMinis === currentMinis);
    unit.setCurrentMinis(currentMinis);
  }, [currentMinis]);

  useEffect(() => {
    unit.setDefeated(unitDefeated);
  }, [unitDefeated]);

  useEffect(() => {
    if (
      unit instanceof UnitHeavyWeapon &&
      unit instanceof UnitPersonnelHeavyWeapon
    ) {
      unit.setHeavyWeaponDefeated(heavyWeaponDefeated);
    }
  }, [heavyWeaponDefeated]);

  return (
    <Row>
      <Col
        className={`border-3 ${
          unitDefeated && heavyWeaponDefeated ? "defeated" : null
        }`}
        md={10}
        lg={9}
        xl={8}
        xxl={7}
      >
        <Row>
          <Col sm={2}>
            <h5>{name}</h5>
            <p>{unitType}</p>
          </Col>

          <Col sm={3}>
            <p>
              Regular: {currentMinis}/{numberOfMinis}
            </p>
            <Row>
              <Col>
                <Button
                  className="btn-half"
                  disabled={hasMaxMinis}
                  onClick={() => {
                    handleIncrementMinis();
                  }}
                >
                  +
                </Button>
              </Col>

              <Col>
                <Button
                  className="btn-half"
                  disabled={
                    unitDefeated ||
                    (currentMinis === 1 &&
                      hasHeavyWeapon &&
                      !heavyWeaponDefeated &&
                      !heavyWeaponLeader)
                  }
                  onClick={() => handleDecrementMinis()}
                >
                  -
                </Button>
              </Col>
            </Row>
          </Col>
          {hasHeavyWeapon ? (
            <Col sm={3}>
              <p>Heavy: {heavyWeaponDefeated ? 0 : 1}/1</p>
              {heavyWeapon && heavyWeapon.getHealth() > 1 ? (
                <p>Wounds: {heavyWeapon?.getHealth()}</p>
              ) : null}
              <Row>
                <Col>
                  <Button
                    className="btn-half"
                    disabled={
                      !heavyWeaponDefeated ||
                      (unitDefeated && !heavyWeaponLeader)
                    }
                    onClick={() => {
                      setHeavyWeaponDefeated(false);
                    }}
                  >
                    +
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="btn-half"
                    disabled={
                      heavyWeaponDefeated ||
                      (currentMinis != undefined &&
                        heavyWeaponLeader &&
                        currentMinis > 0)
                    }
                    onClick={() => setHeavyWeaponDefeated(true)}
                  >
                    -
                  </Button>
                </Col>
              </Row>
            </Col>
          ) : null}
          {heavyWeapon ? (
            <Col sm={{ span: 3, offset: 1 }} style={{ paddingRight: 0 }}>
              <DefenceViewer
                colour={defenceDie}
                wounds={woundsPerMini}
                courage={courage}
              ></DefenceViewer>
            </Col>
          ) : (
            <Col sm={{ span: 3, offset: 4 }} style={{ paddingRight: 0 }}>
              <DefenceViewer
                colour={defenceDie}
                wounds={woundsPerMini}
                courage={courage}
              ></DefenceViewer>
            </Col>
          )}
        </Row>
        <Row>
          <Col sm={8}>
            <ModifierViewer modifiers={unit.getModifiers()}></ModifierViewer>
          </Col>
          <Col className="right-text">
            <SurgeViewer
              surgeToCrit={surgeToCrit}
              surgeToHit={surgeToHit}
              surgeToDefend={surgeToDefend}
            ></SurgeViewer>
            <Row>
              <p>Movement Speed: {movementSpeed}</p>
            </Row>
          </Col>
        </Row>
        {weapons && currentMinis != undefined && (
          <WeaponOverview
            weapons={weapons}
            heavyWeapon={heavyWeapon}
            heavyWeaponDefeated={heavyWeaponDefeated}
            maxMinis={
              heavyWeapon && !heavyWeaponDefeated
                ? currentMinis + 1
                : currentMinis
            }
            unitDefeated={unitDefeated}
          ></WeaponOverview>
        )}
      </Col>
      {hasUpgradeCards && !unitDefeated && upgradeCards ? (
        <Col sm={3} md={3} lg={2} xl={2} xxl={1}>
          <h5>Upgrade Cards:</h5>
          {upgradeCards.map((card) => (
            <UpgradeCardViewer
              key={card.getName()}
              card={card}
            ></UpgradeCardViewer>
          ))}
        </Col>
      ) : null}
    </Row>
  );
}
