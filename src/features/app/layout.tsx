import { PropsWithChildren } from "react"
import classNames from "classnames"
import Header from "@/features/app/header"
import Nav from "@/features/app/nav"

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
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
