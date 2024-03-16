"use client";

import { HomeFeaturedSection } from "@/components/fragments/Home/Featured/Featured";
import { HomeTopSection } from "@/components/fragments/Home/Top/Top";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeTopSection />
      <HomeFeaturedSection />

      <Link
        className="fixed right-0 bottom-0 bg-black hover:bg-white/80 z-50 rounded-tl-md p-1 text-white font-bold text-sm"
        href="https://x.com/robiot103"
        target="_blank"
      >
        by robiot
      </Link>
    </>
  );
}
