export interface processProps {
    question : string, 
    answer : string
}

export const processTitle : string = "Frequently Asked Questions"

const processContent : Array<processProps> = [
    {
        question: " How long does it take to build a website?", 
        answer: "The timeline for website development depends on various factors, such as the complexity of the project, design requirements, functionality needed, and client responsiveness. We provide estimates based on project scope and work diligently to deliver high-quality results within the agreed timeframe."
    }
]

export default processContent