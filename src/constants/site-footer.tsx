"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="w-full border-t bg-background flex-shrink-0 flex flex-row justify-center items-center gap-4 mt-36 py-4">
      <div className="flex gap-4 justify-center items-center h-16">
        <Button size="icon"><Linkedin /></Button>
        <Button size="icon"><Github /></Button>
        <Button size="icon"><Instagram /></Button>
        <Button size="icon"><Facebook /></Button>
      </div>
    </footer>
  );
}
