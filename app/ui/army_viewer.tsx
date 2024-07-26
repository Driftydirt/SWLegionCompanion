import { Button, Col, Offcanvas, Row } from "react-bootstrap";
import { Army } from "../army";
import UnitViewer from "./unit_viewer";
import { useState } from "react";
import { DefenceRollViewer } from "./defence_roll_viewer";
import { DefenceDice } from "./icons/defence_dice";
import { CommandCardOverview } from "./command_overview";

type ArmyProps = {
  army: Army;
  onSave: () => void;
};

export function ArmyViewer({ army, onSave }: ArmyProps) {
  return (
    <>
      {" "}
      <Button onClick={() => onSave()}>Return and Save</Button>
      <CommandCardOverview cards={army.getCommandCards()}></CommandCardOverview>
      <Row>
        {army.getUnits().map((unit, index) => (
          <UnitViewer
            key={unit.getName() + "_" + index}
            unit={unit}
          ></UnitViewer>
        ))}
      </Row>
    </>
  );
}
