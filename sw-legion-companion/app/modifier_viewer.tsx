"use client";

import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { Modifier } from "./modifier";

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
      <Row>
        {hasModifiers
          ? modifiers &&
            modifiers.map((e) => (
              <>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 100, hide: 400 }}
                  overlay={<Tooltip>{e.getDescription()}</Tooltip>}
                >
                  {e.getAmount() ? (
                    <p className="modifiers">
                      {e.getName()} {e.getAmount()}
                    </p>
                  ) : (
                    <p className="modifiers">{e.getName()}</p>
                  )}
                </OverlayTrigger>
              </>
            ))
          : null}
      </Row>
    </div>
  );
}
