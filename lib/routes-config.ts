// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Changelog", href: "/changelog" },
      { title: "About", href: "/about" },
    ],
  },
  {
    title: "Virtual Machines",
    href: "/virtual-machines",
    noLink: true,
    items: [{ title: "Introduction", href: "/introduction" }],
  },
  {
    title: "C++ Development",
    href: "/cpp-development",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Setup Development Environment", href: "/setup-environment" },
      { title: "VSCode to VS Extension", href: "/vsc-to-vs" },
    ],
  },
  {
    title: "Database Development",
    href: "/db-development",
    noLink: true,
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
    href: "/omalley-trilogy",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Logisim", href: "/logisim" },
      { title: "x86-64", href: "/x86_64-vm" },
    ],
  },
  {
    title: "Other / Uncategorised",
    href: "/other",
    noLink: true,
    items: [{ title: "Introduction", href: "/introduction" }],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
