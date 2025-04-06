"use client";

import { SheetClose } from "@/components/ui/sheet";
import { navLinks } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const linkComponent = (
          <Link
            key={item.label}
            href={item.route}
            className={cn(
              isActive ? "font-bold" : "font-light",
              "flex gap-2 py-3"
            )}
          >
            <Image src={item.imgUrl} width={20} height={20} alt={item.label} />
            <p>{item.label}</p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
