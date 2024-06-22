import { Button, Row } from "react-bootstrap";
import { Army } from "../army";
import UnitViewer from "./unit_viewer";

type ArmyProps = {
  army: Army;
  onSave: () => void;
};

export function ArmyViewer({ army, onSave }: ArmyProps) {
  return (
    <>
      <Button onClick={() => onSave()}>Return and Save</Button>
      <Row>
        {army.getUnits().map((unit) => (
          <UnitViewer key={unit.getName()} unit={unit}></UnitViewer>
        ))}
      </Row>
    </>
  );
}
