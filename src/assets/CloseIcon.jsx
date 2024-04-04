import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext";

export const CloseIcon = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" id="x">
        <g
          fill="none"
          fillRule="evenodd"
          stroke={darkMode ? "#D1D5DB" : "#787a7d"}
          strokeWidth="round"
          strokeLinecap="round"
          strokeLinejoin="2"
        >
          <path d="M13 1 1 13M1 1l12 12"></path>
        </g>
      </svg>
    </>
  );
};
