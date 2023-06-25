"use client"
import Image from "next/image"
import navitems from "./constants/navitems";
import { useEffect, useState } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevscrollY, setprevscrollY] = useState(0); 
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > prevscrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false); 
      }
      setprevscrollY(scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevscrollY]);
  return (
    <header className={`flex max-w-full sticky top-0 bg-transparent z-50 backdrop-blur-[10px] backdrop-saturate-[180%] shadow ease-in-out duration-[0.4s] ${isScrolled && "translate-y-[-5rem]"}`}>
       <div className="main-logo">
          <Image
          src="/icon.jpg"
          width={90}
          height={120}
          alt="main logo"
          />
        </div>
      <nav className="navbar flex items-center border-b-[1px] border-gray-300 h-20 text-black mx-auto">
        <ul className="nav-items font-inter text-xl flex gap-x-6">
          {navitems.map(item => <li className={`#${item.key} cursor-pointer`}>{item.name}</li>)}
        </ul>
      </nav>
    </header>
  );
}