"use client";

import { LayoutGroup, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  {
    name: "about",
    url: "/",
  },
  {
    name: "projects",
    url: "/projects",
  },
];

const Navbar: React.FC = () => {
  const path = usePathname() || "/";

  return (
    <LayoutGroup>
      <nav>
        <ul className="flex items-center gap-4">
          {navItems.map((navItem, idx) => (
            <li key={idx}>
              <Link href={navItem.url} className="py-2 px-4 relative">
                <span className="mix-blend-exclusion leading-7">
                  {navItem.name}
                </span>
                {path === navItem.url && (
                  <motion.span
                    layoutId="navbar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-foreground -z-10"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
