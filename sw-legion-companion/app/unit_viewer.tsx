"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { Button, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import WeaponViewer from "./weapon_viewer";
import { AttackPool, displayAttackPool } from "./helpers";
import { Unit } from "./interfaces";

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
  const [defeated, setDefeated] = useState<boolean>(false);
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

  useEffect(() => {
    setNumberOfMinis(unit.getNumberOfMinis());
    setCurrentMinis(unit.getCurrentMinis());
    setName(unit.getName());
    setWoundsPerMini(unit.getWoundsPerMini());
    setCourage(unit.getCourage());
    setWeapon(unit.getWeapon());
    setHasHeavyWeapon(unit.getHeavyWeapon() != undefined);
  }, [unit]);

  useEffect(() => {
    setHasAttackPool(attackPool != undefined);
  }, [attackPool]);

  useEffect(() => {
    if (currentMinis === undefined) return;

    if (defeated && currentMinis === 0) return;

    setDefeated(currentMinis === 0);
    numberOfMinis && setHasMaxMinis(numberOfMinis === currentMinis);
    unit.setCurrentMinis(currentMinis);
  }, [currentMinis]);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <div>
          <p>
            Number of Minis: {currentMinis}/{numberOfMinis}
          </p>
          {hasMaxMinis ? null : (
            <Button
              onClick={() => {
                handleIncrementMinis();
              }}
            >
              +
            </Button>
          )}{" "}
          <Button
            disabled={defeated}
            onClick={() => setCurrentMinis((prev) => prev && prev - 1)}
          >
            -
          </Button>
        </div>
        <p>Wounds: {woundsPerMini}</p>
        <p>Courage: {courage}</p>
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
        {!defeated ? (
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
    </>
  );
}
