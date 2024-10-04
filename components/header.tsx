import { routes } from '@/lib/routes'
import Link from 'next/link'
import React from 'react'
import { FadeText } from './magicui/fade-text'
import { Nav } from './nav'
import { MenuMobile } from './menu.mobile'

export default function Header() {
    return (
        <header className="sm:h-14 py-4 flex items-center justify-center fixed top-0 bg-black/90 backdrop-blur-md text-neutral-200 z-50 w-full">
            <div className='container flex sm:items-center items-center gap-2 justify-between'>
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
                <Nav />
                <MenuMobile />
            </div>
        </header>
    )
}
