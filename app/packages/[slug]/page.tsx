"use client"
import Header from "@/app/header";
import Contact from "@/app/partials/contact";
import { useEffect, useState} from "react";
import CheckoutPage from "@/app/utils/checkouthandler";

const Booking = ({ params }: { params: { slug: string } }) => {
  const [scrolled, setscrolled] = useState(true)
  useEffect(() => {
    const scrollToTop = () => {
     scrolled && window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };
    scrollToTop();
    setscrolled(false)
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);

  return (
    <>
    <Header mainNavitems={false} />
    <Contact mainpage={false} slug={params.slug}/>
    <CheckoutPage slug={params.slug} />
    </>
  );
};

export default Booking;
