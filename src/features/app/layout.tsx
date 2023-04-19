import { PropsWithChildren } from "react"
import classNames from "classnames"
import Header from "@/features/app/header"
//import Nav from "@/features/app/nav"
import Nav from "@/features/nav/nav"
import { motion } from "framer-motion"

const Layout = ({
  children,
  bgColor,
}: PropsWithChildren<{
  bgColor?: string
}>) => {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className={classNames(bgColor, "h-screen")}>
        <div className="relative container mx-auto h-full">
          <div className="fixed bottom-4 inset-x-0 container mx-auto">
            <Nav />
          </div>
          <Header />
          <motion.div
            layout
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Layout
