"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Flashlight, FlashlightOff, Menu, X } from "lucide-react";
import { useFlashlight } from "@/context/flashlight-context";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { enabled, toggle } = useFlashlight();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between lg:mx-60 md:mx-40 sm:mx-20 xs:mx-10 relative">
      <h6 className="text-md font-semibold">Jerez Orayle</h6>

      <div className="flex items-center gap-2">
        {/* Flashlight button with animated icon */}
        <Button onClick={toggle} variant="outline" className="text-xs font-thin">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={enabled ? "on" : "off"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {enabled ? <Flashlight /> : <FlashlightOff />}
            </motion.span>
          </AnimatePresence>
        </Button>

        {/* Burger Icon with Animation */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Full Navigation (hidden on small screens) */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex gap-4">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-md font-bold transition-colors hover:text-primary px-5",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Collapsible Mobile Menu with Fade Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-full bg-background p-4 border-t shadow-md lg:hidden z-50"
          >
            <div className="flex flex-col items-start space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-md font-bold transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
