"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const footerLinks = {
  social: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/import_arg.oficial",
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="container mx-auto py-6 border-t">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sobre nosotros
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Somos una empresa dedicada a la importación de productos
              tecnológicos, comprometidos en ofrecer artículos de calidad a
              precios accesibles, garantizando la satisfacción de nuestros
              clientes con las últimas tendencias en tecnología.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Redes sociales
            </h3>
            {footerLinks.social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ImportARG.
        </div>
      </div>
    </footer>
  );
}
