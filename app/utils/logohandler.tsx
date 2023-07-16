"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

const Logo = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setcurrentTheme] = useState(theme);
  useEffect(() => {
    setcurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme]);
  return (
    <div className="main-logo flex items-center text-logo-100 dark:text-logo-900 pl-5 text-xl font-roboto font-bold">
      <div className="flex flex-row gap-1">
        <Image
          src={currentTheme === "dark" ? "/dark-icon.png" : "/light-icon.png"}
          alt="main brand icon"
          width={40}
          height={40}
          priority
        />
        <h1>WebNebula</h1>
      </div>
    </div>
  );
};

export default Logo;
