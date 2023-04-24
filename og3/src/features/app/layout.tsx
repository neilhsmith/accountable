import { PropsWithChildren } from "react"
import classNames from "classnames"
import Nav from "@/features/nav/nav"
import { AnimatePresence, motion } from "framer-motion"
import usePrevious from "@/common/hooks/usePrevious"
import Header from "@/features/app/header"
import { useRouter } from "next/router"

let idk = 1

const Layout = ({
  bgClassName,
  children,
}: PropsWithChildren<{ bgClassName: string }>) => {
  const router = useRouter()
  const prevBgClassName = usePrevious(bgClassName)

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div
        className={classNames("fixed container bottom-0 inset-x-0 pb-2 z-30")}
      >
        <Nav />
      </div>
      <div className={classNames("overflow-y-hidden")}>
        <AnimatePresence initial={false}>
          <motion.div
            key={router.route}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{}}
            transition={{
              type: "tween",
              duration: 5,
            }}
            className={classNames("min-h-screen relative", bgClassName)}
            style={{
              zIndex: idk++,
            }}
          >
            <motion.div
              //initial={{ opacity: 0, y: -32 }}
              //animate={{ opacity: 1, y: 0 }}
              //exit={{ opacity: 0, y: -32 }}
              //transition={{ delay: 0.4 }}
              className="container"
            >
              <Header />
              <div className="pt-14 pb-56">{children}</div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default Layout
