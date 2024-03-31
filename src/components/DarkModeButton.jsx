import { useContext } from "react";
import { MoonIcon, SunIcon } from "../assets";
import { DarkModeContext } from "../context/DarkModeContext";

export const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  if (darkMode) {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="duration-200 hover:scale-110" onClick={handleDarkMode}>
      {darkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
