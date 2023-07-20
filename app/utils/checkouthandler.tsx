import generateNavitems from "@/app/constants/navitems";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { checkoutProps, deliveryTimeProps, generateCheckoutContent } from "@/app/constants/checkout";
import generatePackageTitle from "@/app/constants/checkout";

function isDeliveryTimeProps(
  item: checkoutProps | deliveryTimeProps
): item is deliveryTimeProps {
  return (item as deliveryTimeProps).hint !== undefined;
}

interface checkoutPageProps {
    slug : string
}

export default function CheckoutPage({ slug }: checkoutPageProps) {
    return (
        <>
<section className="min-h-screen mt-4 flex flex-col items-center">
    <div>
        <h1
          id="Key%20Features"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {generateNavitems(false)[1].name}
        </h1>
      </div>
      <div className="container mt-8 sm:max-w-[50rem]">
      <Table>
  <TableHeader>
  <TableCaption>This list highlights the key features of this package.</TableCaption>
    <TableRow>
      <TableHead className="px-4">Package</TableHead>
      <TableHead colSpan={3} className="text-center">{generatePackageTitle(slug)}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {generateCheckoutContent(slug).map((checkoutItem, index, array) => {
    const nextItem = array[index + 1];
    if (index % 2 === 0) {
      return (
        <TableRow key={checkoutItem.columnTitle}>
          <TableCell className="font-medium w-[25%]">{checkoutItem.columnTitle}</TableCell>
          <TableCell className="w-[25%]">
            {(typeof checkoutItem.isChecked === "number")
                  ? (checkoutItem.isChecked + (checkoutItem.columnTitle === "Delivery Time" ? " days" : ""))
              : (
                <svg width="21" height="19" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                  <path className={checkoutItem.isChecked ? "fill-logo-100 dark:fill-logo-900" : "fill-slate-500 dark:fill-slate-400"} d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                </svg>
              )}
            {isDeliveryTimeProps(checkoutItem) && (
              <span className="text-slate-600 dark:text-slate-500 block">
                {checkoutItem.hint}
              </span>
            )}
          </TableCell>
          {nextItem && (
            <>
              <TableCell className="font-medium w-[25%]">{nextItem.columnTitle}</TableCell>
              <TableCell className="w-[25%]">
                {(typeof nextItem.isChecked === "number")
                  ? (nextItem.isChecked + (nextItem.columnTitle === "Delivery Time" ? " days" : ""))
                  : (
                    <svg width="21" height="19" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                      <path className={nextItem.isChecked ? "fill-logo-100 dark:fill-logo-900" : "fill-slate-500 dark:fill-slate-400"} d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                    </svg>
                  )}
                {isDeliveryTimeProps(nextItem) && (
                  <span className="text-slate-600 dark:text-slate-500 block">
                    {nextItem.hint}
                  </span>
                )}
              </TableCell>
              </>
          )}
        </TableRow>
      );
    }
    return null;
  })}
</TableBody>
</Table>
      </div>
    </section>
    <section className="min-h-screen mt-4 flex flex-col items-center">
    <div>
        <h1
          id="Package%20Comparison"
          className="text-3xl font-lato font-bold dark:text-slate-50 text-dark p-3 border-b-[3px] border-b-logo-100 dark:border-b-logo-900 w-fit"
        >
          {generateNavitems(false)[2].name}
        </h1>
      </div>
      <div className="container mt-8 sm:max-w-[70rem]">
      <Table>
  <TableCaption>A comprehensive comparison of available packages.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="px-4" colSpan={1}>Packages</TableHead>
      <TableHead colSpan={1}>{generatePackageTitle("basic")}</TableHead>
      <TableHead colSpan={1}>{generatePackageTitle("standard")}</TableHead>
      <TableHead colSpan={1}>{generatePackageTitle("premium")}</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {generateCheckoutContent(slug).map((checkoutItem: checkoutProps | deliveryTimeProps, index) => {
    return (
      <>
        <TableRow key={index}>
          <TableCell className="font-medium w-[25%]">{checkoutItem.columnTitle}</TableCell>
          <TableCell className="w-[25%]">
            {(typeof generateCheckoutContent("basic")[index].isChecked === "number")
                  ? (generateCheckoutContent("basic")[index].isChecked + (generateCheckoutContent("basic")[index].columnTitle === "Delivery Time" ? " days" : ""))
              : (
                <svg width="21" height="19" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                  <path className={generateCheckoutContent("basic")[index].isChecked ? "fill-logo-100 dark:fill-logo-900" : "fill-slate-500 dark:fill-slate-400"} d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                </svg>
              )}
            {isDeliveryTimeProps(generateCheckoutContent("basic")[index]) && (
              <span className="text-slate-600 dark:text-slate-500 block">
                {(generateCheckoutContent("basic")[index] as deliveryTimeProps).hint}
              </span>
            )}
          </TableCell>
          <TableCell className="w-[25%]">
            {(typeof generateCheckoutContent("standard")[index].isChecked === "number")
                  ? (generateCheckoutContent("standard")[index].isChecked + (generateCheckoutContent("standard")[index].columnTitle === "Delivery Time" ? " days" : ""))
              : (
                <svg width="21" height="19" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                  <path className={generateCheckoutContent("standard")[index].isChecked ? "fill-logo-100 dark:fill-logo-900" : "fill-slate-500 dark:fill-slate-400"} d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                </svg>
              )}
            {isDeliveryTimeProps(generateCheckoutContent("standard")[index]) && (
              <span className="text-slate-600 dark:text-slate-500 block">
                {(generateCheckoutContent("standard")[index] as deliveryTimeProps).hint}
              </span>
            )}
          </TableCell>
          <TableCell className="w-[25%]">
            {(typeof generateCheckoutContent("premium")[index].isChecked === "number")
                  ? (generateCheckoutContent("premium")[index].isChecked + (generateCheckoutContent("premium")[index].columnTitle === "Delivery Time" ? " days" : ""))
              : (
                <svg width="21" height="19" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                  <path className={generateCheckoutContent("premium")[index].isChecked ? "fill-logo-100 dark:fill-logo-900" : "fill-slate-500 dark:fill-slate-400"} d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>
                </svg>
              )}
            {isDeliveryTimeProps(generateCheckoutContent("premium")[index]) && (
              <span className="text-slate-600 dark:text-slate-500 block">
                {(generateCheckoutContent("premium")[index] as deliveryTimeProps).hint}
              </span>
            )}
          </TableCell>
          </TableRow>
      </>
    )
  })}
  </TableBody>
</Table>
      </div>
    </section>
    </>
    )
}