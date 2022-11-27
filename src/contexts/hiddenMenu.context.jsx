import React, { useState, createContext } from "react";

export const HiddenMenuContext = createContext({
  hiddenMenuIsOpen: null,
  setHiddenMenuIsOpen: () => {},
});

export const HiddenMenuProvider = ({ children }) => {
  const [hiddenMenuIsOpen, setHiddenMenuIsOpen] = useState(false);
  const value = { hiddenMenuIsOpen, setHiddenMenuIsOpen };

  return <HiddenMenuContext.Provider value={value}>{children}</HiddenMenuContext.Provider>;
};
