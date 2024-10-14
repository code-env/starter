import React from "react";
import Link from "next/link";

import { Icons } from "./icons";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <header className="bg-background/50 sticky top-0 z-50 h-20 border-b backdrop-blur-lg">
      <div className="container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Icons.laptop />
          <span>Template</span>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
