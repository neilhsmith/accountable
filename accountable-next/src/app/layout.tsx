import type { PropsWithJustChildren } from "@/types/react"
import { inter } from "@/app/fonts"
import "./globals.css"

export const metadata = {
  title: "accountable",
  description: "...todo...",
}

export default function RootLayout({ children }: PropsWithJustChildren) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
