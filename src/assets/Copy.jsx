import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const Copy = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6665 10.6665H13.3332C11.8604 10.6665 10.6665 11.8604 10.6665 13.3332V26.6665C10.6665 28.1393 11.8604 29.3332 13.3332 29.3332H26.6665C28.1393 29.3332 29.3332 28.1393 29.3332 26.6665V13.3332C29.3332 11.8604 28.1393 10.6665 26.6665 10.6665Z"
          stroke={darkMode ? "#D1D5DB": "#010101"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.33317 21.3332C3.8665 21.3332 2.6665 20.1332 2.6665 18.6665V5.33317C2.6665 3.8665 3.8665 2.6665 5.33317 2.6665H18.6665C20.1332 2.6665 21.3332 3.8665 21.3332 5.33317"
          stroke={darkMode ? "#D1D5DB": "#010101"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
