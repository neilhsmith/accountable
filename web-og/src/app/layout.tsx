import "./globals.css"
import { Inter } from "next/font/google"
import Nav from "@/app/(nav)/nav"
import JumpToContent from "./(nav)/jump-to-content"

const inter = Inter({
  variable: "--font-sans",
  display: "swap",
  subsets: ["latin"],
})

export const metadata = {
  title: "Accountable",
  description: "...TODO...",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[lightcoral] min-h-screen flex justify-center items-center">
        <JumpToContent />
        <Nav />
        {children}
      </body>
    </html>
  )
}
