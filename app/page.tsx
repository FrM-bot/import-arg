import { ProductCard } from "@/components/card";
import ProductsJSON from "@/data/products.json";
import { ContactUsSection } from "./contact";
import MetadataJSON from "@/data/metadata.json";
import ContactButton from "@/components/button/contact";
import type { Metadata } from "next";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  metadataBase: new URL(MetadataJSON.url),
  title: MetadataJSON.title,
  description: MetadataJSON.description,
  openGraph: {
    type: "website",
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
  },
};

function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: "url(/hero.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[100dvh] bg-radial-[at_50%_75%] from-transparent via-neutral-800/40 to-neutral-900 to-90%" />
        {/* <div className="flex h-[100dvh] w-full container items-center justify-center overflow-hidden w-full md:shadow-xl">
          <div className="pt-70">
            <BoxReveal boxColor="#ffffff75" duration={0.5}>
              <p className="md:text-7xl text-5xl font-semibold text-neutral-50">
                Descubre nuestra colección de productos<span>.</span>
              </p>
            </BoxReveal>
            <FadeText
              className="max-w-[600px] text-neutral-100 md:text-xl z-10 mt-2"
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
              "inset-x-0 inset-y-[-30%] h-[160%] z-[0]"
            )}
          />
        </div>
      </div> */}
    </section>
  );
}

export default function ProductLandingPage() {
  return (
    <main>
      <div>
        <HeroSection />
        <section className="w-full p-10 m-auto bg-muted" id="products">
          <div className="m-auto container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-neutral-800">
              Productos
            </h2>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {ProductsJSON.products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="md:basis-1/2 xl:basis-1/4 lg:basis-1/3"
                  >
                    <div className="p-4">
                      <ProductCard
                        id={product.id}
                        key={product.id}
                        title={product.name}
                        image={{
                          src: product.img[0],
                          alt: `${product.name} - ${product.id}`,
                        }}
                        price={product.price}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-neutral-950"
          id="about"
        >
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neutral-50">
                  Sobre nosotros
                </h2>
                <p className="max-w-2xl text-neutral-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {MetadataJSON.description}
                </p>
              </div>
            </div>
          </div>
        </section>
        <ContactUsSection />
        <div className="sticky bottom-16 left-[90%] bg-transparent w-fit h-fit p-6">
          <ContactButton />
        </div>
      </div>
    </main>
  );
}
