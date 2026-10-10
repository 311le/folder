import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext();

export const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("view1");
  const [scrollSource, setScrollSource] = useState("route"); // 'route' o 'scroll'

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, scrollSource, setScrollSource }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error("useActiveSection debe usarse dentro de ActiveSectionProvider");
  }
  return context;
};
