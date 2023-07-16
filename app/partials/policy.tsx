import { Card, CardContent, CardFooter } from "@/components/ui/card";
import policyContent from "../constants/policy";

const Policy = () => {
  return (
    <section className="min-h-screen mt-4 flex flex-col items-center">
      <div>
        <h1
          id="About"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {policyContent.title}
        </h1>
      </div>
      <Card className="mt-8 sm:max-w-[40rem] mx-8 font-robotolight">
        <CardContent className="flex flex-col gap-2 pt-[1.5rem]">
          {policyContent.content}
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
          {policyContent.footer}
        </CardFooter>
      </Card>
    </section>
  );
};

export default Policy;
