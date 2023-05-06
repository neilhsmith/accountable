"use client"

/**
 * TODO:
 * - optimze this. the whole thing shouldn't be a client component and some callbacks can probably be memoized
 * - instead of scaling, move. an element can be placed off viewport which is the same size as the viewport, just transition it to 0/0. can use a border w/ moving
 */

import Link from "next/link"
import { useRouter } from "next/navigation"
import { PropsWithChildren, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cx } from "class-variance-authority"
import { AppRoute } from "@/common/cva/page-background"
import pageBackgroundCVA from "@/common/cva/page-background"

const FLOURISH_TIME = 1000

const Nav = () => {
  const router = useRouter()
  //const [flourish, setFlourish] = useToggle(false)
  const [navToPathname, setNavToPathname] = useState<AppRoute | null>(null)
  const flourishClassName = pageBackgroundCVA({ pathname: navToPathname })

  const handleLinkClick = (pathname: AppRoute) => {
    /**
     * TODO: do i need to do this with a setTimeout?
     * would be cleaner to get the end of animation directly in framer
     */

    setNavToPathname(pathname)
    setTimeout(() => {
      router.push(pathname)
      setNavToPathname(null)
    }, FLOURISH_TIME)
  }

  return (
    <nav aria-label="Main nav" role="navigation" className="relative">
      <AnimatePresence initial={false}>
        {!!navToPathname ? (
          <motion.div
            animate={{
              scale: 200,
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.05,
              },
            }}
            transition={{
              duration: FLOURISH_TIME / 1000,
            }}
            className={cx(
              "absolute -z-10 -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full",
              flourishClassName
            )}
          />
        ) : null}
      </AnimatePresence>
      <ul className="flex justify-around">
        <li>
          <NavLink href="/" onClick={handleLinkClick}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink href="/login" onClick={handleLinkClick}>
            login
          </NavLink>
        </li>
        <li>
          <NavLink href="/register" onClick={handleLinkClick}>
            register
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

const NavLink = <T extends AppRoute>({
  children,
  href,
  onClick,
}: PropsWithChildren<{
  href: AppRoute
  onClick: (href: AppRoute) => void
}>) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick(href)
  }

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  )
}
