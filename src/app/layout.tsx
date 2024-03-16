import "@/styles/index.css";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import { ReactNode } from "react";

import { Footer } from "@/components/assembled/footer/Footer";
import { Navbar } from "@/components/assembled/navbar/Navbar";
import { Analytics } from "@/components/common/Analytics";
import { ApelEasterEgg } from "@/components/common/Apel";
import { MetaDescription, MetaTitle } from "@/lib/content/meta";
import { cn } from "@/lib/utils";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const url = "https://worldflagify.app";

export const metadata: Metadata = {
  title: MetaTitle,
  description: MetaDescription,

  metadataBase: new URL(url),
  openGraph: {
    url: url,
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <ClientProviders>
          <Navbar />

          <ApelEasterEgg />
          {children}

          <Footer />

          <Analytics />
        </ClientProviders>
      </body>
    </html>
  );
}
