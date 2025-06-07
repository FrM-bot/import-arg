import type { Metadata } from "next"
import MetadataJSON from '@/data/metadata.json'
import { env } from "@/config/env"

export const baseMetadata: Metadata = {
    metadataBase: new URL(env.CLIENT_BASE_URL),
    openGraph: {
      title: MetadataJSON.title,
      description: MetadataJSON.description,
      url: MetadataJSON.url,
      siteName: MetadataJSON.title,

      images: [
        {
          url: `${MetadataJSON.url}/hero.webp`, // Must be an absolute URL
          width: 800,
          height: 600,
        },
      ],
    //   videos: [
    //     {
    //       url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
    //       width: 800,
    //       height: 600,
    //     },
    //   ],
    //   audio: [
    //     {
    //       url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
    //     },
    //   ],
      locale: MetadataJSON.locale,
      type: MetadataJSON.type as 'website' | 'article' | 'profile',
    },
  }