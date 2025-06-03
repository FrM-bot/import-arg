export * from "./formatDate"
export * from "./formatNumber"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { env } from "./config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const WhatsAppUrlBaseUrl = `https://wa.me/${env.PHONE_NUMBER}`

export const WhatsAppUrl = ({ text }: { text?: string } = {}) => {
  const url = new URL(WhatsAppUrlBaseUrl)
  if (text) {
    url.searchParams.set('text', text)
  }
  return url.toString()
}

export function formatGradualSpacingText(text: string) {
  return text.replace(/\s/g, " | ")
}