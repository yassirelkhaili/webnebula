"use client"
import { useTheme } from 'next-themes'
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import navitems from "./constants/navitems";
import { useEffect, useState } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevscrollY, setprevscrollY] = useState(0); 
  const [isMounted, setisMounted] = useState(false); 
  useEffect(() => {
    setisMounted(true)
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollY > prevscrollY ? setIsScrolled(true) : setIsScrolled(false)
      setprevscrollY(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevscrollY]);
  const {systemTheme, theme, setTheme} = useTheme()
  const renderThemeChanger = () => {
    if(!isMounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if(currentTheme === 'dark') {
      return <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme("light")}/>
    } else {
      return <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme("dark")}/>
    } 
  }
  return (
    <header className={`flex max-w-full fixed bg-transparent w-screen z-50 h-20 backdrop-blur-[10px] backdrop-saturate-[180%] shadow-md ease-in-out duration-[0.4s] ${isScrolled && "translate-y-[-5rem]"}`}> 
    <div className="main-logo flex items-center text-[#2d53bd] pl-4 text-2xl font-roboto">
      <h1>WebNebula</h1>
    </div>
      <nav className="flex items-center text-black dark:text-gray-100 mx-auto">
        <ul className="nav-items font-inter text-xl flex gap-x-6">
          {navitems.map(item => <li key={item.name} className={`cursor-pointer duration-200 hover:text-gray-200 h-full`}><a href={`#${item.name}`}>{item.name}</a></li>)}
        </ul>
      </nav>
      {renderThemeChanger()}
    </header>
  );
}