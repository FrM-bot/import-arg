import React from 'react'
import { WhatsApp } from '../icons'
import { cn, getWhatsAppUrl } from '@/lib/utils'
import { buttonVariants } from '../ui/button'
import { PlusIcon as Icon } from '@radix-ui/react-icons'

export function ContactButton() {
  return (
    <a className={cn(buttonVariants({ size: 'icon', variant: 'outline' }), 'h-12 w-12 relative bg-white/50 backdrop-blur-sm text-black')} href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-neutral-300 group-hover:rotate-45 duration-150" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-neutral-300 group-hover:rotate-45 duration-150" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-neutral-300 group-hover:rotate-45 duration-150" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-neutral-300 group-hover:rotate-45 duration-150" />
      <WhatsApp />
    </a>
  )
}

export function FixedContactButton() {
  return (
    <div className="sticky bottom-16 left-[90%] bg-transparent w-fit h-fit p-6">
      <ContactButton />
    </div>
  );
}
