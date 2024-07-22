import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { DefenceDice } from "./icons/defence_dice";
import { Courage } from "./icons/courage";
import { Health } from "./icons/health";
import { AttackPool } from "./helpers";
import { AttackDice, AttackResults, DiceRoller } from "../dice_roller";
import { AttackDiceComponent } from "./icons/attack_dice_component";
type AttackRollViewerProps = {
  attackResults: AttackResults;
  saveAttackResults: (attackResult: AttackResults) => void;
};
const diceRoller: DiceRoller = new DiceRoller();

export function combineAttackResults(
  result1: AttackResults,
  result2: AttackResults | undefined
) {
  if (!result2) return result1;
  result1.white.crits = result1.white.crits + result2.white.crits;
  result1.white.hits = result1.white.hits + result2.white.hits;
  result1.white.surges = result1.white.surges + result2.white.surges;
  result1.white.misses = result1.white.misses + result2.white.misses;
  result1.black.crits = result1.black.crits + result2.black.crits;
  result1.black.hits = result1.black.hits + result2.black.hits;
  result1.black.surges = result1.black.surges + result2.black.surges;
  result1.black.misses = result1.black.misses + result2.black.misses;
  result1.red.crits = result1.red.crits + result2.red.crits;
  result1.red.hits = result1.red.hits + result2.red.hits;
  result1.red.surges = result1.red.surges + result2.red.surges;
  result1.red.misses = result1.red.misses + result2.red.misses;
  return result1;
}

export function AttackRollViewer({
  attackResults,
  saveAttackResults,
}: AttackRollViewerProps) {
  const [hasCrits, setHasCrits] = useState<boolean>(false);
  const [crits, setCrits] = useState<number>();
  const [hasHits, setHasHits] = useState<boolean>(false);
  const [hits, setHits] = useState<number>();

  const [hasSurges, setHasSurges] = useState<boolean>(false);
  const [surges, setSurges] = useState<number>();

  const [hasMisses, setHasMisses] = useState<boolean>(false);
  const [misses, setMisses] = useState<number>();
  const [rerollDice, setRerollDice] = useState<AttackPool>({
    whiteDice: 0,
    blackDice: 0,
    redDice: 0,
  });
  const [newAttackResults, setNewAttackResults] = useState<AttackResults>();
  const [rolled, setRolled] = useState<boolean>(false);
  const [readyToReroll, setReadyToReroll] = useState<boolean>();

  const addToRerollDice = (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => {
    if (!rerollDice) setRerollDice({ whiteDice: 0, blackDice: 0, redDice: 0 });
    if (colour === "White" && rerollDice) rerollDice.whiteDice++;
    if (colour === "Black" && rerollDice) rerollDice.blackDice++;
    if (colour === "Red" && rerollDice) rerollDice.redDice++;
    setRerollDice(rerollDice);

    setReadyToReroll(
      rerollDice.blackDice != 0 ||
        rerollDice.redDice != 0 ||
        rerollDice.whiteDice != 0
    );
    removeDiceFromResults(colour, type);
  };
  const removeFromRerollDice = (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => {
    if (!rerollDice) return;
    if (colour === "White" && rerollDice) rerollDice.whiteDice--;
    if (colour === "Black" && rerollDice) rerollDice.blackDice--;
    if (colour === "Red" && rerollDice) rerollDice.redDice--;
    setRerollDice(rerollDice);
    setReadyToReroll(
      rerollDice.blackDice != 0 ||
        rerollDice.redDice != 0 ||
        rerollDice.whiteDice != 0
    );

    addDiceToResults(colour, type);
  };
  // figure out how to un select from the re roll
  const removeDiceFromResults = (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => {
    const tempAttackResults = newAttackResults
      ? newAttackResults
      : diceRoller.generateAttackResults(undefined);
    if (colour === "White" && type === "Crit") tempAttackResults.white.crits--;
    if (colour === "White" && type === "Hit") tempAttackResults.white.hits--;
    if (colour === "White" && type === "Surge")
      tempAttackResults.white.surges--;
    if (colour === "White" && type === undefined)
      tempAttackResults.white.misses--;
    if (colour === "Black" && type === "Crit") tempAttackResults.black.crits--;
    if (colour === "Black" && type === "Hit") tempAttackResults.black.hits--;
    if (colour === "Black" && type === "Surge")
      tempAttackResults.black.surges--;
    if (colour === "Black" && type === undefined)
      tempAttackResults.black.misses--;
    if (colour === "Red" && type === "Crit") tempAttackResults.red.crits--;
    if (colour === "Red" && type === "Hit") tempAttackResults.red.hits--;
    if (colour === "Red" && type === "Surge") tempAttackResults.red.surges--;
    if (colour === "Red" && type === undefined) tempAttackResults.red.misses--;
    setNewAttackResults(tempAttackResults);
  };
  const addDiceToResults = (
    colour: "White" | "Black" | "Red",
    type: "Crit" | "Hit" | "Surge" | undefined
  ) => {
    const tempAttackResults = newAttackResults
      ? newAttackResults
      : diceRoller.generateAttackResults(undefined);
    if (colour === "White" && type === "Crit") tempAttackResults.white.crits++;
    if (colour === "White" && type === "Hit") tempAttackResults.white.hits++;
    if (colour === "White" && type === "Surge")
      tempAttackResults.white.surges++;
    if (colour === "White" && type === undefined)
      tempAttackResults.white.misses++;
    if (colour === "Black" && type === "Crit") tempAttackResults.black.crits++;
    if (colour === "Black" && type === "Hit") tempAttackResults.black.hits++;
    if (colour === "Black" && type === "Surge")
      tempAttackResults.black.surges++;
    if (colour === "Black" && type === undefined)
      tempAttackResults.black.misses++;
    if (colour === "Red" && type === "Crit") tempAttackResults.red.crits++;
    if (colour === "Red" && type === "Hit") tempAttackResults.red.hits++;
    if (colour === "Red" && type === "Surge") tempAttackResults.red.surges++;
    if (colour === "Red" && type === undefined) tempAttackResults.red.misses++;
    setNewAttackResults(tempAttackResults);
  };

  const toRerollDice = () => {
    if (
      rerollDice.blackDice === 0 &&
      rerollDice.redDice === 0 &&
      rerollDice.whiteDice === 0
    )
      return;
    const rerolledDice: AttackResults =
      diceRoller.generateAttackResults(rerollDice);
    const tempNewAttackResults = newAttackResults;
    saveAttackResults(combineAttackResults(rerolledDice, tempNewAttackResults));
    setRerollDice({
      whiteDice: 0,
      blackDice: 0,
      redDice: 0,
    });
    setReadyToReroll(false);
    setRolled(true);
  };

  useEffect(() => {
    if (
      attackResults.white.crits != 0 ||
      attackResults.black.crits != 0 ||
      attackResults.red.crits != 0
    ) {
      setHasCrits(true);
      setCrits(
        attackResults.white.crits +
          attackResults.black.crits +
          attackResults.red.crits
      );
    } else setHasCrits(false);
    if (
      attackResults.white.hits != 0 ||
      attackResults.black.hits != 0 ||
      attackResults.red.hits != 0
    ) {
      setHasHits(true);
      setHits(
        attackResults.white.hits +
          attackResults.black.hits +
          attackResults.red.hits
      );
    } else setHasHits(false);
    if (
      attackResults.white.surges != 0 ||
      attackResults.black.surges != 0 ||
      attackResults.red.surges != 0
    ) {
      setHasSurges(true);
      setSurges(
        attackResults.white.surges +
          attackResults.black.surges +
          attackResults.red.surges
      );
    } else setHasSurges(false);
    if (
      attackResults.white.misses != 0 ||
      attackResults.black.misses != 0 ||
      attackResults.red.misses != 0
    ) {
      setHasMisses(true);
      setMisses(
        attackResults.white.misses +
          attackResults.black.misses +
          attackResults.red.misses
      );
    } else setHasMisses(false);
    setNewAttackResults(structuredClone(attackResults));
    setRolled(false);
  }, [attackResults]);

  return (
    <>
      {" "}
      <Row>
        <Col sm={{ span: 2 }} className="ml-auto">
          <p className="totals">Totals </p>
        </Col>
      </Row>
      {hasCrits ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.crits)].map((index) => (
                  <AttackDiceComponent
                    rolled={rolled}
                    removeFromRerollDice={removeFromRerollDice}
                    addToRerollDice={addToRerollDice}
                    colour="White"
                    type="Crit"
                    key={index}
                  ></AttackDiceComponent>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.crits)].map((index) => (
                  <>
                    <div onClick={(e) => {}}>
                      <AttackDiceComponent
                        rolled={rolled}
                        removeFromRerollDice={removeFromRerollDice}
                        addToRerollDice={addToRerollDice}
                        key={index}
                        colour="Black"
                        type="Crit"
                      ></AttackDiceComponent>
                    </div>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.crits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.crits)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Red"
                      type="Crit"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackCrit.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{crits}</p>
          </Col>
        </Row>
      ) : null}
      {hasHits ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.hits)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="White"
                      type="Hit"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.hits)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Black"
                      type="Hit"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.hits ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.hits)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Red"
                      type="Hit"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackHit.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{hits}</p>
          </Col>
        </Row>
      ) : null}
      {hasSurges ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.surges)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="White"
                      type="Surge"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.surges)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Black"
                      type="Surge"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.surges ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.surges)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Red"
                      type="Surge"
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          <Col
            sm={{ span: 2 }}
            style={{ display: "flex" }}
            className="ml-auto "
          >
            <img
              className="attack-dice"
              src={"/icons/attack/BlackAttackSurge.png"}
              width={30}
              height={30}
              style={{ height: 30, marginTop: 20 }}
            />
            <p className="icons">{surges}</p>
          </Col>
        </Row>
      ) : null}
      {hasMisses ? (
        <Row>
          <Col sm={{ span: 2 }}> </Col>
          {attackResults.white.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.white.misses)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="White"
                      type={undefined}
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.black.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.black.misses)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Black"
                      type={undefined}
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
          {attackResults.red.misses ? (
            <>
              <Col style={{ display: "contents" }}>
                {[...Array(attackResults.red.misses)].map((index) => (
                  <>
                    <AttackDiceComponent
                      rolled={rolled}
                      removeFromRerollDice={removeFromRerollDice}
                      addToRerollDice={addToRerollDice}
                      key={index}
                      colour="Red"
                      type={undefined}
                    ></AttackDiceComponent>
                  </>
                ))}
              </Col>
            </>
          ) : null}{" "}
        </Row>
      ) : null}
      {readyToReroll === true ? (
        <Button onClick={() => toRerollDice()}>Reroll Dice</Button>
      ) : null}
    </>
  );
}
