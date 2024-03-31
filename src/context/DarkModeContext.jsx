import { useState } from "react";
import { createContext } from "react"

// Create context
export const DarkModeContext = createContext();

// Create Provider
export const DarkModeProvider = ( { children } ) => {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
