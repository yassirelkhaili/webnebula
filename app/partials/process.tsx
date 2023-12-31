import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { processTitle } from "../constants/process";
import processContent from "../constants/process";
import { processProps } from "../constants/process";

const Process = () => {
  return (
    <section className="min-h-screen mt-4 flex flex-col items-center">
      <div>
        <h1
          id="Process"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {processTitle}
        </h1>
      </div>
      <div className="container mt-[1.2rem]">
        {processContent.map((item: processProps, index: number) => {
          return (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};

export default Process;
