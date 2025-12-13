"use client";

import { LayoutGroup } from "framer-motion";
import { Menu, LayoutList, LineChart, AppWindow } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navItems = [
  {
    name: "UI",
    url: "/ui",
    icon: <AppWindow className="w-4 h-4 mr-2" />,
  },
  {
    name: "Creations",
    url: "/creations",
    icon: <LayoutList className="w-4 h-4 mr-2" />,
  },
  {
    name: "Journey",
    url: "/journey",
    icon: <LineChart className="w-4 h-4 mr-2" />,
  },
];

const Navbar: React.FC = () => {
  const path = usePathname() || "/";

  return (
    <LayoutGroup>
      <nav className="sticky top-0 w-full z-10 p-4">
        <div className="px-8 py-4 rounded-full w-full container bg-background/20 border backdrop-blur-sm">
          <div className="relative z-10 w-full flex justify-between items-center">
            <Link href="/" className="font-light">
              <span className="font-bold">Adi</span>cs.
            </Link>

            <ul className="items-center space-x-4 hidden lg:flex">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Button
                    asChild
                    variant="link"
                    className={`no-underline hover:no-underline focus-visible:ring-secondary ${path === item.url
                      ? "text-foreground"
                      : "hover:text-foreground text-foreground/40"
                      } p-0`}
                  >
                    <Link href={item.url}>
                      {item.icon}
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-none lg:hidden focus-visible:ring-secondary"
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border-border rounded-xl"
                align="end"
              >
                <DropdownMenuGroup>
                  {navItems.map((item, idx) => (
                    <DropdownMenuItem
                      className="rounded-lg cursor-pointer"
                      asChild
                      key={idx}
                    >
                      <Link href={item.url}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
