"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Drawer } from "vaul";
import { buttonVariants } from "./ui/button";
import { NavLinks } from "./nav";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

export function MenuMobile() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "inline-flex sm:hidden"
        )}
      >
        <HamburgerMenuIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="right-0 top-0 bottom-0 fixed z-50 flex outline-none w-full">
          <div className="bg-neutral-50/70 backdrop-blur-sm w-full grow p-5 flex flex-col">
            <div className="flex justify-end mb-2">
              <Drawer.Close className={buttonVariants({ variant: "ghost", size: "icon" })}>
                <Cross1Icon />
              </Drawer.Close>
            </div>
            <ul className="flex flex-col gap-2 text-neutral-900 w-full">
              {NavLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="text-neutral-900 border border-neutral-50 w-full px-4 py-2 hover:bg-neutral-50/40"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
