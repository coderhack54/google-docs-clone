import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

// Custom modal which uses Single responsibility principle. Uses portal for showing modal.

const Modal = ({ open, children, onClose }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "overlay") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div id="overlay" className="overlay-styles">
        <div className="modal-styles">{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
