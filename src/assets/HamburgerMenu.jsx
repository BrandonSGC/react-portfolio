import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

export const HamburguerMenu = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 12H20"
          stroke={darkMode ? "#D1D5DB" : "#787a7d"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 6H20"
          stroke={darkMode ? "#D1D5DB" : "#787a7d"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 18H20"
          stroke={darkMode ? "#D1D5DB" : "#787a7d"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
