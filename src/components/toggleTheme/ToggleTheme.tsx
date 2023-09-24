"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import moon from "../../assets/icon-moon.svg";
import sun from "../../assets/icon-sun.svg";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={toggleTheme} className="flex items-center justify-between">
      <h4 className=" text-[var(--gray)] dark:text-white">
        {theme === "light" ? "DARK" : "LIGHT"}
      </h4>
      <Image
        src={theme === "dark" ? sun : moon}
        alt="Theme Icon"
        width={20}
        height={20}
        className=" ml-2"
      />
    </button>
  );
};

export default ToggleTheme;
