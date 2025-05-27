"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

type ThemeContextType = {
  theme: Theme;
  name: string;
  setName: (name: string) => void;
};

const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1a1a1a",
  },
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  name: "John Doe",
  setName: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("John Doe");
  const value = {
    theme: defaultTheme,
    name,
    setName,

  }
  return (
    <ThemeContext.Provider value={ value }>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
