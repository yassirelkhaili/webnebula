import { mainContactTitle, checkoutFormTitle } from "../utils/contactformhandler";
import ContactForm from "../utils/contactformhandler";
import CheckoutForm from "../utils/checkoutformHandler";

interface contactProps {
  mainpage: boolean, 
  slug : string
}

const Contact = ({ mainpage, slug} : contactProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center mt-0">
      <div className={`container flex flex-col items-center ${!mainpage && "mt-24"}`}>
      <div>
        <h1
          id={mainpage ? "Contact" : "Confirm%20Order"}
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {mainpage ? mainContactTitle : checkoutFormTitle}
        </h1>
      </div>
      {mainpage ? <ContactForm /> : <CheckoutForm slug={slug}/>}
      </div>
    </section>
  );
};

export default Contact;
