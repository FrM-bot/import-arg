import MetadataJSON from '@/data/metadata.json'

export default function Metadata({
    title,
    description,
    image
}: {
    title: string
    description: string,
    image: {
        url: string,
        alt: string
    }
}) {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={MetadataJSON.url} />
            <meta property="og:site_name" content={MetadataJSON.title} />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:image:url" content={MetadataJSON.url + image.url} />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image:url" content={MetadataJSON.url + image.url} />
            <meta property="og:image:width" content="1800" />
            <meta property="og:image:height" content="1600" />
            <meta property="og:image:alt" content={image.alt} />
            {/* <meta property="og:video" content="https://nextjs.org/video.mp4" />
            <meta property="og:video:width" content="800" />
            <meta property="og:video:height" content="600" /> */}
            {/* <meta property="og:audio" content="https://nextjs.org/audio.mp3" /> */}
            <meta property="og:type" content="website" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    )
}
