import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { heroContent } from "../constants/hero";

const Hero = () => {
  return (
    <div
      id="Home"
      className="flex items-center justify-center h-screen flex flex-col text-dark dark:text-slate-50 text-center"
    >
      <div className="font-bold font-lato">
        <div className="text-4xl">
          <h1>{heroContent.title1}</h1>
          <h1 className="pt-1">{heroContent.title2}</h1>
        </div>
      </div>
      <div className="pt-5 font-robotolight">
        <h2>{heroContent.subtitle}</h2>
      </div>
      <div className="pt-9">
        <Link
          href="#Services"
          scroll={false}
          className={`${buttonVariants({ variant: "primary", size: "lg" })}`}
        >
          {heroContent.buttonLabel}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
