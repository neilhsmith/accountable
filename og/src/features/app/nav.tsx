import Link from "next/link"
import classNames from "classnames"
import { useUser } from "@supabase/auth-helpers-react"
import { useRouter } from "next/router"
import { IconType } from "react-icons"
import {
  HiCog,
  HiOutlineLogin,
  HiOutlineLogout,
  HiOutlineViewList,
  HiOutlineHome,
  HiPlus,
  HiUserAdd,
} from "react-icons/hi"
import Button from "@/common/components/button"
import { useState } from "react"
import NavBackground from "@/features/app/nav-background"

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
  const [renderActionBtn, setRenderActionBtn] = useState(false)

  const user = useUser()

  const currMenu = !!user ? "LOGGED_IN" : "LOGGED_OUT"
  const navItems = NAV_ITEMS.filter((item) => item.menus.includes(currMenu))

  const shouldRenderActionBtn = currMenu === "LOGGED_IN" && renderActionBtn // TODO: should also check if we've created a list today or not

  // when we have an even # of items and are rendering the action btn, we need to
  // offset the middle items horizontally to make space for the button
  const offsetIdx =
    shouldRenderActionBtn && navItems.length % 2 === 0
      ? navItems.length / 2 - 1
      : null

  return (
    <>
      <button onClick={() => setRenderActionBtn(!renderActionBtn)}>asdf</button>
      <div className="relative aspect-5-1">
        {/* <motion.svg
        id="navbox-bg"
        viewBox="0 0 422 117"
        fill="#ffffff"
        className="rounded drop-shadow-xl transform-gpu"
        xmlns="http://www.w3.org/2000/svg"
      >
        <AnimatePresence mode="popLayout">
          {shouldRenderActionBtn ? (
            <motion.path
              key="1"
              transition={{
                type: "spring",
              }}
              d="M0 3.96651e-06C0 3.96651e-06 45.5 2.28504e-06 105.5 3.96651e-06C165.5 5.64797e-06 168.018 34.814 210.5 35C253.538 35.1885 255 3.96651e-06 316 3.96651e-06C377 3.96651e-06 422 3.96651e-06 422 3.96651e-06V117H0V3.96651e-06Z"
            />
          ) : (
            <motion.path
              key="2"
              transition={{
                type: "spring",
              }}
              d="M0 1.00001C0 1.00001 45.5 1.00001 105.5 1.00001C165.5 1.00001 168.018 0.813965 210.5 1C253.538 1.18847 255 1.00001 316 1.00001C377 1.00001 422 1.00001 422 1.00001V118H0V1.00001Z"
            />
          )}
        </AnimatePresence>
      </motion.svg> */}
        <NavBackground />
        <nav
          className={classNames(
            "",
            "flex flex-col justify-center sm:px-8"
            //shouldRenderActionBtn ? "bg-navbox" : "bg-white"
          )}
        >
          <ul
            className={classNames(
              "flex justify-evenly sm:justify-between",
              shouldRenderActionBtn && "pt-2%"
            )}
          >
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={classNames(
                  i === offsetIdx && "mr-24 sm:mr-32 md:mr-42"
                )}
              >
                <NavLink href={item.href} label={item.label} icon={item.icon} />
              </li>
            ))}
            {shouldRenderActionBtn ? (
              <li className="absolute inset-x-0 top-0">
                <div className="relative">
                  <Link href="/dashboard#create" passHref legacyBehavior>
                    <Button
                      as="a"
                      rounded
                      size="lg"
                      className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                    >
                      <HiPlus />
                      <span className="sr-only">Create today&apos;s list</span>
                    </Button>
                  </Link>
                </div>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav

const NavLink = ({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: IconType
}) => {
  const router = useRouter()

  const active = router.asPath === href
  const Icon = icon

  return (
    <Link
      href={href}
      className={classNames(
        "group relative flex flex-col items-center",
        active ? "text-black-0" : "text-black-20"
      )}
    >
      <Icon
        className={classNames(
          "w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20",
          "transition group-hover:scale-75"
        )}
      />
      <span
        className={classNames(
          "absolute bottom-0",
          "text-xs sm:text-base font-medium transition ",
          "opacity-0 group-hover:opacity-100 group-hover:translate-y-3"
        )}
      >
        {label}
      </span>
    </Link>
  )
}
