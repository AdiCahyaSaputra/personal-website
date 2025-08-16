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
      <svg className="hidden">
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.001 0.005"
            numOctaves="1"
            seed="17"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="200"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <nav className="sticky top-0 w-full z-10 p-0 liquidGlass-wrapper bg-background/10 border-b-1">
        <div className="p-5 rounded-md w-full container">
          <div className="liquidGlass-effect"></div>
          <div className="liquidGlass-tint bg-card/25"></div>
          <div className="liquidGlass-shine rounded-md"></div>
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
                  className="rounded-md border-none lg:hidden focus-visible:ring-secondary"
                >
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="border-border rounded-md"
                align="end"
              >
                <DropdownMenuGroup>
                  {navItems.map((item, idx) => (
                    <DropdownMenuItem
                      className="rounded-md cursor-pointer"
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
