import React from 'react'
import { PlusIcon as Icon } from '@radix-ui/react-icons'
import { cn, formatNumber } from '@/lib/utils'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import { buttonVariants } from '../ui/button'

type Props = {
    title?: string
    image: {
        src: string
        alt: string
    }
    price: number
    id: string
}

export function ProductCard({ title, image, price, id }: Props) {
    return (
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative hover:bg-white duration-150 group hover:shadow-md">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black group-hover:rotate-45 duration-150" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black group-hover:rotate-45 duration-150" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black group-hover:rotate-45 duration-150" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black group-hover:rotate-45 duration-150" />
            <Link href={routes.products.profile(id)}>
                <picture>
                    <img src={image.src} alt={image.alt} className="object-contain w-full h-full aspect-square bg-white" />
                </picture>
            </Link>
            {/* <EvervaultCard text="hover" /> */}

            <Link href={routes.products.profile(id)} className="dark:text-white text-black mt-4 text-sm font-light">
                {title}
            </Link>
            <p className="text-sm border font-light dark:border-white/[0.2] rounded-full mt-4 text-black border-neutral-900 dark:text-white px-3 py-0.5">
                {formatNumber(price, { option: { currency: "ARS", style: "currency" } })}
            </p>
            <Link href={routes.products.profile(id)} className={cn(buttonVariants(), 'w-full mt-4')}>
                <span>Ver detalle</span>
            </Link>
        </div>
    )
}
