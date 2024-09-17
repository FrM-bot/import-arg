import { routes } from '@/lib/routes'
import Link from 'next/link'
import React from 'react'
import { FadeText } from './magicui/fade-text'

export default function Header() {
    return (
        <header className="px-4 lg:px-6 sm:h-14 py-4 flex items-center justify-center fixed top-0 bg-black/90 backdrop-blur-md text-neutral-200 z-50 w-full">
            <div className='container flex flex-col sm:flex-row sm:items-center items-center gap-2'>
                <Link href={routes.home}>
                    <FadeText
                        className="max-w-[600px] md:text-xl text-lg"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.5 } },
                        }}
                        text="ImportARG"
                    />
                </Link>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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
