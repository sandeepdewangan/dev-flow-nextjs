"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { buttonVariants } from "@/components/ui/button";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Mobile Icon"
        />
      </SheetTrigger>
      <SheetContent side="left" className="p-5 flex flex-col justify-between">
        <SheetTitle className="flex flex-col">
          <span className="font-space-grotesk text-2xl">DevFlow</span>
          <NavLinks isMobileNav />
        </SheetTitle>

        <footer className="flex gap-1">
          <SheetClose>
            <Link
              href={ROUTES.SIGN_IN}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign-In
            </Link>
          </SheetClose>
          <SheetClose>
            <Link
              href={ROUTES.SIGN_UP}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign-Up
            </Link>
          </SheetClose>
        </footer>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
