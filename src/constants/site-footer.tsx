"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <footer className="w-full border-t bg-background flex-shrink-0 flex flex-row justify-center items-center gap-4 mt-36 py-4">
      <div className="flex gap-4 justify-center items-center h-16">
        <Link href="https://www.linkedin.com/in/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Linkedin /></Button>
        </Link>
        <Link href="https://github.com/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Github /></Button>
        </Link>
        <Link href="https://instagram.com/javajeo" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Instagram /></Button>
        </Link>
        <Link href="https://facebook.com/jerezorayle" target="_blank" rel="noopener noreferrer">
          <Button size="icon"><Facebook /></Button>
        </Link>
      </div>
    </footer>
  );
}
