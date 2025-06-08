import { ContactUsSection } from "./contact";
import MetadataJSON from "@/data/metadata.json";
import { FixedContactButton } from "@/components/button/contact";
import type { Metadata } from "next";
import ProductCarrouselSection from "./product-carrousel.component";
import HeroSection from "./hero.component";
import AboutUs from "./about-us.component";
import { getHomeInfo } from "@/services/home";

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

export const revalidate = 60 * 60 * 12

export default async function ProductLandingPage() {
  const { title, description, image } = await getHomeInfo()

  return (
    <>
      <HeroSection title={title} description={description} image={image} />
      <ProductCarrouselSection />
      <AboutUs />
      <ContactUsSection />
      <FixedContactButton />
    </>
  );
}
