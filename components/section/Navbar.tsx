"use client";

import { LayoutGroup } from "framer-motion";
import { Menu, Ghost, LayoutList, LineChart } from "lucide-react";
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
    name: "All Project",
    url: "/projects",
    icon: <LayoutList className="w-4 h-4 mr-2" />,
  },
  {
    name: "Experience",
    url: "/experience",
    icon: <LineChart className="w-4 h-4 mr-2" />,
  },
];

const Navbar: React.FC = () => {
  const path = usePathname() || "/";

  return (
    <LayoutGroup>
      <nav className="sticky top-0 py-4 w-full bg-background supports-[backdrop-filter]:bg-background/80 z-10 supports-[backdrop-filter]:backdrop-blur-md flex justify-between items-center">
        <Link href="/" className="font-light">
          <span className="font-bold">Adi</span>cs.
        </Link>

        <ul className="items-center space-x-4 hidden lg:flex">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Button
                asChild
                variant="link"
                className={`no-underline hover:no-underline focus-visible:ring-secondary ${
                  path === item.url
                    ? "text-foreground"
                    : "hover:text-foreground text-foreground/40"
                } p-0`}
              >
                <Link href={item.url}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded border-none lg:hidden focus-visible:ring-secondary"
            >
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-border rounded" align="end">
            <DropdownMenuGroup>
              {navItems.map((item, idx) => (
                <DropdownMenuItem
                  className="rounded cursor-pointer"
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
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
