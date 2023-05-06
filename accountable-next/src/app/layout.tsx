import "./globals.css"
import type { PropsWithJustChildren } from "@/types/react"
import { inter } from "@/app/fonts"
import SkipToContent from "@/common/components/skip-to-content"
import PageTransition from "@/common/components/page-transition"
import Container from "@/common/components/container"
import Nav from "@/app/nav"

export const metadata = {
  title: "accountable",
  description: "...todo...",
}

export default function RootLayout({ children }: PropsWithJustChildren) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans tracking-normal">
        <SkipToContent />
        <Container fixed="bottom">
          <Nav />
        </Container>
        <PageTransition />
        <Container>
          <header role="banner">
            <span className="text-xl tracking-wide relative z-10">
              accountable
            </span>
          </header>
          {children}
        </Container>
      </body>
    </html>
  )
}
