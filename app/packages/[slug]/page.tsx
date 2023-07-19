"use client"
import Header from "@/app/header";
import Contact from "@/app/partials/contact";
import { useEffect } from "react";
import CheckoutPage from "@/app/utils/checkouthandler";

const Booking = ({ params }: { params: { slug: string } }) => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    scrollToTop();
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  }, []);

  return (
    <>
    <Header mainNavitems={false} />
    <Contact mainpage={false} />
    <CheckoutPage slug={params.slug} />
    </>
  );
};

export default Booking;
