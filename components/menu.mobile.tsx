'use client'
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Drawer } from 'vaul';
import { buttonVariants } from './ui/button';
import { NavLinks } from "./nav";
import Link from "next/link"
import { cn } from "@/lib/utils";

export function MenuMobile() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className={cn(buttonVariants({ variant: 'secondary', size: 'icon' }), 'inline-flex sm:hidden')}>
        <HamburgerMenuIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="right-0 top-0 bottom-0 fixed z-50 flex outline-none">
          <div className="bg-neutral-50 w-[310px] grow mt-2 mr-2 mb-2 p-5 flex flex-col">
            <div className="max-w-md">
              <ul className="flex flex-col gap-2 text-zinc-900 w-full">
                {NavLinks.map((link) => (
                  <li key={link.name} className="flex items-center gap-2">
                    <Link href={link.href} className="bg-black text-white border w-full px-4 py-2 hover:bg-white hover:border-black hover:text-black">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}