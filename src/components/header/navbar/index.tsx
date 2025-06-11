"use client";
import Link from "@/components/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Pages, Routes } from "@/constants/enums";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const Links = [
    { id: crypto.randomUUID(), title: "Menu", href: Routes.MENU },
    { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
    { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
    {
      id: crypto.randomUUID(),
      title: "Login",
      href: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex flex-1 justify-end">
      <Button className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <Menu className="h-6 w-6" />
      </Button>
      <ul
        className={`
          fixed lg:static 
          ${openMenu ? "left-0" : "-left-full"} 
          top-0 
          w-full lg:w-auto 
          h-full lg:h-auto 
          flex flex-col lg:flex-row 
          items-start lg:items-center 
          gap-10
          px-10 py-20 lg:p-0 
          bg-background lg:bg-transparent 
          transition-all duration-200 ease-in-out
          z-40
        `}
      >
        <Button
          size="sm"
          className="absolute right-4 top-4 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <XIcon />
        </Button>
        {Links.map(({ id, title, href }) => (
          <li key={id}>
            <Link
              href={`/${href}`}
              className={`
                font-semibold
                ${
                  href === `${Routes.AUTH}/${Pages.LOGIN}`
                    ? `${buttonVariants({ size: "lg" })} !rounded-full !px-8`
                    : "hover:text-primary transition-colors duration-200"
                }
              `}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
