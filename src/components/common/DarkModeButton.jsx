import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "../../assets";

export const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(null);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDarkMode) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="duration-200 hover:scale-110"
      onClick={handleDarkMode}
      aria-label="Darkmode button"
    >
      {darkMode ? (
        <MoonIcon className="size-6" />
      ) : (
        <SunIcon className="size-6" />
      )}
    </button>
  );
};
