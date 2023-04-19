import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import { IconType } from "react-icons"

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

export default NavLink
