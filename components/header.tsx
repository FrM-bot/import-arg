import { routes } from '@/lib/routes'
import Link from 'next/link'
import React from 'react'
import { FadeText } from './magicui/fade-text'

export default function Header() {
    return (
        <header className="px-4 lg:px-6 sm:h-14 py-4 flex items-center justify-center sticky top-0 bg-neutral-950/80 backdrop-blur-md z-50">
            <div className='container flex flex-col sm:flex-row sm:items-center items-center'>
                <Link className="flex items-center justify-center" href={routes.home}>
                    {/* <ShoppingCart className="h-6 w-6" /> */}
                    {/* <h1 className=" text-2xl">ImportARG</h1> */}
                    <FadeText
                        className="max-w-[600px] text-white md:text-xl"
                        direction="down"
                        framerProps={{
                            show: { transition: { delay: 0.5 } },
                        }}
                        text="ImportARG"
                    />
                </Link>
                <nav className="sm:ml-auto flex gap-4  sm:gap-6">
                    <a className="text-sm font-medium hover:underline underline-offset-4" href='#products'>
                        Productos
                    </a>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href='#about'>
                        Sobre nosotros
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href='#contact'>
                        Contáctenos
                    </Link>
                </nav>
            </div>
        </header>
    )
}
