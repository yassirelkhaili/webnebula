import { contactTitle } from "../constants/contact"

const Contact = () => {
    return (
        <section className="min-h-screen mt-4 flex flex-col items-center"> 
        <div>
        <h1 id="Contact Us" className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit">{contactTitle}</h1>
        </div>
        <div className="container mt-8">
            
        </div>
        </section>
    )
    }
    
    export default Contact