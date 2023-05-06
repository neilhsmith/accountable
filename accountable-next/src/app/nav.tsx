"use client"

import Link from "next/link"
import { PropsWithChildren, useCallback } from "react"
import { useToggle } from "react-use"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"

const FLOURISH_TIME = 200

const Nav = () => {
  const router = useRouter()
  const [flourish, setFlourish] = useToggle(false)

  const handleLinkClick = (href: string) => {
    /**
     * TODO:
     *
     * do i need to do this with a setTimeout?
     * would be cleaner to get the end of animation directly in framer
     */

    setFlourish(true)
    setTimeout(() => {
      router.push(href)
      setFlourish(false)
    }, FLOURISH_TIME)
  }

  return (
    <nav aria-label="Main nav" role="navigation" className="relative">
      <AnimatePresence initial={false}>
        {flourish ? (
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
            className="absolute -z-10 -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-page-logout"
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

const NavLink = ({
  children,
  href,
  onClick,
}: PropsWithChildren<{ href: string; onClick: (href: string) => void }>) => {
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
