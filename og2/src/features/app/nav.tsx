import { useState } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import Link from "next/link"
import classNames from "classnames"
import {
  HiOutlineCog,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineViewList,
  HiOutlineHome,
  HiUserAdd,
  HiOutlinePlus,
} from "react-icons/hi"
import Button from "@/common/components/button"

type Shape = "square" | "notched"
type Animation = Record<Shape, object>

type Item = {
  href: string
  label: string
  icon: (props: React.SVGAttributes<SVGElement>) => JSX.Element
}

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: HiOutlineHome,
    menus: ["LOGGED_IN", "LOGGED_OUT"],
  },
  {
    href: "/login",
    label: "Login",
    icon: HiOutlineLogin,
    menus: ["LOGGED_OUT"],
  },
  {
    href: "/logout",
    label: "Logout",
    icon: HiOutlineLogout,
    menus: ["LOGGED_IN"],
  },
  {
    href: "/register",
    label: "Register",
    icon: HiUserAdd,
    menus: ["LOGGED_OUT"],
  },
  {
    href: "/settings",
    label: "Settings",
    icon: HiOutlineCog,
    menus: ["LOGGED_IN"],
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: HiOutlineViewList,
    menus: ["LOGGED_IN"],
  },
]

const backgroundVariants: Animation = {
  square: {
    d: "M0 0 L 25 0 C38 0 38 0 50 0 C63 0 62 0 75 0 L 100 0 L 100 27 L 0 27 Z",
    transition: {
      duration: 0.1,
      delay: 0.3,
    },
  },
  notched: {
    d: "M0 0 L 25 0 C38 0 38 8 50 8 C63 8 62 0 75 0 L 100 0 L 100 27 L 0 27 Z",
    transition: {
      duration: 0.1,
    },
  },
}
const listVariants: Animation = {
  square: {
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.4,
    },
  },
  notched: {
    y: "26%",
    transition: {
      duration: 0.1,
      delay: 0.05,
    },
  },
}
const buttonVariants: Animation = {
  square: {
    opacity: 0,
    y: -6,
    transition: {
      duration: 0.2,
    },
  },
  notched: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      delay: 0.125,
    },
  },
}

const Nav = () => {
  const [shape, setShape] = useState<Shape>("square")

  const menu = "LOGGED_IN"
  const menuItems = NAV_ITEMS.filter((item) => item.menus.includes(menu))

  return (
    <>
      <div id="testcontrols" className="">
        <button
          onClick={() => setShape(shape === "square" ? "notched" : "square")}
        >
          GG
        </button>
      </div>
      <motion.nav initial={shape} animate={shape} className="relative">
        <svg
          viewBox="0 0 100 27"
          className="fill-white rounded md:rounded-lg lg:rounded-xl drop-shadow transform-gpu"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path variants={backgroundVariants} />
        </svg>
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-3 sm:inset-x-6 md:inset-x-12 lg:inset-x-16">
          <motion.ul variants={listVariants} className="flex justify-around">
            {menuItems.map((item) => (
              <li key={item.label} className="grow">
                <NavLink item={item} />
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="absolute top-0 inset-x-0 h-full flex justify-center pointer-events-none">
          <motion.div variants={buttonVariants}>
            <Link
              href="/dashboard#create"
              passHref
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 aspect-square pointer-events-auto"
            >
              <Button rounded className="w-full h-full">
                <HiOutlinePlus className="w-1/2 h-1/2 md:w-2/5 md:h-2/5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </>
  )
}

export default Nav

function NavLink({ item }: { item: Item }) {
  const { href, label, icon: Icon } = item

  const router = useRouter()
  const active = router.pathname === href

  // TODO: display label on larger screens, add a bg color flourish, svg animation on state change

  return (
    <Link href={href} className="flex justify-center">
      <span className="sr-only">{label}</span>
      <Icon
        className={classNames(
          "w-4/6 h-auto",
          active ? "text-black-dark stroke-2" : "text-black-light stroke-1"
        )}
      />
    </Link>
  )
}
