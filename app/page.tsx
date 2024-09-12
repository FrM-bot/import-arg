// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { products } from "@/mockData/products"
// import Header from "@/components/header"
import { ProductCard } from "@/components/card"
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern"
import { FadeText } from "@/components/magicui/fade-text"
import GradualSpacing from "@/components/magicui/gradual-spacing"
// import Meteors from "@/components/magicui/meteors"
import ProductsJSON from "@/data/products.json"
import { cn } from "@/lib/utils"
import { ContactUsSection } from "./contact"
import MetadataJSON from '@/data/metadata.json'
// import Metadata from "@/components/metadata"
import ContactButton from "@/components/button/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(MetadataJSON.url),
  title: MetadataJSON.title,
  description: MetadataJSON.description,
  openGraph: {
    type: 'website',
    url: MetadataJSON.url,
    locale: MetadataJSON.locale,
    title: MetadataJSON.title,
    description: MetadataJSON.description,
    images: [
      {
        url: `${MetadataJSON.url}/hero.webp`,
        width: 800,
        height: 600,
      },
    ],
  }
};

export default function ProductLandingPage() {
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url(/hero.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container relative flex h-[100dvh] w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <div>
            <GradualSpacing
              className="font-display text-center text-5xl font-bold tracking-[-0.1em] text-neutral-100 dark:text-white md:text-7xl md:leading-[5rem] z-10"
              text="Descubre nuestra colección de productos"
            />
            <FadeText
              className="max-w-[600px] text-neutral-100 md:text-xl z-10"
              direction="up"
              framerProps={{
                show: { transition: { delay: 1.5 } },
              }}
              text="Mejora tu estilo con nuestros productos premium. Diseñados para brindar comodidad y fabricados para durar."
            />
          </div>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.2}
            duration={1}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[160%] z-[0]",
            )}
          />
        </div>
      </section>
      <div>
        <section className="w-full p-10 m-auto bg-muted" id="products">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-neutral-800">Productos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1">
              {ProductsJSON.products.map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  title={product.name}
                  image={{
                    src: product.img[0],
                    alt: `${product.name} - ${product.id}`
                  }}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-neutral-950" id="about">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre nosotros</h2>
                <p className="max-w-2xl text-neutral-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {MetadataJSON.description}
                  {/* Somos una empresa dedicada a la importación de productos tecnológicos, comprometidos en ofrecer artículos de calidad a precios accesibles, garantizando la satisfacción de nuestros clientes con las últimas tendencias en tecnología */}
                </p>
              </div>
            </div>
          </div>
        </section>
        <ContactUsSection />
        <div className="sticky bottom-16 left-[90%] bg-transparent w-fit h-fit pr-6 pt-6">
          <ContactButton />
        </div>
      </div>
    </main>
  )
}