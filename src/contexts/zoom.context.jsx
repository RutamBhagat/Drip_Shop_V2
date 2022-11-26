import React, { useState, createContext } from "react";

export const ZoomContext = createContext({
  isZoomed: null,
  setIsZoomed: () => {},
  zoomUrl: null,
  setZoomUrl: () => {},
});

export const ZoomProvider = ({ children }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomUrl, setZoomUrl] = useState("");
  const value = { isZoomed, setIsZoomed, zoomUrl, setZoomUrl };

  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
};
