import Header from "@/app/header";
import Contact from "@/app/partials/contact";
import generateNavitems from "@/app/constants/navitems";

const Booking = ({ params }: { params: { slug: string } }) => {
  return (
    <>
    <Header mainNavitems={false} />
    <Contact />
    <section className="min-h-screen mt-4 flex flex-col items-center">
    <div>
        <h1
          id="f"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {generateNavitems(false)[1].name}
        </h1>
      </div>
    </section>
    <section className="min-h-screen mt-4 flex flex-col items-center">
    <div>
        <h1
          id="Contact"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {generateNavitems(false)[2].name}
        </h1>
      </div>
    </section>
    </>
  );
};

export default Booking;
