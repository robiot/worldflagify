import Ticker from "framer-motion-ticker";
import Image from "next/image";

import { Container } from "@/components/common/Container";

import { SectionHeading } from "@/components/common/Content";
import { FC } from "react";

export const Paragraph: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <p className="flex text-foreground/80 mb-5">{children}</p>;
};

export const HomeFeaturedSection = () => {
  return (
    <section>
      <Container className="pt-32 flex flex-col items-center text-center gap-4 mb-24">
        <SectionHeading>How does it work?</SectionHeading>

        <div className="w-3/4">
          <Paragraph>
            This works by voting. If a address is flagged by enough users, it
            will be marked as malicious. Worldcoin is used to make sure only
            real humans can report, and only once.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};
