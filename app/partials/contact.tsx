import { mainContactTitle, checkoutFormTitle } from "../utils/contactformhandler";
import ContactForm from "../utils/contactformhandler";

interface contactProps {
  mainpage: boolean, 
}

const Contact = ({ mainpage } : contactProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center mx-8 mt-0">
      <div className={`container flex flex-col items-center ${!mainpage && "mt-24"}`}>
      <div>
        <h1
          id={mainpage ? "Contact" : "Confirm"}
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {mainpage ? mainContactTitle : checkoutFormTitle}
        </h1>
      </div>
      <ContactForm mainpage={mainpage}/>
      </div>
    </section>
  );
};

export default Contact;
