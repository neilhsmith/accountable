"use client"

import { PropsWithJustChildren } from "@/types/react"
import { usePathname } from "next/navigation"
import pageBackgroundCVA, { type AppRoute } from "../cva/page-background"

const RouteBody = ({ children }: PropsWithJustChildren) => {
  const pathname = usePathname() as AppRoute

  return <body className={pageBackgroundCVA({ pathname })}>{children}</body>
}

export default RouteBody
