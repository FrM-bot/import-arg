'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailPage() {
    const [quantity, setQuantity] = useState(1)

    const product = {
        name: "Premium Wireless Headphones",
        price: 299.99,
        rating: 4.5,
        reviews: 128,
        description: "Experience unparalleled sound quality with our Premium Wireless Headphones. Featuring advanced noise-cancellation technology, Bluetooth 5.0 connectivity, and up to 30 hours of battery life, these headphones are perfect for music enthusiasts and professionals alike.",
        features: [
            "Active Noise Cancellation",
            "30-hour battery life",
            "Bluetooth 5.0",
            "Comfortable over-ear design",
            "Built-in microphone for calls",
            "Compatible with voice assistants"
        ],
        colors: ["Black", "Silver", "Rose Gold"],
        images: [
            "/placeholder.svg?height=400&width=400",
            "/placeholder.svg?height=400&width=400",
            "/placeholder.svg?height=400&width=400",
            "/placeholder.svg?height=400&width=400"
        ]
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
                        AudioPhile
                    </Link>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
                        <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Products</Link>
                        <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
                        <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link>
                    </nav>
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="sr-only">View cart</span>
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full object-center object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, index) => (
                                <div key={index.toString()} className="aspect-square relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                                    <Image
                                        src={img}
                                        alt={`${product.name} - Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full object-center object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
                            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
                            <div className="mt-4 flex items-center">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i.toString()} className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{product.reviews} reviews</p>
                            </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300">{product.description}</p>

                        <div>
                            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>
                            <RadioGroup defaultValue={product.colors[0]} className="mt-2">
                                {product.colors.map((color) => (
                                    <div key={color} className="flex items-center space-x-3">
                                        <RadioGroupItem value={color} id={`color-${color}`} />
                                        <Label htmlFor={`color-${color}`}>{color}</Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Label htmlFor="quantity" className="text-sm font-medium text-gray-900 dark:text-white">
                                Quantity
                            </Label>
                            <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                                <SelectTrigger className="w-20">
                                    <SelectValue placeholder="Qty" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex space-x-4">
                            <Button className="flex-1">
                                Add to Cart
                                <ShoppingCart className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <Heart className="h-4 w-4" />
                                <span className="sr-only">Add to wishlist</span>
                            </Button>
                            <Button variant="outline" size="icon">
                                <Share2 className="h-4 w-4" />
                                <span className="sr-only">Share product</span>
                            </Button>
                        </div>

                        <Tabs defaultValue="description">
                            <TabsList>
                                <TabsTrigger value="description">Description</TabsTrigger>
                                <TabsTrigger value="features">Features</TabsTrigger>
                                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                                <p>{product.description}</p>
                            </TabsContent>
                            <TabsContent value="features" className="mt-4">
                                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    {product.features.map((feature, index) => (
                                        <li key={index.toString()}>{feature}</li>
                                    ))}
                                </ul>
                            </TabsContent>
                            <TabsContent value="shipping" className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                                <p>Free shipping on orders over $100. Standard shipping takes 3-5 business days. Express shipping available at checkout.</p>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </main>

            <footer className="bg-white dark:bg-gray-800 shadow-inner mt-12">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">AudioPhile is your one-stop shop for high-quality audio equipment. We're passionate about delivering the best sound experience to our customers.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">FAQs</Link></li>
                                <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Shipping & Returns</Link></li>
                                <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">1234 Audio Lane<br />Soundville, MU 56789<br />support@audiophile.com<br />(555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
                            <form className="flex">
                                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                                <Button type="submit" className="rounded-l-none">Subscribe</Button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
                        © 2023 AudioPhile. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}