import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-6 flex gap-3 items-center justify-between">
      <Link href="/" className="flex gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow Logo"
        />
        <p className="text-2xl font-bold font-space-grotesk">
          Dev<span>Flow</span>
        </p>
      </Link>

      <p>Global Search</p>
    </nav>
  );
};

export default Navbar;
