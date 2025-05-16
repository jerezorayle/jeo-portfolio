import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/constants/site-header";
import SiteFooter from "@/constants/site-footer";
import CursorGlow from "@/constants/cursor-glow";
import { FlashlightProvider } from "@/context/flashlight-context";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerez Orayle | Software Engineer",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased dark min-h-screen bg-background text-foreground flex flex-col justify-between`}
      >
        <FlashlightProvider>
          <header className="w-full border-b bg-background flex-shrink-0">
            <SiteHeader />
          </header>

          <div className="w-full">
            <main className="xl:mx-60 lg:mx-40 md:mx-24 sm:mx-10 mx-4 mt-10">
              <CursorGlow />
              {children}
            </main>
          </div>

          <SiteFooter />
        </FlashlightProvider>
      </body>
    </html>
  );
}
