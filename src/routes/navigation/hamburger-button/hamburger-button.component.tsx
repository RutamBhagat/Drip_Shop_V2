import React from "react";
import "./hamburger-button.styles.css";


type HamburgerButtonComponentProps = {
  hiddenMenuIsOpen: boolean,
  handleHiddenMenu: () => void
}

const HamburgerButtonComponent = ({hiddenMenuIsOpen, handleHiddenMenu}: HamburgerButtonComponentProps) => {
  return (
    <button
      className="group flex h-9 w-9 flex-col items-center justify-center rounded normal:hidden"
      onClick={handleHiddenMenu}
    >
      <div
        className={`genericHamburgerLine mb-0 ${
          hiddenMenuIsOpen
            ? "translate-y-2 rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine my-1 ${
          hiddenMenuIsOpen ? "opacity-0" : "opacity-90 group-hover:opacity-100"
        }`}
      />
      <div
        className={`genericHamburgerLine mt-0 ${
          hiddenMenuIsOpen
            ? "-translate-y-2 -rotate-45 opacity-90 group-hover:opacity-100"
            : "opacity-90 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButtonComponent;
