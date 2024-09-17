import { WhatsAppUrl } from '@/lib/utils'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800">
            <div className="container mx-auto py-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sobre nosotros</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">Somos una empresa dedicada a la importación de productos tecnológicos, comprometidos en ofrecer artículos de calidad a precios accesibles, garantizando la satisfacción de nuestros clientes con las últimas tendencias en tecnología.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contáctenos</h3>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={WhatsAppUrl()}
                            className="text-gray-600 dark:text-gray-300 text-sm">+54 9 362 412-5046</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2024 ImportARG.
                </div>
            </div>
        </footer>
    )
}
