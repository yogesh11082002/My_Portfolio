'use client';
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400", 
});

export default function RootLayout({ children }) {

  
//If the user’s OS is in dark mode → This site starts in dark mode.
//If in light mode → it starts in light mode

// const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
// const [isDarkMode, setIsDarkMode] = useState(prefersDark);


  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load saved theme
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden leading-8 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300`}
      >
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
