import { PropsWithChildren } from "react"
import Nav from "./nav"
import classNames from "classnames"

const Layout = ({
  bgClassName,
  children,
}: PropsWithChildren<{
  bgClassName?: string // TODO: can i type this as a tailwind bg color?
}>) => {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div
        className={classNames(
          bgClassName,
          "fixed container bottom-0 inset-x-0 pb-2"
        )}
      >
        <Nav />
      </div>
      <div className={bgClassName}>
        <div className="container min-h-screen">{children}</div>
      </div>
    </>
  )
}

export default Layout
