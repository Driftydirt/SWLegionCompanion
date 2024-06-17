"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { AttackPool, Unit } from "./unit";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { displayAttackPool } from "./helpers";

type WeaponViewerProps = {
  weapon: Weapon | undefined;
};

export default function WeaponViewer({ weapon }: WeaponViewerProps) {
  const [name, setName] = useState<string>();
  const [attackPool, setAttackPool] = useState<AttackPool>();
  const [minRange, setMinRange] = useState<number>();
  const [maxRange, setMaxRange] = useState<number>();
  const [modifiers, setModifiers] = useState<number>();

  useEffect(() => {
    if (!weapon) return;
    setName(weapon.getName());
    setAttackPool(weapon.getAttackPool());
    setMinRange(weapon.getMinRange());
    setMaxRange(weapon.getMaxRange());
  }, [weapon]);

  return (
    <>
      <div>
        <h3>{name}</h3>
        {attackPool && displayAttackPool(attackPool)}
      </div>
    </>
  );
}
