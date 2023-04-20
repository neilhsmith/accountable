import "@/styles/globals.css"

import { useState } from "react"
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react"
import { Database } from "@/types/supabase"
import { Inter } from "next/font/google"
import { AppPropsWithLayout } from "@/features/app/types"
import { AnimatePresence } from "framer-motion"

const inter = Inter({
  subsets: ["latin"],
})

type Props = AppPropsWithLayout<{
  initialSession: Session
}>

function MyApp({ Component, pageProps }: Props) {
  const [supabase] = useState(() => createBrowserSupabaseClient<Database>())

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${inter.style.fontFamily};
        }
      `}</style>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <div className="overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {getLayout(<Component {...pageProps} />)}
          </AnimatePresence>
        </div>
      </SessionContextProvider>
    </>
  )
}
export default MyApp
