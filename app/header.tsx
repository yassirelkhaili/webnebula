"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import navitems from "./constants/navitems";
import { useEffect, useState } from "react";
export default function Header() {
  const {setTheme, theme, systemTheme} = useTheme()
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevscrollY, setprevscrollY] = useState(0); 
  const [currentTheme, setcurrentTheme] = useState(theme); 
  useEffect(() => {
    setcurrentTheme(theme === "system" ? systemTheme : theme)
  }, [theme])
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > prevscrollY ? setIsScrolled(true) : setIsScrolled(false)
      setprevscrollY(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevscrollY]);
  return (
    <header className={`flex max-w-full fixed bg-transparent w-screen z-50 h-20 backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md ease-in-out duration-[0.4s] ${isScrolled && "translate-y-[-5rem]"}`}> 
    <div className="main-logo flex items-center text-[#1959EE] dark:text-[#2d53bd] pl-5 text-xl font-roboto">
      <div className='flex flex-row gap-1'>
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
      <nav className="flex items-center text-[#222222] dark:text-slate-50 mx-auto">
        <ul className="nav-items font-inter text-xl flex gap-x-6">
          {navitems.map(item => <li key={item.name} className={`cursor-pointer duration-200 dark:hover:text-gray-200 hover:text-[#696969] h-full`}><a href={`#${item.name}`}>{item.name}</a></li>)}
        </ul>
      </nav>
       <div className='flex items-center pr-5'>
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
  );
}