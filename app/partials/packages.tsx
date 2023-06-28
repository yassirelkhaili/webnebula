import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import packagesContent from "../constants/packages"

const Packages = () => {
    return (
        <section className="min-h-screen mt-4 flex flex-col items-center"> 
<div>
<h1 id="Services" className="text-3xl font-lato dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit">{packagesContent.title}</h1>
</div>
<div className="mt-8 w-[40rem]">
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
</div>
</section>
    )
}

export default Packages