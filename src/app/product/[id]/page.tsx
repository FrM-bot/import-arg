import NumberTicker from "@/components/magicui/number-ticker";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { routes } from "@/lib/routes";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Images from "./images.component";
import ContactButton from "./contact-button.component";
import MetadataJSON from "@/data/metadata.json";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { getProduct } from "@/services/products";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { getExchangeRate } from "@/services/exchange";

// async function getProduct(id: string) {
//   const product = ProductsJSON.products.find((product) => product.id === id);
//   if (!product) notFound();
//   return product;
// }

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      type: "website",
      url: MetadataJSON.url,
      locale: MetadataJSON.locale,
      title: product.name,
      // description: product.description,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProduct(id);
  const exchangeRate = await getExchangeRate();

  return (
    <Container>
      <div className="mb-4 mx-auto inline-block">
        <Link href={routes.home} className={cn(buttonVariants(), "p-2 h-auto")}>
          <ArrowLeftIcon />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Images images={product?.images || []} name={product?.name || ""} />

        <section className="space-y-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product?.name}
            </h1>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              <NumberTicker value={product?.price * exchangeRate.venta * 1.01 || 0} />
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold border-b mb-2">
              Descripción
            </h2>
            <BlocksRenderer content={product?.description as BlocksContent} />

            {/* <ul> */}
              {/* {product?.description.map((feature, index) => (
                  <li
                    className="odd:bg-neutral-100 px-2 py-1"
                    key={index.toString()}
                  >
                    {feature}
                  </li>
                ))} */}
            {/* </ul> */}
          </div>
          <div className="flex space-x-4">
            <ContactButton productName={product?.name || ""} />
          </div>
        </section>
      </div>
    </Container>
  );
}
