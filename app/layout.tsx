// import type { Metadata } from "next";
import { Onest } from 'next/font/google'
// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import { CLIENT_BASE_URL } from '@/lib/config'
// import MetadataJSON from '@/data/metadata.json'
// import { baseMetadata } from "@/lib/metadata";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const onest = Onest({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   metadataBase: new URL(CLIENT_BASE_URL),
//   title: MetadataJSON.title,
//   description: MetadataJSON.description,
// };

// export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${onest.className} antialiased bg-muted`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
