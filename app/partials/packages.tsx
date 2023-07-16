import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import packagesContent from "../constants/packages";
import { packagesTitle } from "../constants/packages";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Content, buttonLabel, customQuote } from "../constants/packages";

const Packages = () => {
  return (
    <section className="min-h-screen mt-4 flex flex-col items-center">
      <div>
        <h1
          id="Services"
          className="text-3xl font-lato dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit font-bold"
        >
          {packagesTitle}
        </h1>
      </div>
      <div className="container mt-8 grid phone:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
        {packagesContent.map((item: Content) => (
          <Card className="flex flex-col justify-between" key={item.key}>
            <div className="package-description">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="font-robotolight pt-0 pb-3">
                {item.features}
              </CardContent>
            </div>
            <div className="calltoaction">
              <CardFooter className="pt-0 pb-3 flex items-center justify-between gap-2">
                <Link
                  href={item.href}
                  className={`${buttonVariants({
                    variant: "primary",
                  })} h-10 sm:h-auto tablet:h-10 text-center`}
                >
                  {buttonLabel}
                </Link>
                <span className="text-3xl font-bold text-dark dark:text-slate-50 font-robotolight">
                  {item.price}{" "}
                  <span className="text-sm text-dark dark:text-slate-50 line-through">
                    {item.discountPrice}
                  </span>
                </span>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
      <div className="container flex items-center flex-1">{customQuote}</div>
    </section>
  );
};

export default Packages;
