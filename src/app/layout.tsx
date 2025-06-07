import "./globals.css"
import { Onest } from 'next/font/google'
import Header from "@/components/header"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"

const onest = Onest({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={cn(onest.className, "antialiased bg-muted dark:text-neutral-100 text-neutral-700")}
        suppressHydrationWarning
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
