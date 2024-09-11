import Link from 'next/link'
import React from 'react'
// import { Input } from './ui/input'
// import { Button } from './ui/button'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="container mx-auto py-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sobre nosotros</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">AudioPhile is your one-stop shop for high-quality audio equipment. We&apos;re passionate about delivering the best sound experience to our customers.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Links rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">FAQs</Link></li>
                            <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Shipping & Returns</Link></li>
                            <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contáctenos</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">1234 Audio Lane<br />Soundville, MU 56789<br />support@audiophile.com<br />(555) 123-4567</p>
                    </div>
                    {/* <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="flex">
                            <Input type="email" placeholder="Your email" className="rounded-r-none" />
                            <Button type="submit" className="rounded-l-none">Subscribe</Button>
                        </form>
                    </div> */}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2024 ImportARG.
                </div>
            </div>
        </footer>
    )
}
