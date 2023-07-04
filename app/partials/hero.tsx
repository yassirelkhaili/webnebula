import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
return ( 
    <div id="Home" className="flex items-center justify-center h-screen flex flex-col text-dark dark:text-slate-50 text-center">
        <div className="font-bold font-lato">
        <div className="text-4xl">
        <h1>Transforming Ideas into Reality:</h1>
        <h1 className="pt-1">
        Your Partner in Custom Web Solutions
        </h1>
        </div>
        </div>
        <div className="pt-5 font-robotolight">
        <h2>Elevate Your Web Presence with Dynamic and Engaging Websites</h2>
        </div>
        <div className="pt-9">
        <Link href="#Services" scroll={false} className={buttonVariants({ variant: "primary" })}>Get Started Today!</Link>
        </div>
    </div>
)
}

export default Hero