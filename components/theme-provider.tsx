"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Theme = "light" | "dark" | "trading";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "dark",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        light: "light",
        dark: "dark",
        trading: "trading",
      }}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}