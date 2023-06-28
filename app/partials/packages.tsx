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

interface Content {
    title: string
    description: string
}

const Packages = () => {
    return (
<section className="min-h-screen mt-4 flex flex-col items-center"> 
<div>
<h1 id="Services" className="text-3xl font-lato dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit">{packagesTitle}</h1>
</div>
<div className="container mt-8 flex flex-row gap-2">
{packagesContent.map((item : Content) => (
    <Card>
    <CardHeader>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{item.description}</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
))}
</div>
</section>
    )
}

export default Packages