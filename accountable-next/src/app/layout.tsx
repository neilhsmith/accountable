import type { PropsWithJustChildren } from "@/types/react"
import { inter } from "@/app/fonts"
import "./globals.css"
import SkipToContent from "@/common/components/skip-to-content"

export const metadata = {
  title: "accountable",
  description: "...todo...",
}

export default function RootLayout({ children }: PropsWithJustChildren) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans tracking-normal">
        <SkipToContent />
        <header role="banner">
          <span className="text-xl tracking-wide">accountable</span>
        </header>
        {children}
      </body>
    </html>
  )
}
