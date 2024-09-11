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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

// import { ShoppingCart } from "lucide-react"
export default function ProductLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-1">
        <section
          style={{
            backgroundImage: 'url(/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Hero Product"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/portada.webp"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Descubre nuestra colección de productos
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Mejora tu estilo con nuestros productos premium. Diseñados para brindar comodidad y fabricados para durar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Shop Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="relative flex h-[95dvh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <Meteors number={60} />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Meteors
            </span>
          </div> */}
          <div className="container relative flex h-[95dvh] w-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            <div>
              {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Descubre nuestra colección de productos
              </span> */}
              <GradualSpacing
                className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-neutral-100 dark:text-white md:text-7xl md:leading-[5rem] z-10"
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
              {/* <p className="max-w-[600px] text-muted-foreground md:text-xl">
                
              </p> */}
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
        <section className="w-full p-10 m-auto bg-muted" id="products">
          <div className="container m-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-neutral-800">Productos</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="container m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre nosotros</h2>
                <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctenos por algún producto que tengas en mente o por cualquier otro tema que te interese.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-neutral-800" id="contact">
          <div className="container m-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contáctenos</h2>
                <p className="max-w-2xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctenos por algún producto que tengas en mente o por cualquier otro tema que te interese.
                </p>
              </div>
              <div className="w-full max-w-2xl space-y-2">
                <form className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Input className="w-full flex-1" placeholder="Asunto" type="email" />
                    <Button type="submit">Enviar</Button>
                  </div>
                  <Textarea className="max-h-48" placeholder="Tu mensaje" />
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}