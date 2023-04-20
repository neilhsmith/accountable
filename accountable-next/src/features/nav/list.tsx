import NavLink, { NavLinkProps } from "./link"

const NavList = ({ items }: { items: NavLinkProps[] }) => {
  return (
    <ul className="flex items-center justify-evenly">
      {items.map((item) => (
        <li key={item.label} className="grow">
          <NavLink href={item.href} icon={item.icon} label={item.label} />
        </li>
      ))}
    </ul>
  )
}

export default NavList
