"use client";

import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Modifier } from "../modifier";
import { UpgradeCard } from "../upgrade_card";
import ModifierViewer from "./modifier_viewer";

type UpgradeCardViewerProps = {
  card: UpgradeCard;
};

export default function UpgradeCardViewer({ card }: UpgradeCardViewerProps) {
  const [modifiers, setModifiers] = useState<Modifier[]>();
  const [name, setName] = useState<string>(card.getName());
  const [description, setDescription] = useState<string>(card.getDescription());
  const [exhausted, setExhausted] = useState<boolean>();
  const [isExhaustible, setIsExhaustible] = useState<boolean>();

  useEffect(() => {
    setModifiers(card.getModifiers());
    setName(card.getName());
    setDescription(card.getDescription());
    setExhausted(card.getExhausted());
    setIsExhaustible(card.isExhaustable());
  }, [card]);

  useEffect(() => {
    if (exhausted != undefined) card.setExhausted(exhausted);
  }, [exhausted]);

  return (
    <div className="mx-1">
      <Row
        className={`border-2 p-2 ${exhausted === true ? "exhausted" : null} `}
      >
        <OverlayTrigger
          placement="right"
          delay={{ show: 100, hide: 400 }}
          overlay={<Tooltip>{description}</Tooltip>}
        >
          <p className="text-center">{name}</p>
        </OverlayTrigger>
        {modifiers ? (
          <div className="center-text">
            <ModifierViewer modifiers={modifiers}></ModifierViewer>
          </div>
        ) : null}
        {isExhaustible && !exhausted ? (
          <Button onClick={() => setExhausted(true)}>Exhaust</Button>
        ) : null}
        {isExhaustible && exhausted ? (
          <Button onClick={() => setExhausted(false)}>Recover</Button>
        ) : null}
      </Row>
    </div>
  );
}
