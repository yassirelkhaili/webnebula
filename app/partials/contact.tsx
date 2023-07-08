import { contactTitle } from "../utils/contactformhandler"
import ContactForm from "../utils/contactformhandler"

const Contact = () => {
  return (
    <section className="min-h-screen mt-4 flex flex-col items-center mx-8"> 
    <div>
    <h1 id="Contact" className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit">{contactTitle}</h1>
    </div>
    <ContactForm />
    </section>
  )
}

export default Contact