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
import ModifierViewer from "@/modifier_viewer";
import WeaponOverview from "./weapon_overview";
import { HeavyWeapon } from "./heavy_weapon";

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

  const [minisPerWeapon, setMinisPerWeapon] = useState<MinisPerWeapon>();

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
    setHeavyWeapon(unit.getHeavyWeapon());
    setHasHeavyWeapon(unit.getHeavyWeapon() != undefined);
    setHeavyWeaponDefeated(unit.getHeavyWeaponDefeated());
    setMinisPerWeapon(new Map());
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
    unit.setHeavyWeaponDefeated(heavyWeaponDefeated);
  }, [heavyWeaponDefeated]);

  return (
    <Container>
      <div>
        <Row sm="6">
          <Col>
            <h3>{name}</h3>
          </Col>
          <Col>
            <div>
              <p>
                Regular Minis: {currentMinis}/{numberOfMinis}
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
                      (currentMinis === 1 && !heavyWeaponDefeated)
                    }
                    onClick={() => handleDecrementMinis()}
                  >
                    -
                  </Button>
                </Col>
              </Row>
            </div>
            {hasHeavyWeapon ? (
              <div>
                Heavy Weapon Minis: {heavyWeaponDefeated ? 0 : 1}/1
                <Row>
                  <Col>
                    <Button
                      className="btn-half"
                      disabled={!heavyWeaponDefeated}
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
              </div>
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col>
            <ModifierViewer modifiers={unit.getModifiers()}></ModifierViewer>
          </Col>
          <Col>
            <p>Wounds: {woundsPerMini}</p>
            <p>Courage: {courage}</p>
          </Col>
        </Row>
        {weapons && minisPerWeapon && numberOfMinis && (
          <WeaponOverview
            weapons={weapons}
            heavyWeapon={heavyWeapon}
            maxMinis={heavyWeapon ? numberOfMinis + 1 : numberOfMinis}
            minisPerWeapon={minisPerWeapon}
          ></WeaponOverview>
        )}
        {!unitDefeated ? (
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
                <Button
                  variant="danger"
                  onClick={() => setAttackPool(undefined)}
                >
                  Clear Attack Pool
                </Button>
              </div>
            ) : null}{" "}
          </div>
        ) : null}
      </div>
    </Container>
  );
}
