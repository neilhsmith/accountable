import type { AppProps } from "next/app"
import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import Layout from "@/features/app/layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalFontStyle />
      <Layout bgColor="bg-pages-green">
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  )
}

const inter = Inter({ subsets: ["latin"] })
function GlobalFontStyle() {
  return (
    <style jsx global>{`
      :root {
        --font-sans: ${inter.style.fontFamily};
      }
    `}</style>
  )
}
