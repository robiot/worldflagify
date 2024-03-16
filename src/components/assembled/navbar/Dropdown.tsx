"use client";

import { NavigationLinks } from "@/lib/content/links";

import { NavLink } from "./NavLink";

export const Dropdown = () => {
  return (
    <div className="fixed h-full w-full bg-background flex flex-col z-50 p-6 gap-16">
      <div className="flex gap-5 font-normal flex-col">
        {NavigationLinks.map((link) => (
          <NavLink href={link.href} key={link.href}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
