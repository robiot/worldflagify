import { Container } from "@/components/common/Container";
import { HeroHeading, HeroSubHeading } from "@/components/common/Hero";

import { CheckItem } from "./CheckItem";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { UploadBox } from "./CheckoutModal/UploadBox";
import Image from "next/image";
import Link from "next/link";

export const HomeTopSection = () => {
  return (
    <>
      <Container className="h-fit pt-14 flex flex-col md:flex-row gap-28 items-center">
        <div className="flex flex-col gap-9 text-left py-8 flex-1">
          <div className="flex flex-col">
            <span className="text-foreground/60 mb-1">Secured by</span>
            <Image
              src="/worldcoin.png"
              alt="worldcoin"
              className="h-8 w-fit"
              width={226}
              height={46}
            />
          </div>
          <HeroHeading>
            The database of malicious addresses, created by real humans
          </HeroHeading>
          <HeroSubHeading>
            WorldFlagify is an open source project with aims to increase the
            security on web3. This blockchain hosted list can be used to check if an address is malicious.
          </HeroSubHeading>

          <div className="flex gap-3">
            <Button size="lg" asChild>
              <Link href="/report">Report</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
            >
              <Link href="/api/info">Integrate into your app</Link>
            </Button>
          </div>
          <div className="flex flex-row items-center gap-9 gap-y-10 mt-6 md:mt-0">
            <CheckItem>Open-Source</CheckItem>
            <CheckItem>Community driven</CheckItem>
          </div>
        </div>
        <div className="md:pl-8 flex flex-col">
          <UploadBox />
        </div>
      </Container>
    </>
  );
};
