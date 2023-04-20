import { PropsWithChildren } from "react"
import classNames from "classnames"
import Nav from "@/features/nav/nav"

/**
 * Wraps all pages and sets the header, nav, and page background color.
 * @param bgColor A Tailwind background-color class. Take care to use the actual class name when setting this so that
 * Tailwind's dyanmic class names. - https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */
const Layout = ({
  bgColor,
  children,
}: PropsWithChildren<{
  bgColor?: string
}>) => {
  return (
    <div className={classNames(bgColor, "relative min-h-screen")}>
      <div className="container absolute bottom-2 inset-x-0">
        <Nav />
      </div>
      <div className="container">{children}</div>
    </div>
  )
}

export default Layout
