import React from "react";
import ReactDom from "react-dom";

import { Button } from "./Button";

import "../styles/Modal.sass";

export const Modal = ({ children, isOpen, onClose, overlay = "hide" }) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal__content">{children}</div>
          <div className="modal__buttons">
            <Button onClick={onClose} mr="0">
              Close
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
