import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const About = () => {
return (
    <section className="min-h-screen mt-4 flex flex-col items-center"> 
<div>
<h1 id="About" className="text-3xl font-lato dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit">About Us</h1>
</div>
<Card id="About" className="mt-12"> 
<CardHeader> 
    <CardTitle>Card Title</CardTitle> 
    <CardDescription>Card Description</CardDescription> 
</CardHeader> 
<CardContent> <p>Card Content</p> </CardContent> 
<CardFooter> <p>Card Footer</p> </CardFooter> 
</Card> 
</section>
)
}

export default About