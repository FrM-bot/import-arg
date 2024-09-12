'use client'
import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductsJSON from "@/data/products.json"
// import { formatNumber } from '@/lib/utils'
import NumberTicker from '@/components/magicui/number-ticker'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { routes } from '@/lib/routes'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { WhatsAppUrl } from '@/lib/utils'
import Metadata from '@/components/metadata'
// import type { Metadata } from 'next'
// import ShinyButton from '@/components/magicui/shiny-button'

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

// export const metadata: Metadata = {
//     title: {
//         template: '%s | Acme',
//         default: 'Acme', // a default is required when creating a template
//     },
// }

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = ProductsJSON.products.find((product) => product.id === params.id)
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string }>({ src: product?.img[0] || '', alt: product?.name || '' })

    const onContact = () => {
        window.open(WhatsAppUrl({ text: product?.name }), '_blank')
    }

    return (
        <>
            <Metadata
                title={product?.name || ''}
                description={product?.description || ''}
                image={{
                    url: selectedImage.src,
                    alt: selectedImage.alt
                }}
            />

            {/* <div className="bg-neutral-100 dark:bg-gray-900 py-4"> */}
                <main className="container mx-auto pt-20 pb-6">
                    <div className='mb-4 mx-auto inline-block'>
                        <Link href={routes.home} className={buttonVariants()}>
                            <ArrowLeftIcon />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <picture className="aspect-video overflow-hidden rounded-lg bg-white dark:bg-gray-700 flex">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="object-contain h-full w-full"
                                />
                            </picture>
                            <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
                                {product?.img.map((img, index) => (
                                    <button
                                        key={index.toString()}
                                        type="button"
                                        onClick={() => setSelectedImage({ src: img, alt: `${product.name} - Image ${index + 1}` })}
                                        className='flex'
                                    >
                                        <picture
                                            key={index.toString()} className="rounded-lg">
                                            <img
                                                src={img}
                                                alt={`${product.name} - ${index + 1}`}
                                                className="object-center object-contain bg-white aspect-video"
                                            />
                                        </picture>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product?.name}</h1>
                                <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
                                    <NumberTicker value={product?.price || 0} />
                                </p>
                                {/* <div className="mt-4 flex items-center">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i.toString()} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{product.reviews} reviews</p>
                            </div> */}
                            </div>

                            {/* <p className="text-gray-700 dark:text-gray-300">{product?.description}</p> */}

                            {/* <div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
                            <RadioGroup defaultValue={product.colors[0]} className="mt-2">
                                {product.colors.map((color) => (
                                    <div key={color} className="flex items-center space-x-3">
                                        <RadioGroupItem value={color} id={`color-${color}`} />
                                        <Label htmlFor={`color-${color}`}>{color}</Label>
                                    </div>
                                    ))}
                            </RadioGroup>
                        </div> */}

                            {/* <div className="flex items-center space-x-4">
                            <Label htmlFor="quantity" className="text-sm font-medium text-gray-900 dark:text-white">
                                Quantity
                            </Label>
                            <Select value={quantity.toString()} onValueChange={(value) => setQuantity(Number.parseInt(value))}>
                                <SelectTrigger className="w-20">
                                    <SelectValue placeholder="Qty" />
                                    </SelectTrigger>
                                <SelectContent>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                    ))}
                                </SelectContent>
                                </Select>
                                </div> */}

                            <Tabs defaultValue={TabValues.description.value}>
                                <TabsList className='bg-white flex gap-2 w-fit'>
                                    <TabsTrigger value={TabValues.description.value}>{TabValues.description.title}</TabsTrigger>
                                    <TabsTrigger value={TabValues.features.value}>{TabValues.features.title}</TabsTrigger>
                                </TabsList>
                                <TabsContent value={TabValues.description.value} className="mt-3 text-sm text-gray-700 bg-white p-2 dark:text-gray-300">
                                    <p>{product?.description}</p>
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
                                {/* <Button onClick={onContact} className="flex-1">
                                Contactar por WhatsApp
                            </Button> */}
                                <ShimmerButton onClick={onContact} className="shadow-2xl rounded-none w-full" borderRadius='0px'>
                                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                        Contactar por WhatsApp
                                    </span>
                                </ShimmerButton>
                                {/* <ShinyButton text="Contactar por WhatsApp" className="w-full bg-neutral-950 text-white" /> */}
                                {/* <Button variant="outline" size="icon">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Add to wishlist</span>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share product</span>
                            </Button> */}
                            </div>

                        </div>
                    </div>
                </main>
            {/* </div> */}
        </>
    )
}