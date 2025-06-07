'use client'
import { useState } from 'react'

type Props = {
    images: string[]
    name: string
}

export default function Images({ images, name }: Props) {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string }>({ src: images[0] || '', alt: name || '' })

    return (
        <section className="space-y-4">
            <picture className="aspect-video overflow-hidden rounded-lg bg-white dark:bg-gray-700 flex">
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="object-contain h-full w-full"
                />
            </picture>
            <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
                {images.map((img, index) => (
                    <button
                        key={index.toString()}
                        type="button"
                        onClick={() => setSelectedImage({ src: img, alt: `${name} - Image ${index + 1}` })}
                        className='flex'
                    >
                        <picture
                            key={index.toString()} className="rounded-lg">
                            <img
                                src={img}
                                alt={`${name} - ${index + 1}`}
                                className="object-center object-contain bg-white aspect-video"
                            />
                        </picture>
                    </button>
                ))}
            </div>
        </section>
    )
}
