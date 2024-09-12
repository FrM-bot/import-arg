import { routes } from '@/lib/routes'
import Link from 'next/link'
import React from 'react'
import { FadeText } from './magicui/fade-text'

export default function Header() {
    return (
        <header className="px-4 lg:px-6 sm:h-14 py-4 flex items-center justify-center fixed top-0 bg-neutral-950/80 backdrop-blur-md text-neutral-200 z-50 w-full">
            <div className='container flex flex-col sm:flex-row sm:items-center items-center'>
                <Link className="flex items-center justify-center" href={routes.home}>
                    {/* <ShoppingCart className="h-6 w-6" /> */}
                    {/* <h1 className=" text-2xl">ImportARG</h1> */}
                    <FadeText
                        className="max-w-[600px] md:text-xl"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.5 } },
                        }}
                        text="ImportARG"
                    />
                </Link>
                <nav className="sm:ml-auto flex gap-4  sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href={`${routes.home}#products`}>
                        Productos
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href={`${routes.home}#about`}>
                        Sobre nosotros
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href={`${routes.home}#contact`}>
                        Contáctenos
                    </Link>
                </nav>
            </div>
        </header>
    )
}
