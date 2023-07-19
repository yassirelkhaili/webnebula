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

export const packageTitle: string = "ESSENTIAL WEB PRESENCE PACKAGE";

export const checkoutContent: Array<checkoutProps | deliveryTimeProps> = [
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
    hint: "Express delivery is available",
  },
];
