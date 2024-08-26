// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Virtual Machines",
    href: "virtual-machines",
    items: [{ title: "Introduction", href: "/introduction" }],
  },
  {
    title: "C++ Development",
    href: "cpp-development",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Setup Development Environment", href: "/setup-environment" },
      { title: "VSCode to VS Extension", href: "/vsc-to-vs" },
    ],
  },
  {
    title: "Database Development",
    href: "db-development",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "DB ERD", href: "/db-erd" },
      { title: "Docker", href: "/docker" },
      { title: "SQL Server", href: "/tsql" },
      { title: "MySQL", href: "/mysql" },
      { title: "MS Access", href: "/ms-access" },
    ],
  },
  {
    title: "The O'Malley Trilogy",
    href: "omalley-trilogy",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Logisim", href: "/logisim" },
      { title: "x86-64", href: "/x86_64-vm" },
    ],
  },
  {
    title: "Other / Uncategorised",
    href: "other",
    items: [{ title: "Introduction", href: "/introduction" }],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
