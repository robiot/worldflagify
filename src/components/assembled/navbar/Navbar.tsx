"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { NavigationLinks } from "@/lib/content/links";
import { enviroment } from "@/lib/enviroment";
import { cn } from "@/lib/utils";

import { Container } from "../../common/Container";
import { Dropdown } from "./Dropdown";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "h-16 w-full transition-colors duration-300",
          "text-foreground",
          dropdownOpen && "z-50 bg-background sticky top-0"
        )}
      >
        <Container className="flex items-center justify-between px-3">
          <div className="flex items-center gap-8">
            <NavLink href={"/"}>
              <div className="font-bold text-xl flex items-center gap-4">
                WorldFlagify
              </div>
            </NavLink>
          </div>

          <div className="flex items-center gap-5">
            <Button>Report</Button>

            {/* <div className="hidden md:block">
              <DownloadButton
                size="small"
                className="bg-foreground text-background hover:bg-foreground/80"
              />
            </div> */}
          </div>
        </Container>
      </nav>
    </>
  );
};
