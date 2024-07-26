import { useEffect, useState } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";
import { AttackRollViewer } from "./attack_roll_viewer";
import { CommandCard } from "../command_card";
type CommandCardViewerProps = {
  card: CommandCard;
  onExhausted: (card: CommandCard) => void;
};

export function CommandCardViewer({
  card,
  onExhausted,
}: CommandCardViewerProps) {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [pips, setPips] = useState<number>();
  const [orderedUnits, setOrderedUnits] = useState<string>();
  const [exhausted, setExhausted] = useState<boolean>();
  const [expanded, setExpanded] = useState<boolean>(false);
  const exhaustACard = () => {
    card.setExhausted(!card.isExhausted());
    setExhausted(card.isExhausted());

    onExhausted(card);
  };
  useEffect(() => {
    setName(card.getName());
    setDescription(card.getDescription());
    setPips(card.getPips());
    setOrderedUnits(card.getOrderedUnits());
    setExhausted(card.isExhausted());
  }, [card]);

  if (expanded) {
    return (
      <Card>
        <Card.Body>
          <Row onClick={() => setExpanded((prev) => !prev)}>
            <Col sm={{ span: 3 }}>
              <p>Pips: {pips}</p>
            </Col>
            <Col> {name}</Col>
          </Row>
          <Card.Text onClick={() => setExpanded((prev) => !prev)}>
            <Row>
              <Col sm={{ offset: 3 }}>
                <p>{orderedUnits}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={{ offset: 3 }}>
                <p>{description}</p>
              </Col>
            </Row>
          </Card.Text>
          <Col sm={{ offset: 3 }}>
            <Button onClick={() => exhaustACard()} variant="primary">
              Exhaust
            </Button>
          </Col>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <>
        <Row onClick={() => setExpanded((prev) => !prev)}>
          <Card>
            <Card.Body>
              <Row>
                <Col sm={{ span: 3 }}>
                  <p>Pips: {pips}</p>
                </Col>
                <Col> {name}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </>
    );
  }
}
