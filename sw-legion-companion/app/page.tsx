"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { Unit } from "./unit";
import UnitViewer from "./unit_viewer";
import { HeavyWeapon } from "./heavy_weapon";
import { Personnel } from "./personnel";
import { RebelTroopers } from "./units/rebel_troopers";
import { z6Trooper } from "./heavy_weapons/z6_trooper";
import { rebelTrooper } from "./personnel/rebel_trooper";
import { Army } from "./army";
import { Row } from "react-bootstrap";
import { RebelVeterans } from "./units/rebel_veterans";
import { cm_0_93_trooper } from "./heavy_weapons/cm-0-93_trooper";

export default function Home() {
  const army: Army = new Army([
    new RebelTroopers(z6Trooper, rebelTrooper),
    new RebelVeterans(cm_0_93_trooper, rebelTrooper),
  ]);
  return (
    <>
      <Row>
        {army.getUnits().map((unit) => (
          <UnitViewer unit={unit}></UnitViewer>
        ))}
      </Row>
    </>
  );
}
