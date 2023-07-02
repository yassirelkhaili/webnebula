export interface Content {
    title: string
    description: string
}
export const packagesTitle : string = "Our Packages"
const packagesContent : Array<Content> = [
    {
        title: "Essential Web Presence Package", 
        description: "Responsive,Custom Website Front-End.Built with React,Tailwind and more.SEO/Documentation included."
    }, 
    {
        title: "Complete Web Solution Package", 
        description: "Complete Website Front-End+Back-End.Built with React, Laravel and more.SEO/Documentation included."
    },
    {
        title: "Premium Web Solution Package", 
        description: "Complete Website Front-End+Back-End including a customized admin panel.SEO/Documentation included."
    }
]

export default packagesContent