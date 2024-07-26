import { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { AttackRollViewer } from "./attack_roll_viewer";
import { CommandCard } from "../command_card";
import { CommandCardViewer } from "./command_card_viewer";
type CommandCardOverviewProps = {
  cards: CommandCard[];
};

export function CommandCardOverview({ cards }: CommandCardOverviewProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usedCards, setUsedCards] = useState<CommandCard[]>();
  const [unusedCards, setUnusedCards] = useState<CommandCard[]>();

  const onExhausted = (card: CommandCard) => {
    if (card.isExhausted()) {
      setUsedCards((prev) => prev && [...prev, card]);
      const temp = unusedCards ? [...unusedCards] : [];
      temp.splice(
        temp.findIndex((tempCard) => tempCard.getName() === card.getName()),
        1
      );
      setUnusedCards(temp);
    } else {
      setUnusedCards((prev) => prev && [...prev, card]);

      const temp = usedCards ? [...usedCards] : [];
      temp.splice(
        temp.findIndex((tempCard) => tempCard.getName() === card.getName()),
        1
      );
      setUsedCards(temp);
    }
  };

  useEffect(() => {
    const usedCardsSetup: CommandCard[] = [];
    const unusedCardsSetup: CommandCard[] = [];
    cards.map((card) => {
      if (card.isExhausted()) {
        usedCardsSetup.push(card);
      } else {
        unusedCardsSetup.push(card);
      }
    });
    setUsedCards(usedCardsSetup);
    setUnusedCards(unusedCardsSetup);
  }, [cards]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open Command Cards
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end" bC>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Command Cards</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Used Cards</p>
          {usedCards &&
            usedCards.map((card) => (
              <CommandCardViewer
                card={card}
                onExhausted={onExhausted}
              ></CommandCardViewer>
            ))}
          <p>Unused Cards</p>
          {unusedCards &&
            unusedCards.map((card) => (
              <CommandCardViewer
                card={card}
                onExhausted={onExhausted}
              ></CommandCardViewer>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
