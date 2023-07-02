"use client"

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState, useMemo} from "react"
import { inertiaSvgDark, inertiaSvgLight, nodeSvg, livewireSvg, expressSvgDark, expressSvgLight, nextSvgStringDark, nextSvgStringLight } from "../constants/skills";

export function InertiaSvgHandler() {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(
    theme === "dark" ? "light" : "dark"
  );

  useEffect(() => {
    if (systemTheme && theme) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [systemTheme, theme]);

  const svgSrc  : string = useMemo(() => {
    if (currentTheme === "light") { 
      return encodeURIComponent(inertiaSvgDark);
    } else {
      return encodeURIComponent(inertiaSvgLight);
    }
  }, [currentTheme, inertiaSvgDark, inertiaSvgLight]);

  return (
    <Image
      width="30"
      height="30"
      src={`data:image/svg+xml,` + svgSrc}
      alt="inertiajs-logo"
    />
  );
}


export function NodeSvgHandler () {
  const svgSrc  : string = useMemo(() => {
      return encodeURIComponent(nodeSvg);
  }, [nodeSvg]);
  return (
    <Image
      width="30"
      height="30"
      src={`data:image/svg+xml,` + svgSrc}
      alt="nodejs-logo"
    />
  );
}

export function LivewireSvgHandler () {
  const svgSrc  : string = useMemo(() => {
      return encodeURIComponent(livewireSvg);
  }, [livewireSvg]);
  return (
    <Image
      width="30"
      height="30"
      src={`data:image/svg+xml,` + svgSrc}
      alt="livewire-logo"
    />
  );
}

export function ExpressSvgHandler () {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(
    theme === "dark" ? "light" : "dark"
  );

  useEffect(() => {
    if (systemTheme && theme) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [systemTheme, theme]);

  const svgSrc  : string = useMemo(() => {
    if (currentTheme === "light") { 
      return encodeURIComponent(expressSvgDark);
    } else {
      return encodeURIComponent(expressSvgLight);
    }
  }, [currentTheme, expressSvgDark, expressSvgLight]);

  return (
    <Image
      width="30"
      height="30"
      src={`data:image/svg+xml,` + svgSrc}
      alt="expressjs-logo"
    />
  );
};

const NextsvgHandler = () => {
  const { theme, systemTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(
    theme === "dark" ? "light" : "dark"
  );

  useEffect(() => {
    if (systemTheme && theme) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [systemTheme, theme]);

  const svgSrc  : string = useMemo(() => {
    if (currentTheme === "light") { 
      return encodeURIComponent(nextSvgStringDark);
    } else {
      return encodeURIComponent(nextSvgStringLight);
    }
  }, [currentTheme, nextSvgStringDark, nextSvgStringLight]);

  return (
    <Image
      width="30"
      height="30"
      src={`data:image/svg+xml,` + svgSrc}
      alt="nextjs-logo"
    />
  );
};

export default NextsvgHandler;
