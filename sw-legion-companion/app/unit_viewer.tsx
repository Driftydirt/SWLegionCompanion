"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { AttackPool, Unit } from "./unit";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import WeaponViewer from "./weapon_viewer";
import { displayAttackPool } from "./helpers";

type UnitViewerProps = {
  unit: Unit;
};

export default function UnitViewer({ unit }: UnitViewerProps) {
  const [numberOfMinis, setNumberOfMinis] = useState<number>();
  const [name, setName] = useState<string>();
  const [woundsPerMini, setWoundsPerMini] = useState<number>();
  const [courage, setCourage] = useState<number>();
  const [weapon, setWeapon] = useState<Weapon>();

  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [hasAttackPool, setHasAttackPool] = useState<boolean>(false);

  useEffect(() => {
    setNumberOfMinis(unit.getNumberOfMinis());
    setName(unit.getName());
    setWoundsPerMini(unit.getWoundsPerMini());
    setCourage(unit.getCourage());
    setWeapon(unit.getWeapon());
  }, [unit]);

  useEffect(() => {
    setHasAttackPool(attackPool != undefined);
  }, [attackPool]);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Number of Minis: {numberOfMinis}</p>
        <p>Wounds: {woundsPerMini}</p>
        <p>Courage: {courage}</p>
        Weapons:
        <WeaponViewer weapon={weapon}></WeaponViewer>
        <Button onClick={() => setAttackPool(unit.generateAttackPool())}>
          Generate Attack Pool!
        </Button>
        {hasAttackPool ? (
          <div>
            {" "}
            {displayAttackPool(attackPool)}
            <Button variant="danger" onClick={() => setAttackPool(undefined)}>
              Clear Attack Pool
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}
