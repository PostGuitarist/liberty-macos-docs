import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, HexagonIcon, MessageCircleQuestion } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Submit an Issue",
    href: "https://github.com/PostGuitarist/liberty-macos-docs/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=%5BBUG%5D",
  },
  {
    title: "Contribute",
    href: "https://github.com/PostGuitarist/liberty-macos-docs/issues/new?assignees=&labels=documentation%2C+enhancement&projects=&template=documentation-request.md&title=%5BDOCS%5D",
  },
  {
    title: "LU CPC Discord",
    href: "https://discord.gg/dneShg4YYv",
  },
];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-8">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex">
              <Link
                href="https://github.com/PostGuitarist/liberty-macos-docs"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://discord.com/users/335852771318169612"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <MessageCircleQuestion className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <HexagonIcon className="w-7 h-7 text-muted-foreground fill-current" />
      <h2 className="text-md font-bold">LU CS Docs</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            absolute
            className="hover:text-black dark:hover:text-white transition-all ease-in-out duration-200"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
