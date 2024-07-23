import { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { DefenceResult, DiceRoller } from "../dice_roller";
import { DefenceRollViewer } from "./defence_roll_viewer";
import { DefenceDice } from "./icons/defence_dice";

const diceroller: DiceRoller = new DiceRoller();

export function DefenceDiceRoller({}) {
  const [show, setShow] = useState(false);
  const [defenceResults, setDefenceResults] = useState<DefenceResult>();
  const [amount, setAmount] = useState<number>(0);
  const [colour, setColour] = useState<"white" | "red">("white");

  const rollDice = () => {
    amount &&
      colour &&
      setDefenceResults(diceroller.rollDefence(amount, colour));
  };

  const handleColourChange = (colour: "white" | "red") => {
    setColour(colour);
    clearDiceRoll();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearDiceRoll = () => {
    setDefenceResults(undefined);
  };

  const incrementAmount = () => setAmount((prev) => (prev ? prev + 1 : 1));
  const decrementAmount = () => setAmount((prev) => (prev != 0 ? prev - 1 : 0));

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Defence Dice Overlay
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" bC>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Defence Dice Roller</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {" "}
          <Row>
            <Col sm={{ span: 3 }} style={{ display: "flex" }}>
              <p className={colour + "-defence"}>{amount} </p>
              <div className="defence-dice">
                <DefenceDice colour={colour}></DefenceDice>
              </div>
            </Col>
            <Col sm={{ span: 3 }}>
              <Row className="px-0">
                <Col className="px-0" style={{ marginTop: 10 }}>
                  <Button onClick={() => incrementAmount()}>+</Button>
                </Col>

                <Col className="px-0" style={{ marginTop: 10 }}>
                  <Button onClick={() => decrementAmount()}>-</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button onClick={() => handleColourChange("white")}>White</Button>
          <Button onClick={() => handleColourChange("red")}>Red</Button>
          {amount && amount > 0 ? (
            <Button variant="success" onClick={() => rollDice()}>
              Roll Defence
            </Button>
          ) : null}
          {defenceResults ? (
            <>
              <DefenceRollViewer
                defenceResults={defenceResults}
                colour={colour}
              ></DefenceRollViewer>
              <Button variant="danger" onClick={() => clearDiceRoll()}>
                Clear Dice Roll!
              </Button>
            </>
          ) : null}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
