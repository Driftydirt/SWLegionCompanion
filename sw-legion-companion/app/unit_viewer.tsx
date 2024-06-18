"use client";

import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import WeaponViewer from "./weapon_viewer";
import { AttackPool, displayAttackPool } from "./helpers";
import { Unit } from "./interfaces";
import ModifierViewer from "@/modifier_viewer";

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
  const [weapon, setWeapon] = useState<Weapon>();
  const [unitDefeated, setUnitDefeated] = useState<boolean>(false);
  const [heavyWeaponDefeated, setHeavyWeaponDefeated] =
    useState<boolean>(false);
  const [hasHeavyWeapon, setHasHeavyWeapon] = useState<boolean>();

  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [hasAttackPool, setHasAttackPool] = useState<boolean>(false);

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
    setWeapon(unit.getWeapon());
    setHasHeavyWeapon(unit.getHeavyWeapon() != undefined);
    setHeavyWeaponDefeated(unit.getHeavyWeaponDefeated());
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
        <h2>Weapons:</h2>
        <ListGroup>
          <ListGroup.Item>
            <h3>Unit Weapon:</h3>
            <WeaponViewer weapon={weapon}></WeaponViewer>
          </ListGroup.Item>
          {hasHeavyWeapon ? (
            <ListGroup.Item>
              <h3>Heavy Weapon:</h3>
              <WeaponViewer
                weapon={unit.getHeavyWeapon()?.getWeapon()}
              ></WeaponViewer>
            </ListGroup.Item>
          ) : null}
        </ListGroup>
        {!unitDefeated ? (
          <div>
            <Button onClick={() => setAttackPool(unit.generateAttackPool())}>
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
