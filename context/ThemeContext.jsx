import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => setDark(!dark);

  const theme = {
    background: dark ? "#0A0A0A" : "#FFFFFF",
    card: dark ? "#1A1A1A" : "#F2F2F2",
    text: dark ? "#FFFFFF" : "#000000",
    subtext: dark ? "#999" : "#555",
    primary: "#ED145B",
    dark,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}