"use client"

import { useHover } from "@/common/hooks/useHover"
import { motion, useAnimate } from "framer-motion"
import { default as _Link } from "next/link"
import { PropsWithChildren, useEffect, useRef } from "react"

export default function Link({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  //const ref = useRef<HTMLAnchorElement>(null)
  const [ref, animate] = useAnimate()
  const hovered = useHover(ref)

  useEffect(() => {
    animate("div", { scale: hovered ? 0.72 : 1 })
  }, [hovered])

  return (
    <_Link ref={ref} href={href} className="border">
      <div className="flex flex-col items-center">{children}</div>
    </_Link>
  )
}
