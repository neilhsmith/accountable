import { useState } from "react"
import {
  HiCog,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineViewList,
  HiOutlineHome,
  HiUserAdd,
} from "react-icons/hi"
import NavBackground from "./background"
import { useUser } from "@supabase/auth-helpers-react"
import NavLink from "./link"
import NavButton from "./button"
import { AnimatePresence } from "framer-motion"

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

const Nav = () => {
  const user = useUser()
  const [showNotch, setShowNotch] = useState(false)

  const currMenu = !!user ? "LOGGED_IN" : "LOGGED_OUT"
  const navItems = NAV_ITEMS.filter((item) => item.menus.includes(currMenu))

  const shouldRenderActionBtn = currMenu === "LOGGED_IN" && showNotch // TODO: should also check if we've created a list today or not

  return (
    <>
      <div id="testcontrols" className="mb-10">
        <button onClick={() => setShowNotch(!showNotch)}>GG</button>
      </div>
      <div className="relative">
        <div className="relative z-10 pointer-events-none">
          <NavBackground notched={shouldRenderActionBtn} />
        </div>
        <nav className="absolute inset-0 flex flex-col justify-center sm:px-8">
          <ul className="flex justify-evenly sm:justify-between">
            {navItems.map((item, i) => (
              <li key={item.href} className="z-20">
                <NavLink href={item.href} label={item.label} icon={item.icon} />
              </li>
            ))}
            <AnimatePresence initial={false}>
              {shouldRenderActionBtn ? (
                <li className="absolute inset-x-0 top-0 z-0">
                  <NavButton />
                </li>
              ) : null}
            </AnimatePresence>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
