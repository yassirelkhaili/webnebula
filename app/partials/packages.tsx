import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import packagesContent from "../constants/packages"
import { packagesTitle } from "../constants/packages"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { Content, buttonLabel } from "../constants/packages"

const Packages = () => {
    return (
<section className="min-h-screen mt-4 flex flex-col items-center"> 
<div>
<h1 id="Services" className="text-3xl font-lato dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit font-bold">{packagesTitle}</h1>
</div>
<div className="container mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
{packagesContent.map((item : Content) => (
    <Card>
    <CardHeader>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </CardHeader>
    <CardContent className="font-robotolight">
      <p>{item.description}</p>
    </CardContent>
    <CardFooter className="flex justify-center">
    <Link href="#services" className={buttonVariants({ variant: "primary" })}>{buttonLabel}</Link>
    </CardFooter>
  </Card>
))}
</div>
</section>
    )
}

export default Packages