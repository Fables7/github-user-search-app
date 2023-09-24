"use client";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <label htmlFor="toggleTheme">
        Toggle Theme: {theme === "light" ? "Light" : "Dark"}
      </label>
      <button
        id="toggleTheme"
        aria-label="Toggle Dark Mode"
        type="button"
        className="bg-red-500 w-10 h-10 rounded-full"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ToggleTheme;
