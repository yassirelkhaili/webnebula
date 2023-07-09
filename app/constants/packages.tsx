export interface Content {
    title: string
    description: string, 
    features: React.ReactNode
}
export const packagesTitle : string = "Our Packages"
const packagesContent : Array<Content> = [
    {
        title: "Essential Web Presence Package", 
        description: "Responsive,Custom Website Front-End.Built with React,Tailwind and more.SEO/Documentation included.",
        features: (
            <>
            <h3>Features:</h3>
            <ul className="pt-2">
  <li className="pt-1">• Professional design and development of a responsive and custom website front-end</li>
  <li className="pt-1">• Utilizing cutting-edge technologies such as React and Tailwind CSS</li>
  <li className="pt-1">• Implementing Search Engine Optimization (SEO) techniques to enhance online visibility</li>
  <li className="pt-1">• Comprehensive documentation provided for easy maintenance and updates</li>
</ul>
            </>
        )
    }, 
    {
        title: "Complete Web Solution Package", 
        description: "Complete Website Front-End+Back-End.Built with React, Laravel and more.SEO/Documentation included.",
        features: (
            <>
            <h3>Features:</h3>
            <ul className="pt-2">
            <li className="pt-1">• Full development of both the front-end and back-end of your website</li>
            <li className="pt-1">• Utilizing powerful frameworks like React for dynamic user interfaces and Laravel for robust back-end functionality</li>
            <li className="pt-1">• Implementation of SEO techniques to boost your website's search engine rankings</li>
            <li className="pt-1">• Detailed documentation provided for seamless management and future updates</li>
</ul>
            </>
        )
    },
    {
        title: "Premium Web Solution Package", 
        description: "Complete Website Front-End+Back-End including a customized admin panel.SEO/Documentation included.",
        features: (
            <>
            <h3>Features:</h3>
            <ul className="pt-2">
            <li className="pt-1">• Comprehensive development of the front-end and back-end of your website</li>
            <li className="pt-1">• Customization of an advanced admin panel for enhanced control and management</li>
            <li className="pt-1">• Implementation of SEO strategies to improve your website's visibility and organic traffic</li>
            <li className="pt-1">• Expertly crafted user experience (UX) design to provide a seamless browsing experience</li>
            <li className="pt-1">• Detailed documentation provided for easy reference and ongoing support</li>
</ul>
            </>
        )
    }
]

export const buttonLabel : string = "Book this package!"
export const customQuote : React.ReactNode = <><h6 className="custom-quote font-robotolight">Looking for a more tailored solution or additional features not covered in our packages? don't hesitate to contact us at <a className="underline" href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</a>
</h6></>

export default packagesContent