import Link from 'next/link'
import { routes } from '@/lib/routes'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Página no encontrada</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link 
        href={routes.home} 
        className={cn(
          buttonVariants({ variant: "default" }),
          "px-6 py-3"
        )}
      >
        Volver al inicio
      </Link>
    </div>
  )
}
