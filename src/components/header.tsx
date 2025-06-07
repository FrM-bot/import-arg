"use client";
import { routes } from "@/lib/routes";
import Link from "next/link";
import React from "react";
import { FadeText } from "./magicui/fade-text";
import { Nav } from "./nav";
import { MenuMobile } from "./menu.mobile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const currentPath = usePathname();
  const isInHome = currentPath === routes.home;

  return (
    <header
      className={cn(
        `sm:h-12 h-12 flex items-center justify-center fixed top-0 z-50 w-full`,
        isInHome ? "home-active" : "bg-white/70 backdrop-blur-[20px] border-b"
      )}
      id="header"
    >
      <div className="container flex sm:items-center items-center gap-2 justify-between">
        <Link href={routes.home}>
          <FadeText
            className="max-w-[600px] md:text-xl text-lg"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
          >
            importARG
          </FadeText>
        </Link>
        <Nav />
        <MenuMobile />
      </div>
    </header>
  );
}
