import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/card";
import { getProducts } from "@/services/products";
import { getExchangeRate } from "@/services/exchange";
// import Link from "next/link";

export default async function ProductCarrousel() {
  const { products } = await getProducts();
  const exchangeRate = await getExchangeRate();

  return (
    <section className="w-full p-10 m-auto bg-muted" id="products">
      <div className="m-auto container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-neutral-800">
          Productos
        </h2>
        {/* <div className="flex justify-end">
          <Link href="/products" className="text-neutral-800">
            Ver todos
          </Link>
        </div> */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product) => (
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
                      src: product.image,
                      alt: `${product.name} - ${product.id}`,
                    }}
                    price={product.price * exchangeRate.venta * 1.01}
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
  );
}
