import "./globals.css"
import type { PropsWithJustChildren } from "@/types/react"
import { inter } from "@/app/fonts"
import RouteBody from "@/common/components/route-body"
import SkipToContent from "@/common/components/skip-to-content"
import Container from "@/common/components/container"
import Nav from "@/app/(nav)/nav"
import Transition from "./(nav)/transition"
import { PageTransitionProvider } from "./(nav)/usePageTransition"

export const metadata = {
  title: "accountable",
  description: "...todo...",
}

export default function RootLayout({ children }: PropsWithJustChildren) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <RouteBody>
        <PageTransitionProvider>
          <SkipToContent />
          <Container fixed="bottom">
            <Nav />
          </Container>
          <Container>
            <header role="banner">
              <span className="text-xl tracking-wide relative z-10">
                accountable
              </span>
            </header>
            {children}
          </Container>
        </PageTransitionProvider>
      </RouteBody>
    </html>
  )
}
