"use client";
// now its became client components bcoz we cant use react hook directly 
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
     <Menu setActive={setActive}>
      <Link href={"/"}>
      <MenuItem setActive={setActive} active={active} item="Home">
      
      </MenuItem>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Our courses">
      <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/allcourses">All Courses</HoveredLink>
            <HoveredLink href="/musictheory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/allcourses">Advanced Composition</HoveredLink>
            <HoveredLink href="/allcourses">Songwriting</HoveredLink>
            <HoveredLink href="/allcourses">Music Production</HoveredLink>
          </div>
      </MenuItem>
      <Link href={"/contact"}>
      <MenuItem setActive={setActive} active={active} item="Contact Us">
      
      </MenuItem>
      </Link>
     </Menu>
    </div>
  )
}

export default Navbar
