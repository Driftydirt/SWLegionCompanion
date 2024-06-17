"use client";

import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Col, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Modifier } from "./app/modifier";

type ModifierViewerProps = {
  modifiers: Modifier[] | undefined;
};

export default function ModifierViewer({ modifiers }: ModifierViewerProps) {
  const [hasModifiers, setHasModifiers] = useState<boolean>();
  const [currentModifiers, setModifiers] = useState<Modifier[]>();

  useEffect(() => {
    modifiers && setModifiers(modifiers);
    setHasModifiers(modifiers != undefined);
  }, [modifiers]);

  return (
    <div>
      <Col>
        {hasModifiers
          ? modifiers &&
            modifiers.map((e) => (
              <>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 400 }}
                  overlay={<Tooltip>{e.getDescription()}</Tooltip>}
                >
                  <p>{e.getName()}</p>
                </OverlayTrigger>
              </>
            ))
          : null}
      </Col>
    </div>
  );
}
