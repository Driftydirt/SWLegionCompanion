"use client";

import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import WeaponViewer from "./weapon_viewer";
import {
  AttackPool,
  MinisPerWeapon,
  displayAttackPool,
  generateAttackPool,
} from "./helpers";
import { Unit } from "./interfaces";

import WeaponOverview from "./weapon_overview";
import { HeavyWeapon } from "./heavy_weapon";
import ModifierViewer from "./modifier_viewer";
import { UnitHeavyWeapon } from "./unit_heavy_weapon";
import { UnitPersonnelHeavyWeapon } from "./unit_personnel_heavy_weapon";

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

  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [hasAttackPool, setHasAttackPool] = useState<boolean>(false);
  const [hasForceUpgrades, setHasForceUpgrades] = useState<boolean>();
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
    if ("heavyWeapon" in unit) {
      setHeavyWeapon(unit.getHeavyWeapon());
      setHasHeavyWeapon(unit.getHeavyWeapon() != undefined);
      setHeavyWeaponDefeated(unit.getHeavyWeaponDefeated());
    }

    if ("forceUpgrades" in unit) {
      setHasForceUpgrades(unit.getForceUpgrades() != undefined);
    }
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
    <Col className="border-3" sm={5}>
      <Row>
        <Col sm={2}>
          <h5>{name}</h5>
        </Col>

        <Col sm={3}>
          <p>
            Regular: {currentMinis}/{numberOfMinis}
          </p>
          <Row>
            <Col sm={6}>
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

            <Col sm={6}>
              <Button
                className="btn-half"
                disabled={
                  unitDefeated ||
                  (currentMinis === 1 && hasHeavyWeapon && !heavyWeaponDefeated)
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
            <Row>
              <Col>
                <Button
                  className="btn-half"
                  disabled={!heavyWeaponDefeated || unitDefeated}
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
                  disabled={heavyWeaponDefeated}
                  onClick={() => setHeavyWeaponDefeated(true)}
                >
                  -
                </Button>
              </Col>
            </Row>
          </Col>
        ) : null}
      </Row>
      <Row>
        <Col sm={8}>
          <ModifierViewer modifiers={unit.getModifiers()}></ModifierViewer>
        </Col>
        <Col sm={4}>
          <p>Wounds: {woundsPerMini}</p>
          <p>Courage: {courage}</p>
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
      <Row>
        {hasForceUpgrades && "forceUpgrades" in unit
          ? unit.getForceUpgrades().map((force) => (
              <>
                <p>{force.getName()}</p>
              </>
            ))
          : null}
      </Row>
    </Col>
  );
}
