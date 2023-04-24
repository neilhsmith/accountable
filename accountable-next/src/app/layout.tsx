import "./globals.css"
import { Inter } from "next/font/google"
import classNames from "classnames"
import Header from "@/app/header"
import JumpToContentLink from "@/common/components/jump-to-content"
import Nav from "./nav"

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classNames(inter.variable)}>
      <body className="font-sans bg-[lightsteelblue]">
        <JumpToContentLink />
        <Nav />
        <div className="container">
          <Header />
          <div className="pt-14 pb-52">{children}</div>
        </div>
      </body>
    </html>
  )
}
