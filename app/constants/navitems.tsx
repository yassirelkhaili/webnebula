export type navitem = {
  name: string;
  key: number;
};

export function generateNavitems (mainpage: boolean) {
  const mainNavitems: Array<navitem> = [
    {
      name: "Home",
      key: 1,
    },
    {
      name: "About",
      key: 2,
    },
    {
      name: "Services",
      key: 3,
    },
    {
      name: "Skills",
      key: 4,
    },
    {
      name: "Process",
      key: 5,
    },
    {
      name: "Contact",
      key: 6,
    },
  ];

  const checkoutNavitems: Array<navitem> = [
    {
      name: "Confirm",
      key: 1,
    },
    {
      name: "Main Features",
      key: 2,
    },
    {
      name: "Package Comparison",
      key: 3,
    },
  ];

  if (mainpage === true) {
    return mainNavitems;
  } else {
    return checkoutNavitems;
  }
};
const navitems: Array<navitem> = [
  {
    name: "Home",
    key: 1,
  },
  {
    name: "About",
    key: 2,
  },
  {
    name: "Services",
    key: 3,
  },
  {
    name: "Skills",
    key: 4,
  },
  {
    name: "Process",
    key: 5,
  },
  {
    name: "Contact",
    key: 6,
  },
];

export default navitems;
