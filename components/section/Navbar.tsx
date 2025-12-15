"use client";

import { LayoutGroup } from "framer-motion";
import { Menu, LayoutList, LineChart, Cpu, Ghost } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "About",
    url: "#about",
    icon: <Ghost className="w-4 h-4" />,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: <LayoutList className="w-4 h-4" />,
  },
  {
    name: "Experience",
    url: "#experience",
    icon: <LineChart className="w-4 h-4" />,
  },
  {
    name: "Tech Skills",
    url: "#tech-skills",
    icon: <Cpu className="w-4 h-4" />,
  },
];

const Navbar: React.FC = () => {
  const path = usePathname();
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || "");
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <LayoutGroup>
      <nav className="sticky top-0 w-full z-10 p-4">
        <div className="px-8 py-4 rounded-full w-full container bg-background/60 border backdrop-blur-sm">
          <div className="relative z-10 w-full flex justify-between items-center">
            <Link
              href="/"
              onClick={(e) => {
                // When already on the homepage (even if URL is /#something),
                // avoid Next navigation/scroll restoration fighting our scrollTo.
                if (path === "/") {
                  e.preventDefault();
                  window.history.replaceState(null, "", "/"); // remove hash
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveHash("");
                }
              }}
              className="font-light"
            >
              <span className="font-bold">Adi</span>cs.
            </Link>

            <ul className="items-center space-x-4 hidden lg:flex">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <Button
                    asChild
                    variant="link"
                    className={`no-underline hover:no-underline focus-visible:ring-secondary ${
                      activeHash === item.url
                        ? "text-foreground"
                        : "hover:text-foreground text-foreground/40"
                    } p-0`}
                  >
                    <Link
                      href={item.url}
                      className="has-[>svg]:px-0"
                      onClick={() => setActiveHash(item.url)}
                    >
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
