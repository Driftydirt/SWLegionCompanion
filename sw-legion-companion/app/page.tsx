"use client";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Weapon } from "./weapon";
import { Unit } from "./unit";
import { Button } from "react-bootstrap";
import UnitViewer from "./unit_viewer";

export default function Home() {
  const a280 = new Weapon(
    "A-280 Blaster Rifle",
    undefined,
    1,
    undefined,
    1,
    3,
    undefined
  );
  const rebelTroopers = new Unit("Rebel Troopers", 4, 1, 1, a280);
  return (
    <>
      <div>
        <UnitViewer unit={rebelTroopers}></UnitViewer>
      </div>
    </>
  );
}
