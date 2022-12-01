import React, { useState, useContext } from "react";
import { HiddenMenuContext } from "../../../contexts/hiddenMenu.context";
import "./hamburger-button.styles.scss";

const HamburgerButtonComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hiddenMenuIsOpen, setHiddenMenuIsOpen } = useContext(HiddenMenuContext);

  const handleHiddenMenu = () => {
    setHiddenMenuIsOpen(!hiddenMenuIsOpen)
  }

  return (
    <button
      className="group flex h-9 w-9 flex-col items-center justify-center rounded normal:hidden"
      onClick={handleHiddenMenu}
    >
      <div
        className={`genericHamburgerLine mb-0 ${
          isOpen
            ? "translate-y-2 rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine my-1 ${
          isOpen ? "opacity-0" : "opacity-90 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine mt-0 ${
          isOpen
            ? "-translate-y-2 -rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButtonComponent;
