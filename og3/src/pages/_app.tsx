import "@/styles/globals.css"
import type { AppProps } from "@/types/next"
import { Inter } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import Layout from "@/features/app/layout"

export default function App({ Component, pageProps }: AppProps) {
  const pageBgColor = Component.bgColor

  return (
    <>
      <AppCSSVars />
      <AnimatePresence mode="wait" initial={false}>
        <Layout bgColor={pageBgColor}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}

const inter = Inter({ subsets: ["latin"] })
function AppCSSVars() {
  return (
    <style jsx global>{`
      :root {
        --font-sans: ${inter.style.fontFamily};
      }
    `}</style>
  )
}
