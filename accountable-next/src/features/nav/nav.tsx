import { useState } from "react"
import {
  HiCog,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineViewList,
  HiOutlineHome,
  HiUserAdd,
} from "react-icons/hi"
import { motion } from "framer-motion"
import NavBackground from "./background"
import NavList from "./list"

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    menus: ["LOGGED_IN", "LOGGED_OUT"],
    icon: HiOutlineHome,
  },
  {
    href: "/login",
    label: "Login",
    menus: ["LOGGED_OUT"],
    icon: HiOutlineLogin,
  },
  {
    href: "/logout",
    label: "Logout",
    menus: ["LOGGED_IN"],
    icon: HiOutlineLogout,
  },
  {
    href: "/register",
    label: "Register",
    menus: ["LOGGED_OUT"],
    icon: HiUserAdd,
  },
  {
    href: "/settings",
    label: "Settings",
    menus: ["LOGGED_IN"],
    icon: HiCog,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    menus: ["LOGGED_IN"],
    icon: HiOutlineViewList,
  },
]

const listMovementVariants = {
  square: {
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  notched: {
    y: 16,
    transition: {
      delay: 0.025,
    },
  },
}

const Nav = () => {
  const [bgType, setBgType] = useState<"notched" | "square">("square")

  // TODO: will be determined by auth & bgType will then be determined by auth and current day's list status
  const menu: "LOGGED_IN" | "LOGGED_OUT" = "LOGGED_OUT"
  const menuItems = NAV_ITEMS.filter((item) => item.menus.includes(menu))

  return (
    <>
      <div className="mb-20">
        <button
          onClick={() => setBgType(bgType === "square" ? "notched" : "square")}
        >
          GG
        </button>
      </div>
      <nav className="relative">
        <NavBackground type={bgType} />
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-3 sm:inset-x-8 md:inset-x-16">
          <motion.div
            variants={listMovementVariants}
            initial={bgType}
            animate={bgType === "square" ? "square" : "notched"}
          >
            <NavList items={menuItems} />
          </motion.div>
        </div>
      </nav>
    </>
  )
}

export default Nav
