"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Flashlight, FlashlightOff, Lightbulb, LightbulbOff } from "lucide-react";
import { useFlashlight } from "@/context/flashlight-context";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { enabled, toggle } = useFlashlight();

  return (
    <div className="flex h-16 items-center justify-between lg:mx-60 md:mx-40 sm:mx-20 xs:mx-10">
        <h6 className="text-md font-semibold">Jerez Orayle</h6>
        <Button onClick={toggle} variant="outline" className="text-xs font-thin">
          {enabled ? <Flashlight /> : <FlashlightOff />}
        </Button>
        <NavigationMenu>
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
      </div>
  );
}
