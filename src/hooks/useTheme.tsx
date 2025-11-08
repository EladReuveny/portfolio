import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeContextProvider");
  }
  return context;
};

export default useTheme;
