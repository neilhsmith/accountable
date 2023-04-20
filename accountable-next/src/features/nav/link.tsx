import { IconType } from "react-icons"

export type NavLinkProps = {
  href: string
  icon: IconType
  label: string
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const Icon = icon

  return (
    <div className="flex justify-center">
      <Icon className="h-full w-3/4 max-w-[3rem] sm:max-w-[4rem] md:max-w-[5rem] lg:max-w-[5.5rem]" />
    </div>
  )
}

export default NavLink
