import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: (theme: "dark" | "light") => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeContextProviderProps = { children: React.ReactNode };

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));

    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--bg-color",
        "hsl(220, 10%, 5%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(0, 0%, 100%)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--bg-color",
        "hsl(0, 0%, 100%)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "hsl(220, 10%, 5%)"
      );
    }
  }, [theme]);

  const toggleTheme = (theme: "dark" | "light") => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
