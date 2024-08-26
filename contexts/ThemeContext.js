import { createContext, useState, useEffect } from "react";

/* File ini berfungsi untuk mengelola state tema (light atau dark) dan menyimpan preferensi pengguna di localStorage. 
Context API memungkinkan tema diakses oleh komponen manapun dalam aplikasi.
*/

// Membuat context untuk mengelola state tema
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Mengambil preferensi tema dari localStorage saat halaman di-load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.className = storedTheme;
    }
  }, []);

  // Fungsi untuk toggle tema antara light dan dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
