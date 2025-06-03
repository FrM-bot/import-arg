export * from "./formatDate"
export * from "./formatNumber"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "./config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const whatsAppUrlBaseUrl = `https://wa.me/${env.PHONE_NUMBER}`

export const getWhatsAppUrl = ({ text }: { text?: string } = {}) => {
  const url = new URL(whatsAppUrlBaseUrl)
  if (text) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}

export function formatGradualSpacingText(text: string) {
  return text.replace(/\s/g, " | ")
}