"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { generateNavitems } from "./constants/navitems";
import { useEffect, useState } from "react";
import { navitem } from "./constants/navitems";
import OutsideClickHandler from "./utils/outsideclickhandler";

interface HeaderProps {
  mainNavitems: boolean;
}

export default function Header({ mainNavitems }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevscrollY, setprevscrollY] = useState(0);
  const [ishidden, setishidden] = useState(true);
  const { setTheme, theme, systemTheme } = useTheme();
  const [currentTheme, setcurrentTheme] = useState(theme);
  useEffect(() => {
    setcurrentTheme(theme === "system" ? systemTheme : theme);
  }, [theme, systemTheme]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY: number = window.scrollY;
      const threshold: number = 120;
      ishidden && setIsScrolled(scrollY > prevscrollY && scrollY > threshold);
      setprevscrollY(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevscrollY, ishidden]);
  const handleOutsideClick = () => {
    setishidden(true);
    setIsScrolled(false);
  };
  return (
    <>
      <header
        className={`flex justify-between max-w-full fixed bg-transparent w-screen z-50 h-20 backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md ease-in-out transition duration-500 ${
          isScrolled && "translate-y-[-5rem]"
        }`}
      >
        <div className="main-logo flex items-center text-logo-100 dark:text-logo-900 pl-5 text-xl font-roboto font-bold">
          <div className="flex flex-row gap-1">
            <Image
              src={
                currentTheme === "dark" ? "/dark-icon.png" : "/light-icon.png"
              }
              alt="main brand icon"
              width={40}
              height={40}
              priority
            />
            <h1>WebNebula</h1>
          </div>
        </div>
        <nav className="md:flex items-center text-dark dark:text-slate-50 mx-auto hidden">
          <ul className="nav-items font-inter text-xl flex gap-x-6">
            {generateNavitems(mainNavitems).map((item: navitem) => (
              <li
                key={item.name}
                className={`cursor-pointer duration-200 dark:hover:text-gray-200 hover:text-[#696969] h-full`}
              >
                <a href={`#${item.name}`}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center pr-5">
          <div
            className="p-2 space-y-2 rounded mr-2 cursor-pointer border border-slate-200 bg-white hover:bg-slate-100 focus:bg-slate-100  dark:focus:bg-slate-800 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 md:hidden block"
            onClick={() => {
              setishidden(false);
              setIsScrolled(true);
            }}
          >
            <span className="block w-[22px] h-0.5 dark:bg-slate-50 bg-black"></span>
            <span className="block w-[22px] h-0.5 dark:bg-slate-50 bg-black"></span>
            <span className="block w-[22px] h-0.5 dark:bg-slate-50 bg-black"></span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <OutsideClickHandler
        onOutsideClick={handleOutsideClick}
        ishidden={ishidden}
      >
        <div
          className={`flex flex-col p-6 gap-4 fixed bg-transparent w-[18rem] z-50 h-screen backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md ease-in-out transition duration-500 ${
            ishidden && "translate-x-[-20rem]"
          }`}
        >
          <div className="main-logo flex items-center justify-center text-logo-100 dark:text-logo-900 pl-5 text-xl font-roboto font-bold">
            <div className="flex flex-row gap-1">
              <Image
                src={
                  currentTheme === "dark" ? "/dark-icon.png" : "/light-icon.png"
                }
                alt="main brand icon"
                width={40}
                height={40}
                priority
              />
              <h1>WebNebula</h1>
            </div>
          </div>
          <nav className="flex items-center flex-col z-50 text-dark dark:text-slate-50 mx-auto">
            <ul className=" flex flex-col gap-4 nav-items font-inter text-xl flex gap-x-6">
              {generateNavitems(mainNavitems).map((item: navitem) => (
                <li
                  key={item.name}
                  className={`cursor-pointer duration-200 dark:hover:text-gray-200 hover:text-[#696969] h-full`}
                >
                  <a href={`#${item.name}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </OutsideClickHandler>
    </>
  );
}
