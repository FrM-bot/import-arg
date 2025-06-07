import { routes } from "@/lib/routes"
import Link from "next/link"

export const NavLinks = [
    // {
    //     name: 'Productos',
    //     href: `${routes.home}#products`
    // },
    {
        name: 'Lista de precios',
        href: `${routes.priceList}`
    },
    {
        name: 'Sobre nosotros',
        href: `${routes.home}#about`
    },
    {
        name: 'Contáctenos',
        href: `${routes.home}#contact`
    },
]

export const Nav = () => (
    <nav className="sm:ml-auto sm:flex gap-2 sm:gap-6 hidden">
        {NavLinks.map((link) => (
            <Link key={link.name} className="text-sm font-medium hover:underline underline-offset-4" href={link.href}>
                {link.name}
            </Link>
        ))}
    </nav>
)