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

export default function Home() {
  const rebelTroopers = new RebelTroopers(z6Trooper, rebelTrooper);
  return (
    <>
      <div>
        <UnitViewer unit={rebelTroopers}></UnitViewer>
      </div>
    </>
  );
}
