import { createContext, useState, useContext, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const prevTheme = localStorage.getItem("theme") || "";
  const [theme, setTheme] = useState(prevTheme);

  useLayoutEffect(() => {
    if (theme === "light-mode") {
      document.documentElement.style.setProperty("--bg-color", "#f1f1f1");
      document.documentElement.style.setProperty("--classic-color", "#ddd");
      document.documentElement.style.setProperty("--text-color", "#171717");
      document.documentElement.style.setProperty("--light-color", "#fff");
      localStorage.setItem("theme", "light-mode");
    } else if (theme == "dark-mode") {
      document.documentElement.style.setProperty("--bg-color", "#1f2933");
      document.documentElement.style.setProperty("--classic-color", "#4c4c4c");
      document.documentElement.style.setProperty("--text-color", "#f7f7f7");
      document.documentElement.style.setProperty("--light-color", "#2c2c2c");
      localStorage.setItem("theme", "dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { useTheme, ThemeProvider };
