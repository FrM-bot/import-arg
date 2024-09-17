import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsJSON from "@/data/products.json"
import NumberTicker from '@/components/magicui/number-ticker'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import type { Metadata } from 'next'
import Images from './images'
import ContactButton from "./contact-button"
import { notFound } from "next/navigation"
import MetadataJSON from '@/data/metadata.json'

const TabValues = {
    description: {
        title: 'Description',
        value: 'description'
    },
    features: {
        title: 'Características',
        value: 'features'
    }
} as const

async function getProduct(id: string) {
    const product = ProductsJSON.products.find((product) => product.id === id)
    if (!product) notFound()
    return product
}

export async function generateStaticParams() {
    return ProductsJSON.products.map((product) => ({
        id: product.id
    }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const product = await getProduct(params.id)

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            type: 'website',
            url: MetadataJSON.url,
            locale: MetadataJSON.locale,
            title: product.name,
            description: product.description,
            images: [
                {
                    url: MetadataJSON.url + product.img[0],
                    width: 800,
                    height: 600,
                },
            ],
        },
    }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = await getProduct(params.id)

    return (
        <>
            <main className="container mx-auto pt-20 pb-6">
                <div className='mb-4 mx-auto inline-block'>
                    <Link href={routes.home} className={buttonVariants()}>
                        <ArrowLeftIcon />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <Images
                        images={product?.img || []}
                        name={product?.name || ''}
                    />

                    <div className="space-y-3">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product?.name}</h1>
                            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                                <NumberTicker value={product?.price || 0} />
                            </p>
                        </div>
                        <Tabs defaultValue={TabValues.description.value}>
                            <TabsList className='bg-white flex gap-2 w-fit'>
                                <TabsTrigger value={TabValues.description.value}>{TabValues.description.title}</TabsTrigger>
                                <TabsTrigger value={TabValues.features.value}>{TabValues.features.title}</TabsTrigger>
                            </TabsList>
                            <TabsContent value={TabValues.description.value} className="mt-3 text-sm text-gray-700 bg-white p-2 dark:text-gray-300">
                                {product?.description.split('|').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                            </TabsContent>
                            <TabsContent value={TabValues.features.value} className="mt-3">
                                <ul className="list-disc pl-7 space-y-2 text-sm text-gray-700 bg-white p-2 dark:text-gray-300">
                                    {product?.features.map((feature, index) => (
                                        <li key={index.toString()}>{feature}</li>
                                    ))}
                                </ul>
                            </TabsContent>
                        </Tabs>

                        <div className="flex space-x-4">
                            <ContactButton
                                productName={product?.name || ''}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}