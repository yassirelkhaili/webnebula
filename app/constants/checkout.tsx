export interface checkoutProps {
  columnTitle: string;
  isChecked: boolean | number;
}
export interface deliveryTimeProps extends checkoutProps {
  hint: string;
}

export default function generatePackageTitle(packageType: string): string {
  switch (packageType) {
    case "basic":
      return "ESSENTIAL WEB PRESENCE PACKAGE";
    case "standard":
      return "COMPLETE WEB SOLUTION PACKAGE";
    case "premium":
      return "PREMIUM WEB SOLUTION PACKAGE";
    default:
      throw new Error("Invalid package type");
  }
}

export function generateCheckoutContent(packageType : string): Array<checkoutProps | deliveryTimeProps> {
    const basicContent: Array<checkoutProps | deliveryTimeProps> = [
        {
          columnTitle: "Functional website",
          isChecked: true,
        },
        {
          columnTitle: "Content upload",
          isChecked: true,
        },
        {
          columnTitle: "E-commerce functionality",
          isChecked: false,
        },
        {
          columnTitle: "Payment processing",
          isChecked: false,
        },
        {
          columnTitle: "Opt-in form",
          isChecked: false,
        },
        {
          columnTitle: "Autoresponder integration",
          isChecked: false,
        },
        {
          columnTitle: "Speed optimization",
          isChecked: true,
        },
        {
          columnTitle: "Hosting setup",
          isChecked: true,
        },
        {
          columnTitle: "Social media icons",
          isChecked: true,
        },
        {
            columnTitle: "Admin panel",
            isChecked: false,
        },
        {
          columnTitle: "Number of pages",
          isChecked: 6,
        },
        {
          columnTitle: "Number of products",
          isChecked: false,
        },
        {
          columnTitle: "Revisions",
          isChecked: 3,
        },
        {
          columnTitle: "Delivery Time",
          isChecked: 7,
          hint: "Express delivery available",
        },
      ];
      const standardContent: Array<checkoutProps | deliveryTimeProps> = [
        {
          columnTitle: "Functional website",
          isChecked: true,
        },
        {
          columnTitle: "Content upload",
          isChecked: true,
        },
        {
          columnTitle: "E-commerce functionality",
          isChecked: true,
        },
        {
          columnTitle: "Payment processing",
          isChecked: true,
        },
        {
          columnTitle: "Opt-in form",
          isChecked: true,
        },
        {
          columnTitle: "Autoresponder integration",
          isChecked: true,
        },
        {
          columnTitle: "Speed optimization",
          isChecked: true,
        },
        {
          columnTitle: "Hosting setup",
          isChecked: true,
        },
        {
          columnTitle: "Social media icons",
          isChecked: true,
        },
        {
            columnTitle: "Admin panel",
            isChecked: false,
        },
        {
          columnTitle: "Number of pages",
          isChecked: 8,
        },
        {
          columnTitle: "Number of products",
          isChecked: 40,
        },
        {
          columnTitle: "Revisions",
          isChecked: 5,
        },
        {
          columnTitle: "Delivery Time",
          isChecked: 21,
          hint: "Express delivery available",
        },
      ];
      const premiumContent: Array<checkoutProps | deliveryTimeProps> = [
        {
          columnTitle: "Functional website",
          isChecked: true,
        },
        {
          columnTitle: "Content upload",
          isChecked: true,
        },
        {
          columnTitle: "E-commerce functionality",
          isChecked: true,
        },
        {
          columnTitle: "Payment processing",
          isChecked: true,
        },
        {
          columnTitle: "Opt-in form",
          isChecked: true,
        },
        {
          columnTitle: "Autoresponder integration",
          isChecked: true,
        },
        {
          columnTitle: "Speed optimization",
          isChecked: true,
        },
        {
          columnTitle: "Hosting setup",
          isChecked: true,
        },
        {
          columnTitle: "Social media icons",
          isChecked: true,
        },
        {
            columnTitle: "Admin panel",
            isChecked: true,
        },
        {
          columnTitle: "Number of pages",
          isChecked: 10,
        },
        {
          columnTitle: "Number of products",
          isChecked: 50,
        },
        {
          columnTitle: "Revisions",
          isChecked: 7,
        },
        {
          columnTitle: "Delivery Time",
          isChecked: 30,
          hint: "Express delivery available",
        },
      ];
      switch (packageType) {
        case "basic":
          return basicContent;
        case "standard":
          return standardContent;
        case "premium":
          return premiumContent;
        default:
          throw new Error("Invalid package type");
      }
}

