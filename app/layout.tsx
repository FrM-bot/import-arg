import "./globals.css"
import { Onest } from 'next/font/google'
import Header from "@/components/header"
import Footer from "@/components/footer"

const onest = Onest({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${onest.className} antialiased bg-muted dark:text-neutral-100 text-neutral-700`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
