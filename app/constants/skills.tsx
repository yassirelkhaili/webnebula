import Image from "next/image"
import NextsvgHandler from "../utils/svghandler"

export interface Content {
    title: string, 
    img: React.ReactNode
}

export const skillsTitle : string = "Technologies We Use"
const skillsContent : Array<Content> = [
    {
        title: "Laravel", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/l/23/laravel.svg" alt="laravel-logo"/>
    },
    {
        title: "Next", 
        img: <NextsvgHandler />
    },
    {
        title: "Typescript", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/t/96/typescript.svg" alt="typescript-logo"/>
    },
    {
        title: "React", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/r/63/react.svg" alt="react-logo"/>
    },
    {
        title: "Livewire", 
        img: <Image width="30" height="30" src="https://img.icons8.com/color/30/react-native.png" alt="react-native"/>
    },
    {
        title: "Inertia", 
        img: <Image width="30" height="30" src="https://img.icons8.com/color/30/react-native.png" alt="react-native"/>
    },
    {
        title: "Express", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/n/94/nodejs-icon.svg" alt="expressjs-logo"/>
    },
    {
        title: "Node", 
        img: <Image width="50" height="50" src="https://img.icons8.com/color/50/nodejs.png" alt="nodejs-logo"/>
    },
    {
        title: "Prisma", 
        img: <Image width="30" height="30" src="https://img.icons8.com/color/30/prisma-orm.png" alt="prisma-logo"/>
    },
    {
        title: "Eloquent", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/l/57/laravel.svg" alt="eloquent-logo"/>
    },
    {
        title: "Tailwind", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/t/58/tailwind-css.svg" alt="tailwind-logo"/>
    }, 
    {
        title: "Bootstrap", 
        img: <Image width="30" height="30" src="https://cdn.cdnlogo.com/logos/b/50/bootstrap.svg" alt="bootstrap-logo"/>
    }
]

export default skillsContent