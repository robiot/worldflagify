import { FC } from "react";

import { Container } from "@/components/common/Container";
import { LegalLinks, MoreLinks, NavigationLinks } from "@/lib/content/links";

import { FooterCategory } from "./Category";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-t-border py-24 mt-24">
      <Container className="flex h-fit flex-col">
        <div className="flex justify-between flex-col items-center text-center md:items-start md:text-start md:flex-row gap-y-10">
          <div className="text-foreground flex flex-col">
            <p className="pt-3 text-xl">
              WorldFlagify
            </p>
          </div>

          <div className="flex gap-12 flex-col items-center text-center md:items-start md:text-start md:flex-row">
            <FooterCategory title="More" links={MoreLinks} />
          </div>
        </div>

        <div className="mt-24 text-center md:text-start">
          Copyright © {new Date().getFullYear()} Robiot.
        </div>
      </Container>
    </footer>
  );
};
