"use client";
import { createContext, ReactNode, useContext } from "react";
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};
const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1a1a1a",
  },
};
const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
};